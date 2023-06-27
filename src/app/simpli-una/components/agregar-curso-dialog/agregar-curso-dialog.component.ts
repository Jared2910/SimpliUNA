import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvidersService } from '../../services/data-providers.service';
import { Profesor } from '../../interfaces/profesor.interface';
import { Dia } from '../../interfaces/dias.interface';
import { Message, MessageService } from 'primeng/api';
import { CursosRegistradosService } from '../../services/cursos-registrados.service';

@Component({
  selector: 'app-agregar-curso-dialog',
  templateUrl: './agregar-curso-dialog.component.html',
  styles: []
})
export class AgregarCursoDialogComponent implements OnInit {

  msgs1!: Message[];
  mostrarDialog: boolean = false;
  filtered: any[] = [];

  listaProfesores: Profesor[] = this.dataProvide.profesores
  listaDias!: string[];

  selectedNRC!: string;
  selectedCodigoDeCurso!: string;
  selectedProfesor!: string;
  selectedNombre!: string;
  selectedDia!: string;

  nuevoDia: FormControl = this.fb.control('', Validators.required);
  nuevoHoraDeEntrada: FormControl = this.fb.control('', Validators.required);
  nuevoHoraDeSalida: FormControl = this.fb.control('', Validators.required);

  horaDeEntrada!: Date;
  horaDeSalida!: Date;


  agregarCursoFormulario: FormGroup = this.fb.group({
    NRC: [null, [Validators.required]],
    nombre: [null, [Validators.required]],
    codigo: [null, [Validators.required]],
    dias: this.fb.array([], Validators.required),
    horasDeEntrada: this.fb.array([], Validators.required),
    horasDeSalida: this.fb.array([], Validators.required),
    profesor: [null, [Validators.required]],
  });


  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    public dataProvide: DataProvidersService,
    private cursosRegistradosService: CursosRegistradosService
  ) { }

  ngOnInit(): void {
    this.listaDias = Object.values(Dia)

    this.msgs1 = [
      {severity:'info', summary:'No hay ningún horario registrado'},
    ];
  }

  show() {
    this.mostrarDialog = true;
  }

  hide() {
    this.mostrarDialog = false;
  }

  showInvalidCurso() {
    this.messageService.add({ severity: 'error', summary: 'Oh oh!!', detail: 'Por favor complete los campos faltantes' });
  }

  showInvalidHorario() {
    this.messageService.add({ severity: 'error', summary: 'Horario inválido', detail: 'Por favor complete el dia, hora de entrada y hora de salida' });
  }

  get diasArr() {
    return this.agregarCursoFormulario.get('dias') as FormArray;
  }
  get horaEntradaArr() {
    return this.agregarCursoFormulario.get('horasDeEntrada') as FormArray;
  }
  get horaSalidaArr() {
    return this.agregarCursoFormulario.get('horasDeSalida') as FormArray;
  }

  borrarHorario(indice: number): void{
    this.diasArr.removeAt(indice);
    this.horaEntradaArr.removeAt(indice);
    this.horaSalidaArr.removeAt(indice);
  }

  guardarCurso(){
    if(this.agregarCursoFormulario.invalid){
      console.log(this.agregarCursoFormulario.controls)
      this.showInvalidCurso()
      return;
    }

    let curso = this.agregarCursoFormulario.value;

    console.log(curso)

    this.cursosRegistradosService.agregarCurso(curso);

    this.agregarCursoFormulario = this.fb.group({
      NRC: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      codigo: [null, [Validators.required]],
      dias: this.fb.array([],Validators.required),
      horasDeEntrada: this.fb.array([],Validators.required),
      horasDeSalida: this.fb.array([],Validators.required),
      profesor: [null, [Validators.required]],
    })

    this.mostrarDialog = false;
  }

  filtrar(event: any, dataList: any[], searchParam: string = '') {
    let filtered: any[] = [];
    let query = event.query;
    let valueData;


    dataList.forEach(value => {

      valueData = value[searchParam] ? value[searchParam] : value;

      if (valueData.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(value);
      }
    })

    this.filtered = filtered
  }

  agregarHorario(){
    if(this.nuevoDia.invalid || this.nuevoHoraDeEntrada.invalid || this.nuevoHoraDeSalida.invalid){
      this.showInvalidHorario();
      return;
    }

    this.diasArr.push(
      this.fb.control(
        this.nuevoDia.value, Validators.required
      )
    );
    this.horaEntradaArr.push(
      this.fb.control(
        this.horaDeEntrada, Validators.required
      )
    );
    this.horaSalidaArr.push(
      this.fb.control(
        this.horaDeSalida, Validators.required
      )
    );



    this.nuevoDia.reset();
    this.nuevoHoraDeEntrada.reset();
    this.nuevoHoraDeSalida.reset();
  }


}

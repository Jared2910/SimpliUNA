import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataProvidersService } from '../../services/data-providers.service';
import { Profesor } from '../../interfaces/profesor.interface';

@Component({
  selector: 'app-agregar-curso-dialog',
  templateUrl: './agregar-curso-dialog.component.html',
  styles: []
})
export class AgregarCursoDialogComponent implements OnInit {

  mostrarDialog: boolean = false;

  listaProfesores: Profesor[] = this.dataProvide.profesores

  selectedNRC!: string;
  selectedCodigoDeCurso!: string;
  selectedProfesor!: string;
  selectedNombre!: string;


  filtered: any[] = [];


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



  agregarCursoFormulario: FormGroup = this.fb.group({
    NRC: [null, [Validators.required]],
    nombre: [null, [Validators.required]],
    codigo: [null, [Validators.required]],
    dias: this.fb.array([], Validators.required),
    hora_entrada: this.fb.array([], Validators.required),
    hora_salida: this.fb.array([], Validators.required),
    profesor: [null, [Validators.required]],
  });


  constructor(
    private fb: FormBuilder,
    public dataProvide: DataProvidersService
  ) { }

  ngOnInit(): void {
  }

  show() {
    this.mostrarDialog = true;
  }

  hide() {
    this.mostrarDialog = false;
  }


}

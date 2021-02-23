import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-tarefa-cadastro',
  templateUrl: './tarefa-cadastro.component.html',
  providers: [DatePipe]
})
export class TarefaCadastroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe) { }

  tarefa : FormGroup;

  

  ngOnInit() {
      this.tarefa = this.formBuilder.group({
        DtCadastro: [this.datePipe.transform(Date.now(), 'dd/MM/yyyy')],
        DtEntrega: [this.datePipe.transform(Date.now(), 'dd/MM/yyyy')],
        Empresa: [],
        Titulo: [],
        Pessoas: [],
        Descricao: [],
        Tag: [],
        Situacao: []
    })
  }

  onSubmit(){
    console.log(this.tarefa)
  }

}

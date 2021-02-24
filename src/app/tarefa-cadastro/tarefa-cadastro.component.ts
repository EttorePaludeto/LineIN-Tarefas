import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DatePipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router'
import { first, map } from 'rxjs/operators';

import { TarefaService } from '../tarefa-service.service';



@Component({
  selector: 'app-tarefa-cadastro',
  templateUrl: './tarefa-cadastro.component.html',
  providers: [DatePipe]
})
export class TarefaCadastroComponent implements OnInit {
  formTarefa : FormGroup;
  id: string;
  isAddMode: boolean;

  constructor(private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router,
              private tarefaService: TarefaService
              ) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.novaTarefa();

    if (!this.isAddMode) {
        this.tarefaService.getById(this.id)
        .subscribe(x=>{
          this.formTarefa.patchValue(x);
          console.log(x);
        });

    }

  }

  iniciar(){
    return this.novaTarefa();
  }

  novaTarefa(): FormGroup  {
   return this.formTarefa = this.formBuilder.group({
      DtCadastro: [this.datePipe.transform(Date.now(), 'dd/MM/yyyy')],
      DtEntrega: [this.datePipe.transform(Date.now(), 'dd/MM/yyyy')],
      Empresa: [],
      Titulo: [],
      Pessoas: [],
      Descricao: [],
      Tag: [],
      Situacao: ['Aberta']
      })
  }

  onSubmit(){
    console.log(this.formTarefa)
  }



}

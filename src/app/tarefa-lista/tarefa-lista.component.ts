import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as tarefasJson from '../../assets/tarefas.json'

@Component({
  selector: 'app-tarefa-lista',
  templateUrl: './tarefa-lista.component.html',
  styleUrls: ['./tarefa-lista.component.css']
})
export class TarefaListaComponent implements OnInit {

  constructor(private router: Router) { }

  title = 'LineIn-Tarefas';
  tarefas: any = (tarefasJson as any).default;
  IsFinalize: boolean = false;

classSituacao(situacao)
{
  if (situacao=="Aberta") return "badge badge-primary";
  if (situacao=="Movimento") return "badge badge-warning";
  if (situacao=="Fechada") return "badge badge-success";
}

classTachado(situacao)
{
  if (situacao=="Fechada") return "txtTachado";
}

addTarefa() {
  this.router.navigate(['/NovaTarefa'])
}

editTarefa(id:number){
  this.router.navigate(['/EditarTarefa', id])
}





ngOnInit()
{
 
}

}

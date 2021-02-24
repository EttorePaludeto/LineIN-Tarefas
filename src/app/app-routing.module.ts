import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TarefaCadastroComponent } from './tarefa-cadastro/tarefa-cadastro.component';
import { TarefaListaComponent } from './tarefa-lista/tarefa-lista.component';

const routes: Routes = [
{path: '', component: TarefaListaComponent},
{path: 'Lista', component: TarefaListaComponent},
{path: 'NovaTarefa', component: TarefaCadastroComponent},
{path: 'EditarTarefa/:id', component: TarefaCadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

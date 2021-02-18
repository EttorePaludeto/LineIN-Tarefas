import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaCadastroComponent } from './tarefa-cadastro/tarefa-cadastro.component';
import { TarefaListaComponent } from './tarefa-lista/tarefa-lista.component';

@NgModule({
  declarations: [	
    AppComponent,
      TarefaCadastroComponent,
      TarefaListaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

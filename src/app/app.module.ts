import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaCadastroComponent } from './tarefa-cadastro/tarefa-cadastro.component';
import { TarefaListaComponent } from './tarefa-lista/tarefa-lista.component';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  declarations: [	
    AppComponent,
      TarefaCadastroComponent,
      TarefaListaComponent,
      FormDebugComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

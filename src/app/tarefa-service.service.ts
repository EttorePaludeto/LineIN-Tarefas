import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITarefa } from './models/ITarefa';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const url = 'assets/tarefas.json';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {

constructor(private http: HttpClient) { }

getById(id:string): Observable<ITarefa> {
  return this.http.get<ITarefa[]>(url)
  .pipe(
    map(tar=> {return tar.find(e=>e.id==id)})
  )
}

}

import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoModel } from '../pensamento-model';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento {

  listaPensamentos: PensamentoModel[] = [] as any [];

}

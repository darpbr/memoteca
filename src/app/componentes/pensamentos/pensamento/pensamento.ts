import { PensamentoModel } from '../pensamento-model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: false,
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento {

  @Input()
  pensamento: PensamentoModel = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Darp',
    modelo: 'modelo2'
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    } else {
      return 'pensamento-p'
    }
  }

}

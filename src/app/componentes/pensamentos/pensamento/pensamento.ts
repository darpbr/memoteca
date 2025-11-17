import { Pensamento } from '../pensamento-model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: false,
  templateUrl: './pensamento.html',
  styleUrls: ['./pensamento.css'],
})
export class PensamentoComponent {

  @Input() pensamento!: Pensamento;

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }

}

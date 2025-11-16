import { Component } from '@angular/core';
import { PensamentoModel } from '../pensamento-model';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {

  pensamento: PensamentoModel = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  };

  criarPensamento() {
    alert('Pensamento criado com sucesso!\n'
      + this.pensamento.conteudo
    + '\npor ' + this.pensamento.autoria);
  }

  cancelarEnvio() {
    alert('Envio cancelado.\nVoltando para a tela inicial.');
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {

  pensamento = {
    id: '1',
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

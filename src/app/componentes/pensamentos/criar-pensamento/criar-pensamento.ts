import { Component } from '@angular/core';
import { Pensamento } from '../pensamento-model';
import { PensamentoService } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrls: ['./criar-pensamento.css'],
})
export class CriarPensamento {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  };

  constructor(private service: PensamentoService,
    private router: Router
  ) { }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelarEnvio() {
    this.router.navigate(['/listarPensamento']);
  }

}

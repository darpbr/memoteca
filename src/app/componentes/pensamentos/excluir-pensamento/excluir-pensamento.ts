import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Pensamento } from '../pensamento-model';
import { PensamentoService } from '../pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: false,
  templateUrl: './excluir-pensamento.html',
  styleUrls: ['./excluir-pensamento.css'],
})
export class ExcluirPensamento {
  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(id).subscribe((pensamento) => {
        this.pensamento = pensamento;
      });
    }
  }

  excluirPensamento(): void {
    this.service.excluir(this.pensamento.id!).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}

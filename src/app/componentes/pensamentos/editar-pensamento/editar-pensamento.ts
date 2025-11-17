import { Component } from '@angular/core';
import { Pensamento } from '../pensamento-model';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento';

@Component({
  selector: 'app-editar-pensamento',
  standalone: false,
  templateUrl: './editar-pensamento.html',
  styleUrls: ['./editar-pensamento.css'],
})
export class EditarPensamento {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

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

  editarPensamento(): void {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}

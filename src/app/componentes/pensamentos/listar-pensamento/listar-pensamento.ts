import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento';
import { Pensamento } from '../pensamento-model';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  templateUrl: './listar-pensamento.html',
  styleUrls: ['./listar-pensamento.css'],
})
export class ListarPensamento implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.carregarPensamentos();
  }

  private carregarPensamentos(): void {
    this.service.listar().subscribe({
      next: (listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
        console.log('Pensamentos carregados:', this.listaPensamentos);
      },
      error: (erro) => {
        console.error('Erro ao carregar pensamentos:', erro);
      }
    });
  }

}

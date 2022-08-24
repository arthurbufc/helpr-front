import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {

  public chamadoList: Chamado[] = [
    {
      id: 12,
      titulo: "Chamado 1",
      descricao: "Corrigir bug de autenticação",
      prioridade: 0,
      status: 2,
      cliente: 1,
      tecnico: 1,
      nomeCliente: "Brenda",
      nomeTecnico: "Gabriel Braga",
      dataAbertura: "24/08/2022"
    }
  ];

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade',
  'status', 'update', 'details'];
  dataSource = new MatTableDataSource<Chamado>(this.chamadoList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

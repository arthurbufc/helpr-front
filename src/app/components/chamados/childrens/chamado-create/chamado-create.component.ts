import { Router } from '@angular/router';
import { Chamado } from './../../../../models/chamado';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Tecnico } from './../../../../models/tecnico';
import { Cliente } from './../../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { ChamadoService } from 'src/app/services/chamado.service';

type DataSection = {
  title: string,
  value: number
}

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.scss']
})
export class ChamadoCreateComponent implements OnInit {

  public statusList: DataSection[] = [
    {title: "Aberto", value: 0},
    { title: "Em andamento", value: 1},
    { title: "Encerrado", value: 2}
  ];

  public prioridadeList: DataSection[] = [
  {title: "Baixa", value: 0},
  { title: "Média", value: 1},
  { title: "Alta", value: 2}
  ];

  public clienteList: Cliente[] = [];
  public tecnicoList: Tecnico[] = [];

  public formChamado: FormGroup;

  constructor(private serviceChamado: ChamadoService, private serviceCliente: ClienteService, private serviceTecnico: TecnicoService, formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.serviceChamado = serviceChamado;
    this.serviceCliente = serviceCliente;
    this.serviceTecnico = serviceTecnico;
    this.formChamado = formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(6)]],
      status: ['', [Validators.required]],
      prioridade: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      tecnico: ['', [Validators.required]],
      observacoes: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.toastr = toastr;
    this.router = router;
  }

  ngOnInit(): void {
    this.initializeClientes();
    this.initializeTecnicos();
  }

  initializeClientes(): void {
    this.serviceCliente.findAll().subscribe(clientes => {
      this.clienteList = clientes;
    });
  }

  initializeTecnicos(): void {
    this.serviceTecnico.findAll().subscribe(tecnicos => {
      this.tecnicoList = tecnicos;
    });
  }

  create(): void{
    if(this.formChamado.valid){
      let chamado: Chamado = this.formChamado.value;
      this.serviceChamado.insert(chamado).subscribe({
        next: () => {
          this.toastr.success("Chamado adicionado com sucesso!", "Sucesso");
          this.router.navigate(["/chamados"])
        },
        error: errorResponse => {
          let errors = errorResponse.error.errors;
          if(errors != undefined){
            errors.forEach((error: any) => {
              this.toastr.error(error.message, "Erro")
            });
          }
          else{
            this.toastr.error(errorResponse.error.message, "Erro");
          }
        }
      });
    }
    else{
      this.toastr.error("Dados inválidos!","Erro");
    }
  }
}

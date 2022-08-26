import { Router, ActivatedRoute } from '@angular/router';
import { Chamado } from '../../../../models/chamado';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Tecnico } from '../../../../models/tecnico';
import { Cliente } from '../../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { ChamadoService } from 'src/app/services/chamado.service';

type DataSection = {
  title: string,
  value: number
}

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.scss']
})
export class ChamadoUpdateComponent implements OnInit {

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

  public chamado: Chamado = {
    titulo: "",
    status: NaN,
    prioridade: NaN,
    cliente: NaN,
    tecnico: NaN,
    observacoes: ""
  };

  public clienteList: Cliente[] = [];
  public tecnicoList: Tecnico[] = [];


  constructor(private serviceChamado: ChamadoService, private serviceCliente: ClienteService,
    private serviceTecnico: TecnicoService, private toastr: ToastrService,
    private router: Router, private route: ActivatedRoute) {
    this.serviceChamado = serviceChamado;
    this.serviceCliente = serviceCliente;
    this.serviceTecnico = serviceTecnico;
    this.toastr = toastr;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    this.initializeClientes();
    this.initializeTecnicos();
    this.initializeFields();
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

  initializeFields(): void{
    let id: string | null = this.route.snapshot.paramMap.get("id");
    if(id != null) {
      this.serviceChamado.findById(Number.parseInt(id)).subscribe(chamado => {
        this.chamado = chamado;
      });
    }
  }

  update(form: NgForm): void{
    if(form.valid){
      this.serviceChamado.update(this.chamado).subscribe({
        next: () => {
          this.toastr.success("Chamado editado com sucesso!", "Sucesso");
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

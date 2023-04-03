import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResponseApiAlticciSequence } from 'src/app/model/ResponseApiAlticciSequence';
import { AlticciService } from 'src/app/service/alticci.service';


@Component({
  selector: 'app-call-service',
  templateUrl: './call-service.component.html',
  styleUrls: ['./call-service.component.css']
})
export class CallServiceComponent implements OnInit{

  constructor(private alticci: AlticciService) {}

  form!: FormGroup
  resultado!: ResponseApiAlticciSequence;

  ngOnInit(){
    this.form = new FormGroup({
      numero: new FormControl("")
    })
  }

  clearCache(){
    this.alticci.clearCache().subscribe(res => alert("Cache Limpo"), err => alert("Erro ao limpar o cache"))
  }

  clear(){
    this.form.reset();
  }

  onSubmit(){
    if(this.form.value.numero > 99999){
      alert("O numero informado deve estar entre 0 e 99999");
      this.form.reset();
      return;
    }
    console.log("Entrei aqui")
    this.alticci.getResultToAlticciSequence(this.form.value.numero).subscribe(
      res => {
        this.resultado = res;
        this.form.reset();
      },erro => {
        if(erro.status == 500){
          alert("Sinto muito ainda não consigo fazer calculo desse valor, porém se vc fizer aumentando de pouco em pouco (acrescentando de 5 mil em 5 mil) eu consigo chegar nesse resultado que gostaria.")
          this.clear();
        }
        else if(erro.status == 400){
          alert("Você deve informar um valor positivo entre 0 e 99999")
          this.clear();
        }else{
          alert("Tivemos um problema ao executar a chamada para o back-end")
          this.clear();
        }
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Times } from 'src/app/class/times';
import { TimesService } from 'src/app/services/times.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  private _nome: string
  private _telefone: number
  private _time_coracao: string
  private _time_odiado: string
  private _selecao: string
  private _idolo: string
  private _posicao: string

  constructor(public alertController: AlertController, private _router: Router, private _timesService: TimesService) { 
  }

  ngOnInit() {
  }

  private cadastrar(): void{
    if(this.validar(this._nome) && this.validar(this._telefone) && this.validar(this._time_coracao) && this.validar(this._time_odiado) && this.validar(this._selecao) && this.validar(this._idolo) && this.validar(this._posicao)){
      let time: Times = new Times(this._nome, this._telefone, this._time_coracao, this._time_odiado, this._selecao, this._idolo, this._posicao)
      this._timesService.inserir(time)
      this.presentAlert("Atenção usuário", "------------------------------", "Cadastro Efetuado.")
      this._router.navigate(["home"])
    } else {
      this.presentAlert("Atenção usuário", "------------------------------", "Todos os campos são obrigatórios.")
    }
  }


  private validar(campo: any): boolean{
    if(!campo)
    {
      return false
    } else {
      return true
    }
  }

  async presentAlert(titulo: string, subtitulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}

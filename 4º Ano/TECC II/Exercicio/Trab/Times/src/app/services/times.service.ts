import { Injectable } from '@angular/core';
import { Times } from '../class/times';

@Injectable({
  providedIn: 'root'
})
export class TimesService {
  private _times: Times[] = []

  constructor() {
  }

  public getTimes() : Times[]{
    return this._times
  }

  public inserir(time: Times): void {
    this._times.push(time)
  }

  public editar(time: Times, timeEditado: Times): boolean {
    for(let i = 0; i < this._times.length; i++){
      if(this._times[i].getId() == time.getId()){
        this._times[i].setNome(timeEditado.getNome())
        this._times[i].setTelefone(timeEditado.getTelefone())
        this._times[i].setTimeCoracao(timeEditado.getTimeCoracao())
        this._times[i].setTimeOdiado(timeEditado.getTimeOdiado())
        this._times[i].setSelecao(timeEditado.getSelecao())
        this._times[i].setIdolo(timeEditado.getIdolo())
        this._times[i].setPosicao(timeEditado.getPosicao())
        return true
      }
    }
    return false
  }

  public excluir(time: Times): boolean {
    for(let i = 0; i < this._times.length; i++){
      this._times.splice(i, 1)
      return true
    }
  return false
  }
}

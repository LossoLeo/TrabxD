import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Times } from 'src/app/class/times';
import { TimesService } from 'src/app/services/times.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private _dados_times: Times[]

  constructor(private _router: Router, private _times_service: TimesService) {
    this._dados_times = this._times_service.getTimes()
  }

  private cadastrarPage(): void {
    this._router.navigate(["/cadastrar"])
  }

  public detalhar(times: Times): void{
    this._router.navigateByUrl("/detalhar", {state: {objeto: times}})
  }
}

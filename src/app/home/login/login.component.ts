import { LoginService } from './login.service';
import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: "./login.component.html",
})
export class LoginComponent{
  usuario: string = 'alvaro';
  senha: string = '12345678';

constructor(private loginService: LoginService, private router: Router){}

ngOnInit() {

}

login(){
  this.loginService.logar(this.usuario, this.senha).subscribe((x) => {
    console.log("Tentativa realizqada com sucesso");
    console.log(x);
    this.router.navigate(['home']);

  }, (err) => {
    console.log('erro');
    console.log(err);

  })

}


}

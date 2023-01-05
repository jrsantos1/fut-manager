import { UsuarioService } from './../autenticacao/usuario/usuario.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private usuarioService: UsuarioService) {
  }

  logar(usuario: string, senha: string): Observable<HttpResponse<any>>{
      return this.http.post('/api/login', {
        email: usuario,
        senha: senha
      },
      {observe: 'response'}
      ).pipe(
        tap((x) => {
          const authToken: string = x.headers.get('x-access-token') ?? '';
          console.log(x.headers.get('x-access-token'));
          this.usuarioService.salvaToken(authToken);
        })
      )
  }
}

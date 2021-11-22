import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, LanguageService, ServerConnectionService } from 'devsbc-components';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  hide = true;
  user: any = {};
  loading = false;
  urlRedirect!: string;
  hasOrigin = false;
  baseUrl!: string;
  sessionName = environment.sessionName;
  lang = 'es';
  strings: any = {
    signin: { es: 'Iniciar sesión', en: 'Sign In'},
    signup: { es: 'Registro', en: 'Sign Up'},
    enteraccount: {es: 'Entrar a mi cuenta', en: 'Enter to my account'},
    createaccount: {es: 'Crear cuenta', en: 'Create account'},
    fullname: {es: 'Nombre completo', en: 'Full name'},
    email: {es: 'Correo electrónico', en: 'Email'},
    telephone: {es: 'Teléfono', en: 'Telephone'},
    password: {es: 'Contraseña', en: 'Password'},
    create: {es: 'Crear', en: 'Create'},
    enter: {es: 'Entrar', en: 'Enter'},
    forgotpassword: {es: 'Olvide mi contraseña', en: 'Forgot my password'},
    recover: {es: 'Recuperar', en: 'Recover'}
  };

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar,
              private server: ServerConnectionService, private route: ActivatedRoute) {
    const origin = this.route.snapshot.params.origin;
    if (origin) {
      this.urlRedirect = '/' + origin + '/home';
      if (!this.urlRedirect) {
        this.hasOrigin = true;
      }
    }
    if (this.authService.isAuthenticated()) {
      this.urlRedirect = this.getUrlRedirect(this.authService.getSession());
      this.router.navigateByUrl(this.urlRedirect);
      this.openSnackBar('Ya has accedido a tu cuenta!');
    }
   }

  ngOnInit(): void {
    this.baseUrl = this.server.initServerConnection('cfi', 'auth');
  }

  public async onSubmitLogin(form: NgForm): Promise<void> {
    if (form.invalid) { return; }
    try {
      this.loading = true;
      const endpoint = this.baseUrl + '/access';

      await this.authService.signIn(endpoint, { user: this.user });
      this.urlRedirect = this.getUrlRedirect(this.user);
      this.router.navigateByUrl(this.urlRedirect).catch((error) => this.router.navigateByUrl('/main/home'));
    } catch (error: any) {
      this.loading = false;
      this.openSnackBar(error.error || error);
    }
  }

  public async onSubmitRegister(form: NgForm): Promise<void> {
    if (form.invalid) { return; }
    try {
      this.loading = true;
      const endpoint = this.baseUrl + '/access';

      await this.authService.signIn(endpoint, { user: this.user });
      this.urlRedirect = this.getUrlRedirect(this.user);
      this.router.navigateByUrl(this.urlRedirect).catch((error) => this.router.navigateByUrl('/main/home'));
    } catch (error) {
      this.loading = false;
      console.log(error);
      this.openSnackBar('Credenciales inválidas');
    }
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'OK',);
  }

  private getUrlRedirect(session: any): string {
    if (this.hasOrigin) {
      return this.urlRedirect;
    } else {
      if (session.email.includes('@injectronic.com')) {
        return '/cms/home';
      } else {
        return '/main/home';
      }
    }
  }

}

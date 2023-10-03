import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.less']
})
export class AccessComponent {
  public loginForm: FormGroup;
  public errorMessage: string | undefined;
  public isLoading: boolean;

  constructor(
    private router: Router
  ) {
    this.isLoading = false;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  }

  public login(): void {
    console.log('hswhdkjs')
    this.router.navigate(['/main']);
  }
}

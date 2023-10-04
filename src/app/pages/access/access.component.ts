import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services';

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
    private router: Router,
    private userService: UsersService
    ) {
    this.isLoading = false;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  }

  public login(): void {
    this.userService.getUsersList().subscribe();
    //this.router.navigate(['/main']);
  }
}

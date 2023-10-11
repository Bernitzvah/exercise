import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountModel, PostModel, RankedUsers } from 'src/app/models';
import { AccountQuery, PostQuery } from 'src/app/queries';
import { UserService } from 'src/app/services';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.less']
})

export class AccessComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage: string | undefined;
  public isLoading: boolean;

  public rankedUsers: RankedUsers | undefined;
  public postNumber: number[] | undefined;

  public users: AccountModel[] | undefined;
  public usersPosts: PostModel[] | undefined;

  constructor(
    private router: Router,
    private userService: UserService,
    private postService: PostService,
    private accountQuery: AccountQuery,
    private postQuery: PostQuery
  ) {
    this.isLoading = false;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    this.users = this.accountQuery.getValue().users;
  }

  ngOnInit(): void {
    this.users = this.accountQuery.getValue().users;
    this.postService.getPostList().subscribe(res => {
      this.usersPosts = res;
    });
    this.userService.getUsersList().subscribe((response: AccountModel[]) => {
      this.users = response;
      if (this.rankedUsers) {
        this.rankedUsers.users = response;
        this.postService.getPostList().subscribe((response: PostModel[]) => {
          if (this.rankedUsers) {
            for (let i = 0; i < this.rankedUsers.users.length; i++) {
              const tmp = this.countUserPosts(this.rankedUsers.users[i].id);
              this.postNumber?.push(tmp);
            }
          }
        });
      }
    });
  }

  public login(): void {
    this.router.navigate(['/main']);
  }

  public countUserPosts(userId: number): number {
    let res = 0;
    this.rankedUsers?.users?.forEach((value) => {
      if (value.id === userId) {
        res++;
      }
    });
    return res;
  }
}

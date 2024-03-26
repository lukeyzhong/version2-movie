import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-thrid',
  templateUrl: './register-thrid.component.html',
  styleUrls: ['./register-thrid.component.scss'],
})
export class RegisterThridComponent implements OnInit {
  plans: string[] = ['Standard with ads', 'Standard', 'Premium'];
  plans_quality: string[] = ['Great', 'Great', 'Best'];
  plans_prices: string[] = ['$6.99', '$15.49', '$19.99'];
  plans_resolut: string[] = ['1080p', '1080p', '4K+HDR'];
  plans_watch: string[] = ['✓', '✓', '✓'];
  plans_downloads: string[] = ['-', '✓', '✓'];
  selectedIndex = 0;
  selectedRole!: string;
  slectedTextColor = 'rgb(205, 33, 7)';
  unslectedTextColor = 'rgb(152, 143, 143)';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  selectedPlan(index: number) {
    switch (index) {
      case 0:
        this.selectedRole = 'USER';
        break;
      case 1:
        this.selectedRole = 'SUPERUSER';
        break;
      case 2:
        this.selectedRole = 'ADMIN';
        break;
    }
  }

  sendSignUp() {
    //   this.selectedPlan(this.selectedIndex);
    //   const user = this.authService.userValue;
    //   if (!user.jwtToken) {
    //     this.authService.addUserInfo({ role: this.selectedRole });
    //     this.authService.signUp().subscribe();
    //   } else {
    //     this.authService
    //       .upgradePermission({ role: this.selectedRole })
    //       .subscribe();
    //   }
    this.selectedPlan(this.selectedIndex);
    this.authService.regObj = {...this.authService.regObj, role: this.selectedRole, tmdb_key: "stringstringstring"}
    console.log(this.authService.regObj);
    this.authService.onSignup(this.authService.regObj).subscribe(response => {
      console.log(response)
    });
    this.router.navigate(['login']);

  }
}

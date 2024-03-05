import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  // selectedRole: UserRole = UserRole.USER;
  slectedTextColor = 'rgb(205, 33, 7)';
  unslectedTextColor = 'rgb(152, 143, 143)';

  constructor() {}

  ngOnInit(): void {}

  selectedPlan(index: number) {
    // switch (index) {
    //   case 0:
    //     this.selectedRole = UserRole.USER;
    //     break;
    //   case 1:
    //     this.selectedRole = UserRole.SUPERUSER;
    //     break;
    //   case 2:
    //     this.selectedRole = UserRole.ADMIN;
    //     break;
    // }
  }

  sendSignUp() {
  //   this.selectedPlan(this.selectedIndex);

  //   const user = this.authService.userValue;
  //   if (!user.jwtToken) {
  //     console.log('sigining up!');
  //     this.authService.addUserInfo({ role: this.selectedRole });
  //     this.authService.signUp().subscribe();
  //   } else {
  //     console.log('updating role!', this.selectedRole);
  //     this.authService
  //       .upgradePermission({ role: this.selectedRole })
  //       .subscribe();
  //   }
  // }
}

}

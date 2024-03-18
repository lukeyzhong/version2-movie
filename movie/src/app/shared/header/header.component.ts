import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  jwtToken!: string | null;

  constructor(private cdr: ChangeDetectorRef,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.jwtToken$.subscribe(token => {
      this.jwtToken = token;
      // this.cdr.detectChanges();
    });
    this.jwtToken = localStorage.getItem('jwt_token');
  }

  OnLogOut() {
    this.authService.setJwtToken(null);
    localStorage.clear();
  }
}

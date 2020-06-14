import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  primaryColor = '#5d78ff';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.changeTheme(this.primaryColor);
  }

}

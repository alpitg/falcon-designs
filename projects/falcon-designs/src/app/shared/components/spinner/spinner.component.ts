import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  // primaryColor = '#5d78ff';

  constructor() {
    // this.changeTheme(this.primaryColor); // Set default theme
  }

  ngOnInit(): void {
  }

  // changeTheme(primary: string) {
  //   document.documentElement.style.setProperty('--primary-color', primary);
  // }

}

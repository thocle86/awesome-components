import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDark!: boolean;

  ngOnInit(): void {
    this.isDark = false;
  }

  toggleDarkTheme(): void {
    console.log(this.isDark);
    document.body.classList.toggle('dark-theme');
    this.isDark = !this.isDark;
  }

}

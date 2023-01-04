import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDark!: boolean;
  currentTheme!: string;

  ngOnInit(): void {
    this.isDark = false;
  }

  toggleDarkTheme(): void {
    console.log(this.isDark);
    document.body.classList.toggle('dark-theme');
    this.isDark = !this.isDark;
  }

  selectDefault() {
    document.body.classList.remove(this.currentTheme);
  }

  selectTheme(theme: string) {
    document.body.classList.remove(this.currentTheme);
    this.currentTheme = theme;
    document.body.classList.add(this.currentTheme);
    console.log(this.currentTheme);
  }

}

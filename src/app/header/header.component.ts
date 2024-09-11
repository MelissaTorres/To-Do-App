import { Component } from '@angular/core';

// selector: html element that will be replaced with our component
// template, templateUrl: content that should be displayed by the component

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

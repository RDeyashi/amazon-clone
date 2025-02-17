import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public orderType:string[] = ["All Categories", "Amazon Fresh", "Alexa Skills", "Amazon Devices", "Amazon Freshers"]
}

import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";

@Component({
  selector: 'app-page-contact',
  standalone: true,
  imports: [IpromiseFooterComponent, IpromiseHeaderComponent],
  templateUrl: './page-contact.component.html',
  styleUrl: './page-contact.component.scss'
})
export class PageContactComponent {

}

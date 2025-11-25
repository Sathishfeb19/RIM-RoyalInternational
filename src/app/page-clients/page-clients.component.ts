import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";

@Component({
  selector: 'app-page-clients',
  standalone: true,
  imports: [IpromiseFooterComponent, IpromiseHeaderComponent],
  templateUrl: './page-clients.component.html',
  styleUrl: './page-clients.component.scss'
})
export class PageClientsComponent {

}

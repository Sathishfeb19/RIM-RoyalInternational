import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";

@Component({
  selector: 'app-page-services',
  standalone: true,
  imports: [IpromiseFooterComponent, IpromiseHeaderComponent],
  templateUrl: './page-services.component.html',
  styleUrl: './page-services.component.scss'
})
export class PageServicesComponent {

}

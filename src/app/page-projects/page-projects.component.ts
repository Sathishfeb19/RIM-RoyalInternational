import { Component } from '@angular/core';
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";

@Component({
  selector: 'app-page-projects',
  standalone: true,
  imports: [IpromiseHeaderComponent, IpromiseFooterComponent],
  templateUrl: './page-projects.component.html',
  styleUrl: './page-projects.component.scss'
})
export class PageProjectsComponent {

}

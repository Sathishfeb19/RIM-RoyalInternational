import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { RimSectionCComponent } from "../rim-section-c/rim-section-c.component";
import { RimSectionAComponent } from "../rim-section-a/rim-section-a.component";
import { RimSectionBComponent } from "../rim-section-b/rim-section-b.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";
import { RimSectionDComponent } from "../rim-section-d/rim-section-d.component";

@Component({
  selector: 'app-rim-apostolic',
  standalone: true,
  imports: [IpromiseFooterComponent, RimSectionCComponent, RimSectionAComponent, RimSectionBComponent, IpromiseHeaderComponent, RimSectionDComponent],
  templateUrl: './rim-apostolic.component.html',
  styleUrl: './rim-apostolic.component.scss'
})
export class RimApostolicComponent {

}

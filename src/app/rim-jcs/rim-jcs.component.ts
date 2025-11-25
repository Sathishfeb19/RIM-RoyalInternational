import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";
import { RimSectionBComponent } from "../rim-section-b/rim-section-b.component";
import { RimSectionAComponent } from "../rim-section-a/rim-section-a.component";
import { RimSectionCComponent } from "../rim-section-c/rim-section-c.component";

@Component({
  selector: 'app-rim-jcs',
  standalone: true,
  imports: [IpromiseFooterComponent, IpromiseHeaderComponent, RimSectionBComponent, RimSectionAComponent, RimSectionCComponent],
  templateUrl: './rim-jcs.component.html',
  styleUrl: './rim-jcs.component.scss'
})
export class RimJcsComponent {

}

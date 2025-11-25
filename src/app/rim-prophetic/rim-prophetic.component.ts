import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { RimSectionCComponent } from "../rim-section-c/rim-section-c.component";
import { RimSectionAComponent } from "../rim-section-a/rim-section-a.component";
import { RimSectionDComponent } from "../rim-section-d/rim-section-d.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";
import { RimSectionEComponent } from "../rim-section-e/rim-section-e.component";
import { RimSectionFComponent } from "../rim-section-f/rim-section-f.component";

@Component({
  selector: 'app-rim-prophetic',
  standalone: true,
  imports: [IpromiseFooterComponent, RimSectionCComponent, RimSectionAComponent, RimSectionDComponent, IpromiseHeaderComponent, RimSectionEComponent, RimSectionFComponent],
  templateUrl: './rim-prophetic.component.html',
  styleUrl: './rim-prophetic.component.scss'
})
export class RimPropheticComponent {

}

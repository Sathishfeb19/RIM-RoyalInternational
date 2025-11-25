import { Component } from '@angular/core';
import { RimSectionAComponent } from "../rim-section-a/rim-section-a.component";
import { RimSectionBComponent } from "../rim-section-b/rim-section-b.component";
import { RimSectionCComponent } from "../rim-section-c/rim-section-c.component";
import { RimSectionDComponent } from "../rim-section-d/rim-section-d.component";
import { RimSectionEComponent } from "../rim-section-e/rim-section-e.component";
import { RimSectionFComponent } from "../rim-section-f/rim-section-f.component";
import { RimSectionGComponent } from "../rim-section-g/rim-section-g.component";

@Component({
  selector: 'app-ipromise-home',
  standalone: true,
  imports: [RimSectionAComponent, RimSectionBComponent, RimSectionCComponent, RimSectionDComponent, RimSectionEComponent, RimSectionFComponent, RimSectionGComponent],
  templateUrl: './ipromise-home.component.html',
  styleUrl: './ipromise-home.component.scss'
})
export class IpromiseHomeComponent {

}

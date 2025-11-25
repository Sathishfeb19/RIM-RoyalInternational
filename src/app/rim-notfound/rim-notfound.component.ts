import { Component } from '@angular/core';
import { RimSectionAComponent } from "../rim-section-a/rim-section-a.component";
import { RimSectionCComponent } from "../rim-section-c/rim-section-c.component";
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { RimSectionFComponent } from "../rim-section-f/rim-section-f.component";
import { RimSectionEComponent } from "../rim-section-e/rim-section-e.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";

@Component({
  selector: 'app-rim-notfound',
  standalone: true,
  imports: [RimSectionAComponent, RimSectionCComponent, IpromiseFooterComponent, RimSectionFComponent, RimSectionEComponent, IpromiseHeaderComponent],
  templateUrl: './rim-notfound.component.html',
  styleUrl: './rim-notfound.component.scss'
})
export class RimNotfoundComponent {

}

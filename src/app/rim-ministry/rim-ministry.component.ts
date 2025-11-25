import { Component, AfterViewInit } from '@angular/core';
import { IpromiseFooterComponent } from '../ipromise-footer/ipromise-footer.component';
import { IpromiseHeaderComponent } from '../ipromise-header/ipromise-header.component';
import { RimSectionAComponent } from '../rim-section-a/rim-section-a.component';
import { RimSectionCComponent } from '../rim-section-c/rim-section-c.component';
import { RimSectionDComponent } from '../rim-section-d/rim-section-d.component';
import { RimSectionGComponent } from '../rim-section-g/rim-section-g.component';
declare var $: any; // ⬅️ required to use jQuery globally

@Component({
  selector: 'app-rim-ministry',
  standalone: true,
  imports: [
    IpromiseFooterComponent,
    RimSectionCComponent,
    RimSectionAComponent,
    IpromiseHeaderComponent,
 
  ],
  templateUrl: './rim-ministry.component.html',
  styleUrl: './rim-ministry.component.scss'
})
export class RimMinistryComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Wrap in timeout to ensure DOM is loaded
    setTimeout(() => {
      $('.brand-one__carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: { items: 2 },
          600: { items: 3 },
          1000: { items: 5 }
        }
      });
    });
  }
}

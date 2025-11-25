import { Component } from '@angular/core';
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { RimSectionCComponent } from "../rim-section-c/rim-section-c.component";
import { BlogSideComponent } from "../blog-side/blog-side.component";
import { RimSectionAComponent } from "../rim-section-a/rim-section-a.component";

@Component({
  selector: 'app-rim-message',
  standalone: true,
  imports: [IpromiseHeaderComponent, IpromiseFooterComponent, RimSectionCComponent, BlogSideComponent, RimSectionAComponent],
  templateUrl: './rim-message.component.html',
  styleUrl: './rim-message.component.scss'
})
export class RimMessageComponent {

}

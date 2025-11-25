import { Component } from '@angular/core';
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { BlogSideComponent } from "../blog-side/blog-side.component";
import { RimSectionBComponent } from "../rim-section-b/rim-section-b.component";

@Component({
  selector: 'app-blog-a',
  standalone: true,
  imports: [IpromiseFooterComponent, IpromiseHeaderComponent, BlogSideComponent, RimSectionBComponent],
  templateUrl: './blog-a.component.html',
  styleUrl: './blog-a.component.scss'
})
export class BlogAComponent {

}

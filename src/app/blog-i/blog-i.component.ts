import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { BlogSideComponent } from "../blog-side/blog-side.component";
import { RimSectionBComponent } from "../rim-section-b/rim-section-b.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";

@Component({
  selector: 'app-blog-i',
  standalone: true,
  imports: [IpromiseFooterComponent, BlogSideComponent, RimSectionBComponent, IpromiseHeaderComponent],
  templateUrl: './blog-i.component.html',
  styleUrl: './blog-i.component.scss'
})
export class BlogIComponent {

}

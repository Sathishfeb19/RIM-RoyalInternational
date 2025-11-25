import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { BlogSideComponent } from "../blog-side/blog-side.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";
import { RimCommentsComponent } from "../rim-comments/rim-comments.component";

@Component({
  selector: 'app-blog-f',
  standalone: true,
  imports: [IpromiseFooterComponent, BlogSideComponent, IpromiseHeaderComponent, RimCommentsComponent],
  templateUrl: './blog-f.component.html',
  styleUrl: './blog-f.component.scss'
})
export class BlogFComponent {

}

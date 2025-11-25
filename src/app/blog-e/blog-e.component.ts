import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { BlogSideComponent } from "../blog-side/blog-side.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";
import { RimCommentsComponent } from "../rim-comments/rim-comments.component";

@Component({
  selector: 'app-blog-e',
  standalone: true,
  imports: [IpromiseFooterComponent, BlogSideComponent, IpromiseHeaderComponent, RimCommentsComponent],
  templateUrl: './blog-e.component.html',
  styleUrl: './blog-e.component.scss'
})
export class BlogEComponent {

}

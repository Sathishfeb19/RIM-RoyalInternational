import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { BlogSideComponent } from "../blog-side/blog-side.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";

@Component({
  selector: 'app-blog-s',
  standalone: true,
  imports: [IpromiseFooterComponent, BlogSideComponent, IpromiseHeaderComponent],
  templateUrl: './blog-s.component.html',
  styleUrl: './blog-s.component.scss'
})
export class BlogSComponent {

}

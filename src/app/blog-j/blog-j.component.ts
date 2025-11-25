import { Component } from '@angular/core';
import { BlogSideComponent } from "../blog-side/blog-side.component";
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";

@Component({
  selector: 'app-blog-j',
  standalone: true,
  imports: [BlogSideComponent, IpromiseFooterComponent, IpromiseHeaderComponent],
  templateUrl: './blog-j.component.html',
  styleUrl: './blog-j.component.scss'
})
export class BlogJComponent {

}

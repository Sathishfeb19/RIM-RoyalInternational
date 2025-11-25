import { Component } from '@angular/core';
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { BlogSideComponent } from "../blog-side/blog-side.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";
import { BlogJComponent } from "../blog-j/blog-j.component";
import { BlogKComponent } from "../blog-k/blog-k.component";
import { BlogLComponent } from "../blog-l/blog-l.component";

@Component({
  selector: 'app-blog-b',
  standalone: true,
  imports: [IpromiseFooterComponent, BlogSideComponent, IpromiseHeaderComponent, BlogJComponent, BlogKComponent, BlogLComponent],
  templateUrl: './blog-b.component.html',
  styleUrl: './blog-b.component.scss'
})
export class BlogBComponent {

}

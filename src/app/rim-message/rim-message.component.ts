import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";
import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { RimSectionCComponent } from "../rim-section-c/rim-section-c.component";
import { BlogSideComponent } from "../blog-side/blog-side.component";
import { RimSectionAComponent } from "../rim-section-a/rim-section-a.component";
import { RimservicesService } from '../rimservices.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rim-message',
  standalone: true,
  imports: [
    IpromiseHeaderComponent,
    IpromiseFooterComponent,
    RimSectionCComponent,
    BlogSideComponent,
    RimSectionAComponent
  ],
  templateUrl: './rim-message.component.html',
  styleUrl: './rim-message.component.scss'
})
export class RimMessageComponent {

  Product: any[] = [];
  paginatedData: any[] = [];

  page: number = 1;
  pageSize: number = 3;  // 4 items per page

  constructor(
    private http: HttpClient,
    private Bees: RimservicesService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {

    // DO NOT RUN SSR FOR PAGINATION OR DOM
    if (!isPlatformBrowser(this.platformId)) return;

    this.Bees.View_Users().subscribe((data: any) => {

      // Handle API responses
      if (Array.isArray(data)) {
        this.Product = data;
      } else if (Array.isArray(data?.result)) {
        this.Product = data.result;
      } else if (Array.isArray(data?.data)) {
        this.Product = data.data;
      } else {
        this.Product = [];
      }

      this.loadPage();
    });
  }

  loadPage() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.Product.slice(start, end);
  }

  nextPage() {
    if ((this.page * this.pageSize) < this.Product.length) {
      this.page++;
      this.loadPage();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadPage();
    }
  }
}

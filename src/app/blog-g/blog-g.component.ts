import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { IpromiseFooterComponent } from "../ipromise-footer/ipromise-footer.component";
import { BlogSideComponent } from "../blog-side/blog-side.component";
import { IpromiseHeaderComponent } from "../ipromise-header/ipromise-header.component";
import { RimCommentsComponent } from "../rim-comments/rim-comments.component";
import { RimservicesService } from '../rimservices.service';

@Component({
  selector: 'app-blog-g',
  standalone: true,
  imports: [
    CommonModule,                 // ⭐ REQUIRED
    IpromiseFooterComponent,
    BlogSideComponent,
    IpromiseHeaderComponent,
    RimCommentsComponent
  ],
  templateUrl: './blog-g.component.html',
  styleUrls: ['./blog-g.component.scss']
})
export class BlogGComponent implements OnInit {

  images: any[] = [];
  reportData: any[] = [];
  sanitizedData: SafeHtml[] = [];

  id: string | null = null;
  baseUrl: string = '';

  constructor(
    private Bees: RimservicesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.baseUrl = this.Bees.API;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.loadReportDetails(this.id);
    }
  }

  loadReportDetails(id: string): void {
    this.Bees.Report_Details(id).subscribe({
      next: (res: any) => {
        if (res?.status === 'ok') {

          this.reportData = res.reportData || [];
          this.images = res.reportImages || [];

          this.sanitizedData = this.reportData
            .filter(r => r?.html_value)
            .map(r =>
              this.sanitizer.bypassSecurityTrustHtml(r.html_value)
            );
        }
      },
      error: (err) => {
        console.error('Report Details Error:', err);
      }
    });
  }
}

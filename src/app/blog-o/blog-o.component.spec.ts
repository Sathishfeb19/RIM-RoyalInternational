import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOComponent } from './blog-o.component';

describe('BlogOComponent', () => {
  let component: BlogOComponent;
  let fixture: ComponentFixture<BlogOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

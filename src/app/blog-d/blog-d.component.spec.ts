import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDComponent } from './blog-d.component';

describe('BlogDComponent', () => {
  let component: BlogDComponent;
  let fixture: ComponentFixture<BlogDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogZComponent } from './blog-z.component';

describe('BlogZComponent', () => {
  let component: BlogZComponent;
  let fixture: ComponentFixture<BlogZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogZComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTComponent } from './blog-t.component';

describe('BlogTComponent', () => {
  let component: BlogTComponent;
  let fixture: ComponentFixture<BlogTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

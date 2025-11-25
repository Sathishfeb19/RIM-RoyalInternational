import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogIComponent } from './blog-i.component';

describe('BlogIComponent', () => {
  let component: BlogIComponent;
  let fixture: ComponentFixture<BlogIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

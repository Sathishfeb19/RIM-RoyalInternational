import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFComponent } from './blog-f.component';

describe('BlogFComponent', () => {
  let component: BlogFComponent;
  let fixture: ComponentFixture<BlogFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

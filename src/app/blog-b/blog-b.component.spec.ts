import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBComponent } from './blog-b.component';

describe('BlogBComponent', () => {
  let component: BlogBComponent;
  let fixture: ComponentFixture<BlogBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

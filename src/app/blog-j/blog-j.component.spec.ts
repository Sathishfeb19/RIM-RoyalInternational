import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogJComponent } from './blog-j.component';

describe('BlogJComponent', () => {
  let component: BlogJComponent;
  let fixture: ComponentFixture<BlogJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogJComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

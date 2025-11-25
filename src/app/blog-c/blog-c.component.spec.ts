import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCComponent } from './blog-c.component';

describe('BlogCComponent', () => {
  let component: BlogCComponent;
  let fixture: ComponentFixture<BlogCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

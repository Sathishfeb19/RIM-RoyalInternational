import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogQComponent } from './blog-q.component';

describe('BlogQComponent', () => {
  let component: BlogQComponent;
  let fixture: ComponentFixture<BlogQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogQComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

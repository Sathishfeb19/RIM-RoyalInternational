import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHComponent } from './blog-h.component';

describe('BlogHComponent', () => {
  let component: BlogHComponent;
  let fixture: ComponentFixture<BlogHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAComponent } from './blog-a.component';

describe('BlogAComponent', () => {
  let component: BlogAComponent;
  let fixture: ComponentFixture<BlogAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

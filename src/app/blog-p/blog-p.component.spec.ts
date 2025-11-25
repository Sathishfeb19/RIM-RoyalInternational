import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPComponent } from './blog-p.component';

describe('BlogPComponent', () => {
  let component: BlogPComponent;
  let fixture: ComponentFixture<BlogPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

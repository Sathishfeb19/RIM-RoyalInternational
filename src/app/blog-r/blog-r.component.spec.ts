import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRComponent } from './blog-r.component';

describe('BlogRComponent', () => {
  let component: BlogRComponent;
  let fixture: ComponentFixture<BlogRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

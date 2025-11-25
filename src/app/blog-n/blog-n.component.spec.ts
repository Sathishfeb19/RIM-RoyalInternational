import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNComponent } from './blog-n.component';

describe('BlogNComponent', () => {
  let component: BlogNComponent;
  let fixture: ComponentFixture<BlogNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

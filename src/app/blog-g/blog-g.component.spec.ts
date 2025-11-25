import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGComponent } from './blog-g.component';

describe('BlogGComponent', () => {
  let component: BlogGComponent;
  let fixture: ComponentFixture<BlogGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

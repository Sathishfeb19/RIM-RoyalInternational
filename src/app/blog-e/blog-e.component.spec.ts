import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEComponent } from './blog-e.component';

describe('BlogEComponent', () => {
  let component: BlogEComponent;
  let fixture: ComponentFixture<BlogEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

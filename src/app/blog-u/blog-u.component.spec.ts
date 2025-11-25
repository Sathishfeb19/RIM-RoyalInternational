import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogUComponent } from './blog-u.component';

describe('BlogUComponent', () => {
  let component: BlogUComponent;
  let fixture: ComponentFixture<BlogUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMComponent } from './blog-m.component';

describe('BlogMComponent', () => {
  let component: BlogMComponent;
  let fixture: ComponentFixture<BlogMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

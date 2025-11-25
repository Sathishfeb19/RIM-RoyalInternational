import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogKComponent } from './blog-k.component';

describe('BlogKComponent', () => {
  let component: BlogKComponent;
  let fixture: ComponentFixture<BlogKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogKComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

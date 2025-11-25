import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimCommentsComponent } from './rim-comments.component';

describe('RimCommentsComponent', () => {
  let component: RimCommentsComponent;
  let fixture: ComponentFixture<RimCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

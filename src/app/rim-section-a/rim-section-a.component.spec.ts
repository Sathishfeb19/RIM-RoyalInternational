import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimSectionAComponent } from './rim-section-a.component';

describe('RimSectionAComponent', () => {
  let component: RimSectionAComponent;
  let fixture: ComponentFixture<RimSectionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimSectionAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimSectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

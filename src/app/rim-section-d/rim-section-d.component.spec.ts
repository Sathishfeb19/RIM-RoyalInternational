import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimSectionDComponent } from './rim-section-d.component';

describe('RimSectionDComponent', () => {
  let component: RimSectionDComponent;
  let fixture: ComponentFixture<RimSectionDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimSectionDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimSectionDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

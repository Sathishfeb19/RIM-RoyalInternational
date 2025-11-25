import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimSectionCComponent } from './rim-section-c.component';

describe('RimSectionCComponent', () => {
  let component: RimSectionCComponent;
  let fixture: ComponentFixture<RimSectionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimSectionCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimSectionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

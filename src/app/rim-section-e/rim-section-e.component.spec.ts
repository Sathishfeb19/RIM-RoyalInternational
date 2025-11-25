import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimSectionEComponent } from './rim-section-e.component';

describe('RimSectionEComponent', () => {
  let component: RimSectionEComponent;
  let fixture: ComponentFixture<RimSectionEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimSectionEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimSectionEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimSectionFComponent } from './rim-section-f.component';

describe('RimSectionFComponent', () => {
  let component: RimSectionFComponent;
  let fixture: ComponentFixture<RimSectionFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimSectionFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimSectionFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

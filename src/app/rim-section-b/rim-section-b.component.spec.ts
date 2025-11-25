import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimSectionBComponent } from './rim-section-b.component';

describe('RimSectionBComponent', () => {
  let component: RimSectionBComponent;
  let fixture: ComponentFixture<RimSectionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimSectionBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimSectionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

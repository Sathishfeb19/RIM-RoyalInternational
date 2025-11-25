import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimSectionGComponent } from './rim-section-g.component';

describe('RimSectionGComponent', () => {
  let component: RimSectionGComponent;
  let fixture: ComponentFixture<RimSectionGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimSectionGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimSectionGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

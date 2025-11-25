import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimMinistryComponent } from './rim-ministry.component';

describe('RimMinistryComponent', () => {
  let component: RimMinistryComponent;
  let fixture: ComponentFixture<RimMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimMinistryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

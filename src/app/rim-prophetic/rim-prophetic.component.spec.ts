import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimPropheticComponent } from './rim-prophetic.component';

describe('RimPropheticComponent', () => {
  let component: RimPropheticComponent;
  let fixture: ComponentFixture<RimPropheticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimPropheticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimPropheticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

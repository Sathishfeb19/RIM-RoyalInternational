import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimJcsComponent } from './rim-jcs.component';

describe('RimJcsComponent', () => {
  let component: RimJcsComponent;
  let fixture: ComponentFixture<RimJcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimJcsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimJcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

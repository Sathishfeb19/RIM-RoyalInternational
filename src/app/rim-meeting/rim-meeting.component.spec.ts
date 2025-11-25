import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimMeetingComponent } from './rim-meeting.component';

describe('RimMeetingComponent', () => {
  let component: RimMeetingComponent;
  let fixture: ComponentFixture<RimMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimMeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

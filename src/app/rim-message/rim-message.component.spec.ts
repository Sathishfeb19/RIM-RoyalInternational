import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimMessageComponent } from './rim-message.component';

describe('RimMessageComponent', () => {
  let component: RimMessageComponent;
  let fixture: ComponentFixture<RimMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

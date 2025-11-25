import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimNotfoundComponent } from './rim-notfound.component';

describe('RimNotfoundComponent', () => {
  let component: RimNotfoundComponent;
  let fixture: ComponentFixture<RimNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimNotfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

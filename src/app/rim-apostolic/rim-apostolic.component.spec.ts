import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimApostolicComponent } from './rim-apostolic.component';

describe('RimApostolicComponent', () => {
  let component: RimApostolicComponent;
  let fixture: ComponentFixture<RimApostolicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimApostolicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimApostolicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

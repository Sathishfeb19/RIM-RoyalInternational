import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpromiseHomeComponent } from './ipromise-home.component';

describe('IpromiseHomeComponent', () => {
  let component: IpromiseHomeComponent;
  let fixture: ComponentFixture<IpromiseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpromiseHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpromiseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

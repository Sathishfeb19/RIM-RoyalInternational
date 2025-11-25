import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpromiseHeaderComponent } from './ipromise-header.component';

describe('IpromiseHeaderComponent', () => {
  let component: IpromiseHeaderComponent;
  let fixture: ComponentFixture<IpromiseHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpromiseHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpromiseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

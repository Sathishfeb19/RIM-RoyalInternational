import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpromiseFooterComponent } from './ipromise-footer.component';

describe('IpromiseFooterComponent', () => {
  let component: IpromiseFooterComponent;
  let fixture: ComponentFixture<IpromiseFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpromiseFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpromiseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

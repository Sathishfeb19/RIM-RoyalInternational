import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpromiseSidebarComponent } from './ipromise-sidebar.component';

describe('IpromiseSidebarComponent', () => {
  let component: IpromiseSidebarComponent;
  let fixture: ComponentFixture<IpromiseSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpromiseSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpromiseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

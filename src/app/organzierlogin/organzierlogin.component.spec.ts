import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganzierloginComponent } from './organzierlogin.component';

describe('OrganzierloginComponent', () => {
  let component: OrganzierloginComponent;
  let fixture: ComponentFixture<OrganzierloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganzierloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganzierloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsoDynamicComponent } from './sso-dynamic.component';

describe('SsoDynamicComponent', () => {
  let component: SsoDynamicComponent;
  let fixture: ComponentFixture<SsoDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsoDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsoDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCreateComponent } from './debit-create.component';

describe('DebitCreateComponent', () => {
  let component: DebitCreateComponent;
  let fixture: ComponentFixture<DebitCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

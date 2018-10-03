import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoutComponent } from './nout.component';

describe('NoutComponent', () => {
  let component: NoutComponent;
  let fixture: ComponentFixture<NoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

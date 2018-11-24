import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypetestComponent } from './typetest.component';

describe('TypetestComponent', () => {
  let component: TypetestComponent;
  let fixture: ComponentFixture<TypetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiParentD3Component } from './multi-parent-d3.component';

describe('MultiParentD3Component', () => {
  let component: MultiParentD3Component;
  let fixture: ComponentFixture<MultiParentD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiParentD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiParentD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

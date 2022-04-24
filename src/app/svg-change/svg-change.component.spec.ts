import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgChangeComponent } from './svg-change.component';

describe('SvgChangeComponent', () => {
  let component: SvgChangeComponent;
  let fixture: ComponentFixture<SvgChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

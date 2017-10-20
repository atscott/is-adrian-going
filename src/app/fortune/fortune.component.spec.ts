import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '../material/material.module';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FortuneComponent} from './fortune.component';

describe('FortuneComponent', () => {
  let component: FortuneComponent;
  let fixture: ComponentFixture<FortuneComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [FortuneComponent],
          imports: [MaterialModule, RouterTestingModule, BrowserAnimationsModule]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

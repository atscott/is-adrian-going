import {async, TestBed} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, MaterialModule, RouterTestingModule],
    });
  });

  it('should create the app', async(() => {
       let fixture = TestBed.createComponent(AppComponent);
       let app = fixture.debugElement.componentInstance;
       expect(app).toBeTruthy();
     }));

  it(`should have as title 'Is Adrian Going?'`, async(() => {
       let fixture = TestBed.createComponent(AppComponent);
       let app = fixture.debugElement.componentInstance;
       expect(app.title).toEqual('Is Adrian Going?');
     }));

  it('should render title in a toolbar tag', async(() => {
       let fixture = TestBed.createComponent(AppComponent);
       fixture.detectChanges();
       let compiled = fixture.debugElement.nativeElement;
       expect(compiled.querySelector('md-toolbar span').textContent)
           .toContain('Is Adrian Going?');
     }));
});

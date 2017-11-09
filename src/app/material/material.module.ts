import {NgModule} from '@angular/core';
import {MatCardModule, MatToolbarModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class MaterialModule {
}
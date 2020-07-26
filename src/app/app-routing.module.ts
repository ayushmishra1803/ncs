import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), FlexLayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

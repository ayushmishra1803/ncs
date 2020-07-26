import { AddnotesComponent } from './notes/addnotes/addnotes.component';
import { DisplaynotesComponent } from './notes/displaynotes/displaynotes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [{ path: 'notes', component: DisplaynotesComponent },{
  path:"addnotes",component:AddnotesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), FlexLayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

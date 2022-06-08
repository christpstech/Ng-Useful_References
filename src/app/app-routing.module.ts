import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'directive', pathMatch: 'full' },
  {
    path: 'directive',
    loadChildren: () =>
      import('./directives/directives.module').then((m) => m.DirectivesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

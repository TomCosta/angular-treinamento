import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { UserScreenComponent } from './pages/user-screen/user-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-screen',
    pathMatch: 'full',
  },
  { 
    path: 'user-screen',
    component: UserScreenComponent,
  },
  { 
    path: 'menu-page',
    component: MenuPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

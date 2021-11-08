import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu-frame/menu/menu.component';
import { DiaryModule } from './diary/diary.module'
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {
    path: 'main',
    component: MenuComponent,
    children: [{
      path: 'footprint', 
      loadChildren: () => import('./footprint/footprint.module').then(m => m.FootprintModule) 
    }, {
      path: 'diary',
      loadChildren: () => import('./diary/diary.module').then(m => m.DiaryModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

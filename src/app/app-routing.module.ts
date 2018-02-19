import { ProfileComponent } from './user/profile/profile.component';
import { FileSystemComponent } from './home/file-system/file-system.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    {
      path: 'login', 
      component: LoginComponent 
    },
    {
      path: 'home',
      component: FileSystemComponent
    },
    {
      path: 'user',
      component: ProfileComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

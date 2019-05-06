import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainSecurityComponent} from './main-security/main-security.component';
import {UsersComponent} from './users/users.component';
import {CreateUserComponent} from './users/create-user/create-user.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {ConfirmDeleteComponent} from '../components/confirm-delete/confirm-delete.component';

const routes: Routes = [{
  path: '',
  component: MainSecurityComponent,
  children: [
    {
    path: 'users',
    component: UsersComponent,
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SecurityRoutingModule {
}

export const SecurityRouteComponent = [
  ConfirmDeleteComponent,
  MainSecurityComponent,
  UsersComponent,
  CreateUserComponent,
  EditUserComponent,
  ConfirmDeleteComponent,
];

export const entryRouteComponents = [
  CreateUserComponent,
  EditUserComponent,
  ConfirmDeleteComponent,
];

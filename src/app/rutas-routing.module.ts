import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from './home/home.page';
import { LoginPage } from './login/login.page';
import { QrPagePage } from './qr-page/qr-page.page';
import { TasksPage } from './tasks/tasks.page';

const routes: Routes = [
  {path: 'home', component: HomePage},
  {path: 'login', component: LoginPage},
  {path: 'qr-page', component: QrPagePage},
  {path: 'tasks', component: TasksPage},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }

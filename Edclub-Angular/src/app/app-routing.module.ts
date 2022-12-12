import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { ScenariosComponent } from './scenarios/scenarios.component';

const routes: Routes = [
  { path : 'login', component: LoginComponent },
  {
    path : '', component: HomeComponent
  },
  {
    path : 'scenarios', component: ScenariosComponent
  },
  {
    path : 'questions', component: QuestionsComponent
  },
  {
    path : 'blogs', component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

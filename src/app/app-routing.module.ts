import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components here
import { ListSkillComponent } from './list-skill/list-skill.component';
import { AddSkillComponent } from './add-skill/add-skill.component';

const routes: Routes = [
  { path: '', redirectTo: '/listSkills', pathMatch: 'full' }, // Default route
  { path: 'listSkills', component: ListSkillComponent },
  { path: 'addSkills', component: AddSkillComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ListSkillComponent } from './list-skill/list-skill.component';
import { AddSkillComponent } from './add-skill/add-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    ListSkillComponent,
    AddSkillComponent,
    // ... other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add your AppRoutingModule here
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    // ... other modules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

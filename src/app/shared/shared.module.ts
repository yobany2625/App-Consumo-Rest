import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingContainerComponent } from './components/loading-container/loading-container.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
   exports:[
     AboutPageComponent,
     HomePageComponent,
     SidebarComponent,
     SearchBoxComponent,
     LoadingContainerComponent
   ]
})
export class SharedModule { }

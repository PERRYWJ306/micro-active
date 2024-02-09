import { Component } from '@angular/core';
import { AppBannerComponent } from '../app-banner/app-banner.component';
import { MottoTopComponent } from '../motto-top/motto-top.component';
import { MottoBottomComponent } from '../motto-bottom/motto-bottom.component';
import { ServicesListComponent } from '../services-list/services-list.component';
import { SkillsListComponent } from '../skills-list/skills-list.component';
import { MainBodyComponent } from '../main-body/main-body.component';
import { ClientScrollComponent } from '../client-scroll/client-scroll.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AppBannerComponent, 
    MottoTopComponent, 
    MottoBottomComponent, 
    ServicesListComponent,
    SkillsListComponent,
    ClientScrollComponent,
    MainBodyComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { SaveVideoDetailsComponent } from './save-video-details/save-video-details.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { HomeComponent } from './home/home.component';
import { Subscription } from 'rxjs';
import { HistoryComponent } from './history/history.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { FeatureComponent } from './feature/feature.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
 
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'features', component: FeatureComponent,
      }, 
      {
        path: 'subscriptions', component: SubscriptionsComponent,
      }, 
      {
        path: 'history', component: HistoryComponent,
      }, 
      {
        path: 'liked-videos', component: LikedVideosComponent,
      }, 
    ]
  }, 
  
  {
    path: 'upload-video', component: UploadVideoComponent,
  },
  { 
    path: 'save-video-details/:videoId', component: SaveVideoDetailsComponent,
  },
  { 
    path: 'video-detail/:videoId', component: VideoDetailComponent,
  },
  { 
    path: 'callback', component: CallbackComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

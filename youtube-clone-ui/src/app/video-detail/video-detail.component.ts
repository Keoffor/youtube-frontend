import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})


export class VideoDetailComponent {
  videoId!: string;
  videoUrl!: string; 
  videoAvailable: boolean = false;
  tags: Array<string> = [];
  videoDescription!: string;
  title!: string;
  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService){
  this.videoId = this.activatedRoute.snapshot.params['videoId'];

  this.videoService.getVideo(this.videoId).subscribe(data =>{
    this.videoUrl = data.videourl;
    this.videoAvailable = true;
    this.tags = data.tags;
    this.videoDescription =data.description;
    this.title = data.title;
    })

  }
}

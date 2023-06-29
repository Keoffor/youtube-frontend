import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  featuredVideos: Array<VideoDto> = [];

  constructor(private videoservice: VideoService){

   
  }

  ngOnInit(): void {
      this.videoservice.getAllVideos().subscribe(response =>{
     this.featuredVideos = response;

    })
  }


}

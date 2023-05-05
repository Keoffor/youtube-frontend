import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})


export class VideoDetailComponent implements OnInit {
  videoId!: string;
  videoUrl!: string; 
  videoAvailable: boolean = false;
  tags: Array<string> = [];
  videoDescription!: string;
  title!: string;
  likeCount: number =0;
  dislikeCount: number = 0;
  viewCount: number = 0;
  showSubricbeButton: boolean = true;
  showUnSubcribeButton: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService, private userService: UserService){
  this.videoId = this.activatedRoute.snapshot.params['videoId'];

  this.videoService.getVideo(this.videoId).subscribe(data =>{
    this.videoUrl = data.videourl;
    this.videoAvailable = true;
    this.tags = data.tags;
    this.videoDescription =data.description;
    this.title = data.title;
    this.likeCount= data.likeCount;
    this.dislikeCount = data.disLikeCount;
    this.viewCount = data.viewCount;
    })

  }
  ngOnInit(): void {
      
  }
  likedvideo(){
    this.videoService.likedVideo(this.videoId).subscribe(data =>{
     this.likeCount = data.likeCount;
     this.dislikeCount = data.disLikeCount;
    });

  }
  dislikedvideo(){
    this.videoService.dislikedVideo(this.videoId).subscribe(data =>{
     this.likeCount = data.likeCount;
     this.dislikeCount = data.disLikeCount;
    });

  }
 
  subscribeToUser(){
    let getUserId = this.userService.getUserId();
    this.userService.subscribeToUser(getUserId).subscribe(data =>{
      this.showSubricbeButton =false;
      this.showUnSubcribeButton = true;
    });
    
    
  }

  unSubscribedToUser(){
    let getUserId = this.userService.getUserId();
    this.userService.unSubscribeToUser(getUserId).subscribe(data =>{
      this.showSubricbeButton = true;
      this.showUnSubcribeButton = false;
    });
   
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  template:`
  <div>
        <app-video-card [viewCount] = "viewCount"></app-video-card>
        </div>
  `,
})


export class VideoDetailComponent implements OnInit {
  videoId!: string;
  videoUrl!: string; 
  getUserId: string = ''
  getName: string = ''
  videoAvailable: boolean = false;
  tags: Array<string> = [];
  videoDescription!: string;
  title!: string;
  likeCount: number =0;
  dislikeCount: number = 0;
  viewCount: number=0;
  showSubricbeButton: boolean = true;
  showUnSubcribeButton: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService, private userService: UserService, 
  ){
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
    userService.registerUser().subscribe(data =>{
      this.getUserId = data.id;
      this.getName = data.name;
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
    this.userService.subscribeToUser(this.getUserId).subscribe(data =>{
      this.showSubricbeButton =false;
      this.showUnSubcribeButton = true;
    });
    
    
  }

  unSubscribedToUser(){
    let getUserId = this.userService.registerUser;
    this.userService.unSubscribeToUser(this.getUserId).subscribe(data =>{
      this.showSubricbeButton = true;
      this.showUnSubcribeButton = false;
    });
   
  }
}

import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { VideoDto } from '../video-dto-response';

@Component({
  selector: 'app-save-video-details',
  templateUrl: './save-video-details.component.html',
  styleUrls: ['./save-video-details.component.css']
})
export class SaveVideoDetailsComponent{
  saveVideoDetailsForm: FormGroup;
  videoStatus: FormControl = new FormControl('');
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: string[] = [];
  selectedFile!: File;
  selectedFileName = '';
  videoId ='';
  fileSelected = false;
  videoUrl!: string;
  thumbnails!:string;

  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService, private snackBar: MatSnackBar){
    this.videoId = this.activatedRoute.snapshot.params['videoId'];
    this.videoService.getVideo(this.videoId).subscribe(data =>{
    this.videoUrl = data.videourl;
    this.thumbnails = data.thumbnailurl;
    })
    this.saveVideoDetailsForm = new FormGroup({
   
     title: this.title,
     description: this.description,
     videoStatus: this.videoStatus,
    })
   }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(value: string): void {
    const index = this.tags.indexOf(value);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  //@ts-ignore
  onFileSelected(event: Event){
       // @ts-ignore
       this.selectedFile = event.target.files[0];
       this.selectedFileName = this.selectedFile.name;
       this.fileSelected = true;
  }

  onUpload(){
    this.videoService.uploadThumbnails(this.selectedFile, this.videoId)
    .subscribe(data =>{
      console.log(data)
      //show an upload success notification
      this.snackBar.open("Thumbnail upload successfully ", "Ok")
    })
  }
  saveVideo(){
    //call the video service to make a http call to backend
    const videoMetaData: VideoDto = {
      "id": this.videoId,
      "title": this.saveVideoDetailsForm.get('title')?.value,
      "description": this.saveVideoDetailsForm.get('description')?.value,
      "tags": this.tags,
      "videoStatus": this.saveVideoDetailsForm.get('videoStatus')?.value,
      "videourl": this.videoUrl,
      "thumbnailurl": this.thumbnails

    }
    this.videoService.saveVideo(videoMetaData).subscribe(data =>{
      this.snackBar.open("Video MetaData updated successfully", "Ok")
    })
  }


}
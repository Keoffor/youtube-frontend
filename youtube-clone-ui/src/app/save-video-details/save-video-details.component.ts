import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService, private snackBar: MatSnackBar){
    this.videoId = this.activatedRoute.snapshot.params['videoId']
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


}
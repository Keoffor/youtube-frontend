import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadVideoResponse } from './upload-video/upload-video-response';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient: HttpClient ) { }

  uploadVideo(fileEntry: File): Observable<UploadVideoResponse> {

  const formData = new FormData()
  formData.append('file', fileEntry, fileEntry.name)

    //Http post call to upload video
   return this.httpClient.post<UploadVideoResponse>("http://localhost:8080/api/videos", formData);
   
  }

  uploadThumbnails(fileEntry: File, videoId: string): Observable<string> {

    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name);
    formData.append('videoId',videoId);
  
      //Http post call to upload thumbnails
     return this.httpClient.post("http://localhost:8080/api/videos/thumbnail", formData, {
      responseType: 'text'
  });
     
    }
}

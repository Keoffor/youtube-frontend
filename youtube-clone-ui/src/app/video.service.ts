import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadVideoResponse } from './upload-video/upload-video-response';
import { VideoDto } from './video-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient: HttpClient ) { }
 
  baseUrl = environment.BACKEND_CLOUD_URI;

  uploadVideo(fileEntry: File): Observable<UploadVideoResponse> {

  const formData = new FormData()
  formData.append('file', fileEntry, fileEntry.name)

    //Http post call to upload video
   return this.httpClient.post<UploadVideoResponse>(this.baseUrl+"/api/videos", formData);
   
  }

  uploadThumbnails(fileEntry: File, videoId: string): Observable<string> {

    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name);
    formData.append('videoId',videoId);
  
      //Http post call to upload thumbnails
     return this.httpClient.post(this.baseUrl+"/api/videos/thumbnail", formData, {
      responseType: 'text'
  });
     
    }

    getVideo(videoId: string): Observable<VideoDto>{
      return this.httpClient.get<VideoDto>(this.baseUrl+"/api/videos/"+videoId)
    }
    saveVideo(videoMetaData: VideoDto): Observable<VideoDto>{
     return this.httpClient.put<VideoDto>(this.baseUrl+"/api/videos/saved", videoMetaData);
    }
    getAllVideos(): Observable<Array<VideoDto>>{
      return this.httpClient.get<Array<VideoDto>>(this.baseUrl+"/api/videos");
    }

    likedVideo(videoId: string): Observable<VideoDto>{
      return this.httpClient.post<VideoDto>(this.baseUrl+"/api/videos/"+ videoId +"/like", null);

    }
    dislikedVideo(videoId: string): Observable<VideoDto>{
      return this.httpClient.post<VideoDto>(this.baseUrl+"/api/videos/"+ videoId +"/dislike", null);

    }
  }

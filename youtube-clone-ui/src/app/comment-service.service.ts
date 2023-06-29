import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentDto} from './commentDto';
import { UserResponse } from './user-response';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  baseUrl = environment.BACKEND_CLOUD_URI;
  constructor(private httpClient: HttpClient) {
    
   
   }
   postComment(commentDto: CommentDto, videoId: string): Observable<UserResponse>{
     return this.httpClient.post<UserResponse>(this.baseUrl+"/api/videos/"+videoId+"/comment", commentDto); 
   }
   getAllComments(videoId: string): Observable<Array<CommentDto>>{
   return this.httpClient.get<CommentDto[]>(this.baseUrl+"/api/videos/"+ videoId +"/comments");

   }
}

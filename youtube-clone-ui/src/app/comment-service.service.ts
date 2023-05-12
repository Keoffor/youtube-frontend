import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentDto} from './commentDto';
import { UserResponse } from './user-response';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private httpClient: HttpClient) {
    
   
   }
   postComment(commentDto: any, videoId: string): Observable<UserResponse>{
     return this.httpClient.post<UserResponse>("http://localhost:8080/api/videos/"+videoId+"/comment", commentDto); 
   }
   getAllComments(videoId: string): Observable<Array<CommentDto>>{
   return this.httpClient.get<CommentDto[]>("http://localhost:8080/api/videos/"+ videoId +"/comments");

   }
}

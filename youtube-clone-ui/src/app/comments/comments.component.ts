import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { CommentServiceService } from '../comment-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommentDto } from '../commentDto';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit  {

  @Input() videoId: string = '';
  id: string = '';
  commentDto: CommentDto[]= [];
  commentForm: FormGroup;
  picture: string = '';
  name: string = '';
  constructor(private userService: UserService, private commentService: CommentServiceService, private matSnack: MatSnackBar){
    this.commentForm = new FormGroup({
      comment: new FormControl('comment')
    });

  }
  ngOnInit(): void {
  this.getComments();
  this.userService.registerUser().subscribe(data=>{
    this.id = data.id;});
  }

  postComment(){

    
    
    const commentDto: CommentDto = {
      "commentText": this.commentForm.get('comment')?.value,
      "authorId": this.id,
      "userName": this.name,
      "picture": this.picture
    }
    this.commentService.postComment(commentDto, this.videoId).subscribe(data=>{
      this.matSnack.open("Comment posted successfully", "Ok");
      this.picture = data.picture;
      this.name = data.name;
      this.commentForm.get('comment')?.reset();
      this.getComments();
    })
    
    
  }
  getComments(){
    this.commentService.getAllComments(this.videoId).subscribe(data =>{
      this.commentDto = data;
     });
  }

}

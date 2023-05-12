import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  name: string='';
  picture: string='';
  id: string='';
  constructor(private userService: UserService, private router: Router){
 
    this.userService.registerUser().subscribe(data =>{
      this.name = data.name;
      this.picture = data.picture;
      this.id = data.id;
     });
     this.router.navigateByUrl('');

  }
 

  ngOnInit(): void {
  
  }

}

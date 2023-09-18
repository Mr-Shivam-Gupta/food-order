import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/Food';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export  class HomeComponent implements OnInit {
  foods:Food[] = [];

 constructor(private api:FoodService){
  this.foods = api.getAll() 
 }

 ngOnInit(){ }
}

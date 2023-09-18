import { Injectable } from '@angular/core';
import { sample_food } from 'src/data';
import { Food } from '../shared/model/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
 getAll():Food[]{
  return sample_food
 }
 // search food 
 getAllFoodBySearchTerm(searchTerm: string): Food[] {
  return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
 }
}

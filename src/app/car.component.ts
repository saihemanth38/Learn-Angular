export class Car
{
 type: string;
 name: string;
 model: any;
 capacity: number;
 price: string;

 constructor( type: string, name: string, model: any, capacity: number, price: string )
 {
  this.type = type;
  this.name = name;
  this.model = model;
  this.capacity = capacity;
  this.price = price;
 }
}
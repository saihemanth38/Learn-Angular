import { Component } from "@angular/core";
import { Car } from "./car.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})


export class AppComponent {
arrayCar : Car[];

 constructor()
 {
 this.loadCar();
 }
 loadCar()
 {


  var hyundai = new Car("Diesel", "Hyundai", "i10", 5, "15 lkhs");
  var audi = new Car("Petrol", "Audi", "abc", 5, "50 lkhs");
  var toyota = new Car("Diesel", "Toyota", "xyz", 8, "25 lkhs");

  var carArray : Car[] = [];
   carArray[0] = hyundai;
   carArray[1] = audi;
   carArray[2] = toyota;
this.arrayCar = carArray;

 }
 log(x) { console.log(x);}
}

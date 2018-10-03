import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  constructor() { }
		smartfons = [
				{	numcard: "Карта 1",
					titlename: "Samsung Galaxy A5 2017",
					price: 500,
					category: "Смартфон",
					currency: "UAH"
				},
				{	numcard: "Карта 2",
					titlename: "Sony Xperia XZ1",
					price: 1000,
					category: "Смартфон",
					currency: "UAH"
				},
				{	numcard: "Карта 3",
					titlename: "Xiaomi Redmi Note 5",
					price: 8020,
					category: "Смартфон",
					currency: "UAH"
				},
				{	numcard: "Карта 4",
					titlename: "Huawei P Smart",
					price: 5555,
					category: "Смартфон",
					currency: "UAH"
				}
			]
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nout',
  templateUrl: './nout.component.html',
  styleUrls: ['./nout.component.css']
})
export class NoutComponent implements OnInit {

  constructor() { }
	noutbooks = [
					{	numcard: "Карта 1",
						titlename: "Ноутбук Prestigio",
						price: 500,
						category: "Ноутбуки",
						currency: "$"
					},
					{	numcard: "Карта 2",
						titlename: "Ноутбук HP 255 G6",
						price: 867,
						category: "Ноутбуки",
						currency: "$"
					},
					{	numcard: "Карта 3",
						titlename: "Ноутбук ASUS",
						price: 3200,
						category: "Ноутбуки",
						currency: "$"
					},
					{	numcard: "Карта 4",
						titlename: "Dell Inspiron 7577",
						price: 8762,
						category: "Ноутбуки",
						currency: "$"
					}
				]
  ngOnInit() {
  }

}

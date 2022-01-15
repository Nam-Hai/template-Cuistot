import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  carteJSON = [
    {
      titleSection: "Ramen",
      section: [
        {
          name: 'Ramen au porc Chashu',
          price: '15$',
          note: "Le Châshû est une variante Japonaise d'une recette chinoise de porc braisé, le Char Siu"
        },
        {
          name: 'Negi Miso Ramen',
          price: '13$',
          note: "Ramen au bouillon de porc"
        },
        {
          name: 'Tonkotsu Ramen',
          price: '17$',
          note: "Ramen au bouillon de porc"
        },
        {
          name: 'Ramen au porc Chashu',
          price: '15$',
          note: "Le Châshû est une variante Japonaise d'une recette chinoise de porc braisé, le Char Siu"
        },
        {
          name: 'Ramen au porc Chashu',
          price: '15$',
          note: "Le Châshû est une variante Japonaise d'une recette chinoise de porc braisé, le Char Siu"
        },
        {
          name: 'Ramen au porc Chashu',
          price: '15$',
          note: "Le Châshû est une variante Japonaise d'une recette chinoise de porc braisé, le Char Siu"
        }
      ]
    },
    {
      titleSection: "Donburi",
      section: [
        {
          name:"Tamagodon",
          price: '8$',
          note: "Riz recouvert d'omelette tout simple"
        },
        {
          name: "Katsudon",
          price: "9$",
          note: "Riz recouvert d'omelette au porc pané"
        },
        {
          name: "Oyakodon",
          price: "9$",
          note: "Riz recouvert d'omelette au poulet"
        }
      ]
    }
  ]

}

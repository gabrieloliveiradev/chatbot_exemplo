import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-chatbothome',
  templateUrl: './chatbothome.component.html',
  styleUrls: ['./chatbothome.component.css'],
  encapsulation: ViewEncapsulation.None //colocado aqui pra atualizar o css sempre que um novo elemento é criado
})

// declare function require(name:string);
export class ChatbothomeComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
    
  }
  
}

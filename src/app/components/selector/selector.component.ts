import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  divisor:any
   seleccionado:string = 'red'
  constructor() { }

  ngOnInit(): void {
    //this.divisor = document.getElementById('divisor');
    document.body.style.backgroundColor = this.seleccionado
  }
 
  seleccionarTarget(event:any){
    this.seleccionado = event.target.value
    //console.log(this.divisor.style.color)
    console.log(this.seleccionado)
    document.body.style.backgroundColor = this.seleccionado
   
    
  }

}

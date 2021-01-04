import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';



@Component({
  selector: 'app-traerapi',
  templateUrl: './traerapi.component.html',
  styleUrls: ['./traerapi.component.css']
})
export class TraerapiComponent implements OnChanges {
  previousValue: any = -1;
  currentValue: any = -1;
  @Input() data:any;
  @Input() codigo:number=0;
  @Output() borrar= new EventEmitter<number>()
  constructor() {}
  ngOnChanges(changes: SimpleChanges){
    
    this.previousValue = changes.codigo.previousValue;
    this.currentValue = changes.codigo.currentValue;
  
  }
  BorrarUsuario(id:number){
    this.borrar.emit(id);
  }

}

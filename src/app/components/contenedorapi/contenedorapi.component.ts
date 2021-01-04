import { Component,  OnInit} from '@angular/core';
import { User } from '../../interfaces/users';
import { TraerapiService } from '../../services/traerapi.service';

@Component({
  selector: 'app-contenedorapi',
  templateUrl: './contenedorapi.component.html',
  styleUrls: ['./contenedorapi.component.css']
})
export class ContenedorapiComponent implements OnInit {
  title = 'TRABAJANDO CON API Y PASO A COMPOENTES'
  users:User[] = [];
  code:any = 0;
  constructor(private traerApi:TraerapiService) {}

  ngOnInit(){
    this.traerApi.getApi().subscribe(data=>this.users = data)
  }
 
  BorrarUsuario(id:number){
    this.users = this.users.filter(user=>user.id!=id)
  }
  ingresarCodigo(cod:any){
    this.code = cod;
  }

}

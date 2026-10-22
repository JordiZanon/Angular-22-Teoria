import { Component } from '@angular/core';
import {Role, User} from '../../../common/interfaces/interfaces';



@Component({
  selector: 'app-tipos-datos-component',
  imports: [],
  templateUrl: './tipos-datos-component.html',
  styleUrl: './tipos-datos-component.scss',
})
export class TiposDatosComponent {

  //Variables diferentes
  color: string = 'red';
  numero: number =1;
  numero1: number =1.2;
  boleanData: boolean = true;
  boleanDataFalse: boolean = false;

  colores: string[] = ['red', 'blue', 'green', 'yellow'];
  numeros: number[] = [1.0, 1.3];

  //Colecciones q esta definido en interfaces
  usuario: User ={
    id: '1',
    name: 'Jordi',
    email: '1dfsdfsd',
    role: 'guest',
  }
  //Tipo q esta definido en interfaces
  role: Role = 'admin';


}

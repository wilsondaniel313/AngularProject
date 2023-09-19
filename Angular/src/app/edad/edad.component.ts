import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styleUrls: ['./edad.component.css']
})
export class EdadComponent implements OnInit{
  edad: number;

  constructor(){
    this.edad=17;
  }
  ngOnInit():void{
    console.log("componente cargado")
  }
  AumentarEdad(){
    this.edad= this.edad+1;
    alert(" ¿ Desea Aumentar la edad ?")

  }
  DisminuirEdad(){
    this.edad--;
    alert("¿ Desea Disminuir la edad ?")
  } 
 

}


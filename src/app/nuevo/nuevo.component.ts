import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export class NuevoComponent {
  public txentrada:FormControl = new FormControl();
  
  public alertaNombre():void {
    alert(this.txentrada.value)
  }

}

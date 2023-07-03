import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {

  file!: File
  url: any;

  selectFile(event:any){
    this.file = <File> event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(this.file);

    reader.onload = (_event) => {
      this.url = reader.result
    }
  }

}

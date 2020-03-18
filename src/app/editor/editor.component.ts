import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  data:any = 'input here';
  
  constructor() { }

  ngOnInit() {
    
  }
  logValue(e){
    console.log(e)
  }

}

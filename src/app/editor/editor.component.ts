import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  value:any = '';
  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.share.subscribe(x => this.value = x)
  }
  updateVal(e){
    this.data.updateData(e.target.value)
  }

}

import { Component, OnInit , OnChanges} from '@angular/core';
import { DataService } from '../data.service';
import marked from 'marked';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
  value:any = ''
  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.share.subscribe(x => this.value = marked(x));
    var md = marked.setOptions({});
  }

}

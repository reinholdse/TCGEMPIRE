import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input()
  text: string;

  constructor() { }

  ngOnInit() {
  }

}

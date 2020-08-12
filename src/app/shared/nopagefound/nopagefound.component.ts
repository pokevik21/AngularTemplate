import { Component, OnInit } from '@angular/core';

declare function init_plugin();

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: [  './nopagefound.css'
]
})


export class NopagefoundComponent implements OnInit {

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    init_plugin();
  }

}

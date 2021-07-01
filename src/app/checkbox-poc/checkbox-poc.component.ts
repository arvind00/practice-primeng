import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-poc',
  templateUrl: './checkbox-poc.component.html',
  styleUrls: ['./checkbox-poc.component.scss']
})
export class CheckboxPocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentCheckboxState = false;
  checkboxStateChanged(e: any){
    this.currentCheckboxState = e.checked;
    console.log(e);
  }
}

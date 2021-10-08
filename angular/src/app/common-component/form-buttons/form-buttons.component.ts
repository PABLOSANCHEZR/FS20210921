import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.scss']
})
export class FormButtonsComponent implements OnInit {

  constructor() { }

  @Output() send: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

}

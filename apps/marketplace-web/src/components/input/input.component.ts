import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input() label: string = ""
  @Input() fieldName: string = ""
  @Input() type: string = "text"
  @Input() errorMessage: string = ""
  @Input() disabled: boolean = false

  value: string = "";

  @Output() change: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {}
}

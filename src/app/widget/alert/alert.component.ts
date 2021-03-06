import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() typeAlert : string;
  @Output() onClose = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.onClose.emit();
  }

}

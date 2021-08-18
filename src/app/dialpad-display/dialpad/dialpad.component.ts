import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { DialpadService } from '../services/dialpad.service';

@Component({
  selector: 'app-dialpad',
  templateUrl: './dialpad.component.html',
  styleUrls: ['./dialpad.component.scss']
})
export class DialpadComponent implements OnInit {

  constructor(
    private dialPadService: DialpadService
  ) { }

  ngOnInit(): void {
  }

  onDialButton(keyValue: any) {
    const dialPadObj: any = {key: keyValue, keyPressTime: new Date()};
    this.dialPadService.addKeyPressDateObj(dialPadObj);
  }

}

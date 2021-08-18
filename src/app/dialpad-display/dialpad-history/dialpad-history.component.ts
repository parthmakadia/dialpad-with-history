import { Component, OnInit } from '@angular/core';
import { DialpadService } from '../services/dialpad.service';

@Component({
  selector: 'app-dialpad-history',
  templateUrl: './dialpad-history.component.html',
  styleUrls: ['./dialpad-history.component.scss']
})
export class DialpadHistoryComponent implements OnInit {

  dialPadHistoryEntries: any[] = [];

  constructor(
    private dialpadService: DialpadService
  ) { }

  ngOnInit(): void {
    this.getDialPadHistory();
  }

  getDialPadHistory() {
    this.dialpadService.keyPressDateArr$.subscribe(keyPressArr => {
      this.dialPadHistoryEntries = keyPressArr;
    })
  }
}

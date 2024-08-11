import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  @Output() cancleRegister = new EventEmitter();
  model: any = {}

  constructor(private accountService: AccountService) {}
  ngOnInit(): void {
  }

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => console.group(error)
    })
  }

  cancel() {
    console.log('cancelled');
    this.cancleRegister.emit(false);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {

  fg: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.fg = this.fb.group({
      email: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
  }

  resetForm() {
    this.fg.reset();
    this.fg.markAsUntouched();
  }

}

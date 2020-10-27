import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import  { HttpClient } from '@angular/common/http';
import $ from "jquery";
declare var jQuery: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactForm: FormGroup;
  submitted : boolean = false;
  userdata : string = 'kannansiva';

  constructor(private http: HttpClient,private formBuilder: FormBuilder , private route: ActivatedRoute , private router: Router) {  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onContact() {
    alert(this.contactForm.get('username').value);
  }

}

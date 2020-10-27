import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  resultdata : any;
  columnDefs = [
    {field: 'make' },
    {field: 'model' },
    {field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  constructor(private http: HttpClient,private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
        this.http.get('http://localhost:3939/userdetails').subscribe(res => {
           this.resultdata = res;
            // alert(this.resultdata.data[0].username);
})
  }

}

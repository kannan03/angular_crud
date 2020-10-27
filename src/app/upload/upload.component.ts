import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { HttpClient } from '@angular/common/http';
import $ from "jquery";
declare var jQuery: any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

   constructor() { }

  ngOnInit(): void {
  }

  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
       return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.imgURL = reader.result; 
          //  this.imgURL ="http://localhost:3030/images/hp.jpg" ;
    }
  }

          //post data http method 
      //  this.http.post('http://localhost:3002/',postdata
      // ).subscribe(data => {
             // console.log(data);
      // });






}

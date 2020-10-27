import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { HttpClient } from '@angular/common/http';
import $ from "jquery";
declare var jQuery: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username :string = 'kannansiva';
  registerForm: FormGroup;
  submitted : boolean = false;
  resultdata:any;
  status_name : any = '' ;
  
   constructor(private http: HttpClient,private formBuilder: FormBuilder ) {  }
  ngOnInit() {  
     this.registerForm = this.formBuilder.group({
       title: ['', Validators.required],
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       acceptTerms: [false, Validators.requiredTrue]
     });

       //   http get module  
//     this.http.get('http://localhost:3002/').subscribe(data => {
//       this.resultdata = data;
//           console.log(data);
//     // alert(this.resultdata);
// })

}
    // convenience getter for easy access to form fields
get  f() { return this.registerForm.controls;
}

handleChange() {
        let vvv = this.registerForm.get('firstName').value;
        alert(vvv);
}

onSubmit() {
     var postdata = {
          firstName :this.registerForm.get('firstName').value,
          lastName :this.registerForm.get('lastName').value
         };
           this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
         return;
    }
    else{
                   //form  field set value 
                  // this.registerForm.controls.firstName.setValue('Sivasiva');
                  // this.registerForm.controls.lastName.setValue('Kannankannan');

                //form field  get value
            //  console.log(this.registerForm.controls.firstName.value);
             console.log(this.registerForm.get('lastName').value);

             //form status view
              // console.log (this.registerForm.valid );

              //form data object format
               console.log(postdata);

      //post data http method 
      //  this.http.post('http://localhost:3002/',postdata
      // ).subscribe(data => {
             // console.log(data);
      // });

    }
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}

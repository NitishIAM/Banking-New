// // // // import { Component } from '@angular/core';
// // // // import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// // // // import { loginModel } from '../Model/login';
// // // // import { LoginServiceService } from '../services/login/login-service.service';


// // // // @Component({
// // // //   selector: 'app-register',
// // // //   templateUrl: './register.component.html',
// // // //   styleUrls: ['./register.component.css']
// // // // })
// // // // export class RegisterComponent {
// // // //    model:loginModel=new loginModel();

// // // //   constructor(private service:LoginServiceService, private fb: FormBuilder){}

// // // //   profileForm: FormGroup = new FormGroup({
// // // //     name: new FormControl(''),
// // // //     // lastName: new FormControl(''),
// // // //   });
// // // //   submitted = false;
// // // //   ngOnInit(): void {
// // // //     this.profileForm = this.fb.group(
// // // //       {
// // // //         name: ['', Validators.required],
// // // //         // lastName: ['', Validators.required],
// // // //       });
// // // //     }
// // // //     get f() { return this.profileForm.controls; }
// // // //   // onSubmit() {
// // // //   //   // TODO: Use EventEmitter with form value
// // // //   //   this.submitted = true;
// // // //   //   if (this.profileForm.invalid) {
// // // //   //     return;
// // // //   //   }
// // // //   //   console.warn(this.profileForm.value);
// // // //   // }

// // // //   Registration(data:NgForm){
// // // //     this.submitted = true;
// // // //     if (this.profileForm.invalid) {
// // // //       console.log("Invalid data type")
// // // //       return;
// // // //     }
// // // //     console.warn(this.profileForm.value);
// // // //     console.log("Registration--------------------------", data)
// // // //   // this.service.registration(data.value).subscribe(
// // // //   //   (res)=>{
// // // //   //     console.log(res);
// // // //   //   }
// // // //   // );
// // // //   console.log(data.value);
// // // //   }

// // // // }

// // // import { Component, OnInit } from '@angular/core';
// // // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // import { Router } from '@angular/router';

// // // @Component({
// // //   selector: 'app-register',
// // //   templateUrl: './register.component.html',
// // //   styleUrls: ['./register.component.css']
// // // })
// // // export class RegisterComponent implements OnInit {

// // //   submitted = false;
// // //   employeeForm!:FormGroup;
// // //   fDate:any;
// // //   Country:Country[]=[];
// // //   City:City[]=[];
// // //   Hobbies = [
// // //     { name: 'reading', value: 'Reading', selected: false },
// // //     { name: 'writting', value: 'Writting', selected: false },
// // //     { name: 'travelling', value: 'Travelling', selected: false },
// // //   ];

// // //   constructor(private fb:FormBuilder,private router:Router) { }

// // //   ngOnInit(): void 
// // //   {
// // //       this.employeeForm = this.fb.group({
// // //         Name:['',[Validators.required]],
// // //         DOB:['',Validators.required],
// // //         Gender:['',Validators.required],
// // //         PhoneNo:['',Validators.compose([Validators.required,Validators.pattern('[0-9+]*'),Validators.minLength(10)])],
// // //         Address:['',Validators.required],
// // //         EmailId:['',Validators.compose([Validators.required,Validators.pattern('^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$')])],
// // //         Designation:['',Validators.required],
// // //         Hobbie:this.fb.array([]),
// // //         Salary:['',Validators.compose([Validators.required,Validators.pattern('[0-9+]*')])],
// // //         Country:['',Validators.required],
// // //         City:['',Validators.required],
// // //         Image:['',Validators.required],
// // //         Password:['',Validators.compose([Validators.required,Validators.minLength(6)])]
// // //       });
// // //       this.getCountry();
// // //   }

// // //   getCountry(){
// // //     this.Country.push({Id:1,name:"India"},{Id:2,name:"Australia"});
// // //     console.log("counrty");
// // //     console.log(this.Country);
// // //   }

// // //   get loadRegistration()
// // //   {
// // //      return this.employeeForm?.controls;
// // //   }

// // //   getCity(event:any)
// // //   {
// // //      this.City = [];
// // //      var countryName = event.target.value;
// // //      if(countryName == 'India')
// // //      {
// // //        this.City.push({cityId:1,name:"Surat"},{cityId:2,name:"Navsari"},{cityId:3,name:"Ahemdabad"});
// // //      }else if(countryName == 'Australia')
// // //      {
// // //       this.City.push({cityId:1,name:"Sydney"},{cityId:2,name:"Gold Cost"},{cityId:3,name:"Darwin"});
// // //      }
// // //   }

// // //   onSubmit()
// // //   {
// // //      this.submitted = true;
// // //      if(this.employeeForm.valid) 
// // //      {
// // //       this.router.navigate(['DashBoard']);
// // //      }
// // //   }

// // // }

// // // interface Country
// // // {
// // //   Id:number;
// // //   name:string;
// // // }

// // // interface City
// // // {
// // //   cityId:number;
// // //   name:string;
// // // }
// // import { Component, OnInit } from '@angular/core';
// // import { Router, ActivatedRoute } from '@angular/router';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // // import { first } from 'rxjs/operators';

// // // import { AccountService, AlertService } from '@app/_services';

// // @Component({
// //   selector: 'app-register',
// //   templateUrl: './register.component.html',
// //   styleUrls: ['./register.component.css']
// // })
// // export class RegisterComponent implements OnInit {
// //     form: FormGroup;
// //     loading = false;
// //     submitted = false;

// //     constructor(
// //         private formBuilder: FormBuilder,
// //         private route: ActivatedRoute,
// //         private router: Router,
// //         // private accountService: AccountService,
// //         // private alertService: AlertService
// //     ) { }

// //     ngOnInit() {
// //         this.form = this.formBuilder.group({
// //             firstName: ['', Validators.required],
// //             lastName: ['', Validators.required],
// //             username: ['', Validators.required],
// //             password: ['', [Validators.required, Validators.minLength(6)]]
// //         });
// //     }

// //     // convenience getter for easy access to form fields
// //     get f() { return this.form.controls; }

// //     onSubmit() {
// //         this.submitted = true;

// //         // reset alerts on submit
// //         // this.alertService.clear();

// //         // stop here if form is invalid
// //         if (this.form.invalid) {
// //             return;
// //         }

// //         this.loading = true;
// //         // this.accountService.register(this.form.value)
// //         //     .pipe(first())
// //         //     .subscribe({
// //         //         next: () => {
// //         //             this.alertService.success('Registration successful', { keepAfterRouteChange: true });
// //         //             this.router.navigate(['../login'], { relativeTo: this.route });
// //         //         },
// //         //         error: error => {
// //         //             this.alertService.error(error);
// //         //             this.loading = false;
// //         //         }
// //         //     });
// //     }
// // }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// // import custom validator to validate that password and confirm password fields match
// // import { MustMatch } from './_helpers';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//     registerForm!: FormGroup;
//     submitted = false;

//     constructor(private formBuilder: FormBuilder) { }

//     ngOnInit() {
//         this.registerForm = this.formBuilder.group({
//             title: ['', Validators.required],
//             firstName: ['', Validators.required],
//             lastName: ['', Validators.required],
//             // validates date format yyyy-mm-dd
//             dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
//             email: ['', [Validators.required, Validators.email]],
//             password: ['', [Validators.required, Validators.minLength(6)]],
//             confirmPassword: ['', Validators.required],
//             acceptTerms: [false, Validators.requiredTrue]
//         }, {
//             // validators: MustMatch('password', 'confirmPassword')
//         });
//     }

//     // convenience getter for easy access to form fields
//     get f() { return this.registerForm.controls; }

//     onSubmit() {
//         this.submitted = true;

//         // stop here if form is invalid
//         if (this.registerForm.invalid) {
//             return;
//         }

//         // display form values on success
//         alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
//     }

//     onReset() {
//         this.submitted = false;
//         this.registerForm.reset();
//     }
// }

import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import Validation from '../utils/validations';
import { LoginServiceService } from '../services/login/login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private service:LoginServiceService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.service.registration(this.form.value).subscribe(
        (res)=>{
          console.log(res);
        }
        );
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

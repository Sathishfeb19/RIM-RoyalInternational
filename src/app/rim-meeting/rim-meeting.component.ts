import { Component, OnInit } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { IpromiseHeaderComponent } from '../ipromise-header/ipromise-header.component';
import { IpromiseFooterComponent } from '../ipromise-footer/ipromise-footer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-rim-meeting',
  standalone: true,
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule, IpromiseHeaderComponent, IpromiseFooterComponent, CommonModule,
    FormsModule, HttpClientModule,],
  
  templateUrl: './rim-meeting.component.html',
  styleUrl: './rim-meeting.component.scss'
})
export class RimMeetingComponent {

  // constructor(private manash: RimservicesService, private http: HttpClient, private router: Router,) { }
  // ContactFrm: FormGroup | any;

  // ngOnInit(): void {

  //   this.ContactFrm = new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  //     phone_number: new FormControl('', [Validators.required, Validators.minLength(10)]),
  //     msg_subject: new FormControl('',),
  //     message: new FormControl('',),
  //   })
  // }

  // feedback() {

  //   this.ContactFrm.markAllAsTouched();
  //   if (this.ContactFrm.get('name').invalid) {
  //     Swal.fire({
  //       title: 'Enter Name',
  //       icon: 'warning',
  //     })
  //   }
  //   else if (this.ContactFrm.get('phone_number').invalid) {
  //     Swal.fire({
  //       title: 'Enter Mobile Number',
  //       icon: 'warning',
  //     })
  //   }


  //   //------------------------------------------------------
  //   if (this.ContactFrm.valid) {
  //     this.manash.ContactFrm(this.ContactFrm.get('name').value,
  //       this.ContactFrm.get('email').value,
  //       this.ContactFrm.get('phone_number').value,
  //       this.ContactFrm.get('msg_subject').value,
  //       this.ContactFrm.get('message').value,

  //     ).subscribe((data: any) => {

  //       if (data.status == 'Success') {
  //         Swal.fire({
  //           title: 'Our Team Contact Soon!',
  //           icon: 'success',
  //         })
  //         this.ContactFrm.reset();
  //       }
  //       else if (data.status == 'error') {
  //         Swal.fire({
  //           title: 'Contact Number Already Entered!',
  //           icon: 'warning',
  //         })
  //       }
  //     })
  //   }
  // }
}

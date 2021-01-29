import { Component, OnInit, OnDestroy,  } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import {AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  registerForm : FormGroup;

  private _unsubscribeAll: Subject<any>;
  constructor(
    private fb: FormBuilder,
    public auth: AngularFireAuth,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
   
    this.registerForm = this.fb.group({
      fullName : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      passwordConfirm : ['', [Validators.required]]
    });

  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
 
}
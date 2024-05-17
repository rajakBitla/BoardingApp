import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { ApiFactoryService } from '../api-factory.service';
@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.page.html',
  styleUrls: ['./form-control.page.scss'],
})

export class FormControlPage implements OnInit {
  ionicForm1: any; 
  allData:any
  present:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private apiFactory:ApiFactoryService
  ) { }
  clickMe(){
    this.apiFactory.sampleUrl().subscribe((res)=>{
      this.allData=res.data;
      console.log(res.data); 
      console.log(this.allData);
        
    })
  }
  ngOnInit() {
    this.ionicForm1 = this.formBuilder.group({
      name: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  submitSampleForm(){
    console.log(this.ionicForm1.value);
  }
}

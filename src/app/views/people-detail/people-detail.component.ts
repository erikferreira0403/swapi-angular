import { HttpClient } from '@angular/common/http';
import { PeopleService } from './../../Services/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  public people$!:  Observable<any>;
  public films$!:  Observable<any>;
  isLoading = false;
  options=["sam", "varun", "jasmine"];
  formgroup: any = FormGroup
 filteredoptions: any;
 

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private http: HttpClient ,
    private fb : FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
   
     this.peopleService.getPeoplebyId(id!).subscribe(d => 
      {this.isLoading=true})
    // )
   

     this.people$ = this.peopleService.getPeoplebyId(id!)
   
    //  aqui a função puxar pro option
   
    //   this.getName();
    //  this.initForm();
     console.log(this.options)
  
    }
    
    

    // initForm(){
    //   this.formgroup = this.fb.group({
    //     'employee' : ['']
    //   })
    //   this.formgroup.get('employee').valueChanges.subscribe((response: any) => {
    //     console.log('data is', response)
    //     this.filteredData(response);

    //   })
    // }
  

    // filteredData(enteredData: string){
    //   this.filteredoptions = this.options.filter(item => {
    //     return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    //   })
    // }
    
    // getName(){
    //   this.peopleService.getData().subscribe(response =>{
    //     this.options = response
    //     this.filteredoptions = response
    //    })
    // }

}

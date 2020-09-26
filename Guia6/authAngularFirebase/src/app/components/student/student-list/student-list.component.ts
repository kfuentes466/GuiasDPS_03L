import { Component, OnInit } from '@angular/core';

//model
import {Students} from '../../../models/students';

//service
import {StudentService} from '../../../services/student.service';

//toastr
import {ToastrService} from 'ngx-toastr';
import { element } from 'protractor';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: Students[];
  
  constructor(
    private studentService : StudentService,
    private toastr: ToastrService
  ) { }

  ngOnInit(){
    return this.studentService.getStudents().snapshotChanges().subscribe(item => {
      this.studentList = [];
      item.forEach(element =>  {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.studentList.push(x as Students);
      });
    });
  }

  onEdit(student : Students){
    this.studentService.selectedStudent = Object.assign({}, student)
  }

  onDelete($key:string){
    if(confirm('Are you sure you want to delete it')){
      this.studentService.deleteStudent($key);
      this.toastr.warning('Deleted Successfully', 'Student removed');
    }
  }

}

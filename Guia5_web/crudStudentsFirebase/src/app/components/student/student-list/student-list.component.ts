import { Component, OnInit } from '@angular/core';

//model
import {Student} from '../../../models/student';

//service
import {StudentService} from '../../../service/student.service';

//toastr
import {ToastrService} from 'ngx-toastr';
import { element } from 'protractor';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

    studentList: Student[];
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
        this.studentList.push(x as Student);
      });
    });
  }

  onEdit(student : Student){
    this.studentService.selectedStudent = Object.assign({}, student)
  }

  //Aqui se hace la conexion con el StudentService
  onDelete($key:string){
    if(confirm('Are you sure you want to delete it')){
      this.studentService.deleteStudent($key);
      this.toastr.warning('Deleted Successfully', 'Student removed');
    }
  }

}

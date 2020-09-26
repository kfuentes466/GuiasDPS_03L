import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//Servicios 
import { StudentService } from '../../../services/student.service';
//clase
import { Students } from '../../../models/students';
//toastr
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../services/user.service'; 
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    public studentService : StudentService,
    public toastr : ToastrService,
    public authService : UserService
  ) { }

  ngOnInit(){
    this.studentService.getStudents();
    this.resetForm();
  }

  onSubmit(studentForm : NgForm){
    if(studentForm.value.$key == null)
      this.studentService.insertStudent(studentForm.value);
    else
      this.studentService.updateStudent(studentForm.value);

    this.resetForm(studentForm);
    this.toastr.success('Sucessfull operation', 'Student Registered');
  }

  resetForm(studentForm?: NgForm){
    if(studentForm != null)
      studentForm.reset();
    this.studentService.selectedStudent = new Students();
  }

}

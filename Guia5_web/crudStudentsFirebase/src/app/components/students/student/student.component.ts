import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//Servicios 
import { StudentService } from '../../../service/student.service';
//clase
import { Student } from '../../../models/student';
//toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    public studentService : StudentService,
    public toastr : ToastrService 
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
    this.studentService.selectedStudent = new Student();
  }

}

import { Injectable } from '@angular/core';

//Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

//model 
import { Student }  from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //Traer los alumnos desde Firebase
  studentList: AngularFireList<any>;

  //variable temporal para guardar los alumnos
  selectedStudent: Student = new Student();

  constructor(private firebase: AngularFireDatabase) { }

  getStudents(){
    return this.studentList = this.firebase.list('students');
  }

  insertStudent(student : Student){
    this.studentList.push({
      name: student.name,
      lastName : student.lastName,
      age : student.age
    });
  }

  updateStudent(student : Student){
    this.studentList.update(student.$key, {
      name: student.name,
      lastName: student.lastName,
      age: student.age
    });
  }

  deleteStudent($key:string){
    this.studentList.remove($key);
  }


}

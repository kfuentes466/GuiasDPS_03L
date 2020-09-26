import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Students} from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList: AngularFireList<any>;
  selectedStudent: Students = new Students();
  constructor(private firebase: AngularFireDatabase) { }

  getStudents(){
    return this.studentList = this.firebase.list('students');
  }

  insertStudent(student : Students){
    this.studentList.push({
      name: student.name,
      lastName : student.lastName,
      age : student.age
    });
  }

  updateStudent(student : Students){
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

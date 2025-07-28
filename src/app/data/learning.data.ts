import { Course } from "../model/Course";
import { Student } from "../model/Student";

export const student1:Student={
    id:100,
    idCard:1150253084,
    name:"Carlos",
    surname:"Tene",
}
export const student2:Student={
    id:101,
    idCard:1165329874,
    name:"Jenniffer",
    surname:"Ajila",
}
export const student3:Student={
    id:102,
    idCard:1163345879,
    name:"Ángel",
    surname:"Mora",
}
export const student4:Student={
    id:103,
    idCard:1163250321,
    name:"Claudia",
    surname:"Mora",
}
export const courseData:Course={
    id:1,
    name:"Informática",
    students:[student1,student2,student3,student4],
}
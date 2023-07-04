import Classroom from "./0-classroom.js"
export default function initializeRooms() {
    const myClassroom1 = new Classroom(19);
    const myClassroom2 = new Classroom(20);
    const myClassroom3 = new Classroom(34);
    
    const myArray = [myClassroom1, myClassroom2, myClassroom3];
    return myArray;
    // myClassroom.push(myClassroom(19));
    // return myClassroom;
}
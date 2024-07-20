 import Database from 'better-sqlite3'
 import axios from 'axios'

const db = new Database("lecturers.db");

export interface ILecturer{
    id:number,
    name:string,
    surname:string,
    phone:string,
    email:string,
    faculty:string,
    institution: string,
    dateofbirth: string,
    cover:string
}

export type InputLecturer = Omit<ILecturer, 'id'>

export interface UpdateLecturer {
    id:number,
    name:string,
    surname:string,
    phone:string,
    email:string,
    faculty:string,
    institution: string,
    dateofbirth: string,
    cover:string
    isEmpty:boolean
}

export const getAllLecturers = ():ILecturer[]=> {
    return db.prepare("SELECT * FROM lecturers").all() as ILecturer[];
}

export const getLecturerById = (id:string|number):ILecturer|null => {
    const statement = db.prepare("SELECT * FROM lecturers WHERE id=?");
    const info = statement.all(id);
    
    if(info.length === 0) {
        return null;
    }

    return info[0] as ILecturer;
}

export const addLecturer = (lecturer:InputLecturer) => {
    console.log("lecturer log start")
    console.log(lecturer)
    console.log("lecturer log end")
    db.prepare(`
        INSERT INTO lecturers(name, surname, phone, email, faculty, institution, dateofbirth, cover)
        VALUES(@name, @surname, @phone, @email, @faculty, @institution, @dateofbirth, @cover)
        `).run(lecturer)
}

export const updateLecturer = (lecturer:UpdateLecturer) => {
    if(lecturer.isEmpty) {
        db.prepare(`
            UPDATE lecturers
            SET name = @name, surname = @surname, phone = @phone, email = @email, faculty = @faculty, institution = @institution, dateofbirth = @dateofbirth, cover = @cover
            WHERE id = @id
            `).run(lecturer)    
    } else {
        db.prepare(`
            UPDATE lecturers
            SET name = @name, surname = @surname, phone = @phone, email = @email, faculty = @faculty, institution = @institution, dateofbirth = @dateofbirth, cover = @cover
            WHERE id = @id
            `).run(lecturer)
    }   
}

export const deleteLecturer = (lecturerId:number) => {
    db.prepare(`
        DELETE FROM lecturers WHERE id = @id
        `).run({'id':lecturerId})
}

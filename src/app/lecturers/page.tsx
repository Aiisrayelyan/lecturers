import styles from "../page.module.css";
import { getAllLecturers, ILecturer } from "../lib/api";
import Link from "next/link";

export default function Home() {
    const result = getAllLecturers();
    console.log(result);

    return <>
        <div className={styles.lecturers_div}>
            {result
                .filter((lecturer) => lecturer.name !== '')
                .map((lecturer) => (
                    <div className={styles.lecturers_card} key={lecturer.id}>
                        <h2>{lecturer.name + " " + lecturer.surname}</h2>
                        <h3>{'PHONE NUMBER: ' + lecturer.phone}</h3>
                        <h3>{'EMAIL: ' + lecturer.email}</h3>
                        <h3>{'FACULTY: ' + lecturer.faculty}</h3>
                        <h3>{'INSTITUTION: ' + lecturer.institution}</h3>
                        <h3>{'dateofbirth: ' + lecturer.dateofbirth}</h3>
                        <img src={'/' + lecturer.cover}></img>
                        <Link href={`/lecturers/edit/${lecturer.id}`}>
                            <button className="button is-danger">Edit</button>
                        </Link>
                        <Link href={`/lecturers/delete/${lecturer.id}`}>
                            <button className="button is-danger">Delete</button>
                        </Link>
                    </div>
                ))}
        </div>
    </>
}

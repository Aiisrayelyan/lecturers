"use server"

import { createWriteStream } from "fs";
import { addLecturer, updateLecturer, ILecturer, InputLecturer, UpdateLecturer } from "../api";
import { redirect } from "next/navigation";

export const handleAdd = async (data: FormData) => {
    let photo = data.get("cover") as File;

    const filename = Date.now() + "." + photo.type.split("/").at(-1);

    const stream = createWriteStream("public/images/" + filename);
    const bufferedImage = await photo.arrayBuffer();
    stream.write(Buffer.from(bufferedImage));

    let lecturer: InputLecturer = {
        name: data.get("name") as string,
        surname: data.get("surname") as string,
        phone: data.get("phone") as string,
        email: data.get("email") as string,
        faculty: data.get("faculty") as string,
        institution:data.get("institution") as string,
        dateofbirth: data.get("dateofbirth") as string,
        cover: "images/" + filename,
    }
    addLecturer(lecturer)
    redirect("/")
}

export const handleUpdate = async (data: FormData) => {
    let photo = data.get("cover") as File;

    const filename = Date.now() + "." + photo.type.split("/").at(-1);

    if (photo.size !== 0) {
        const stream = createWriteStream("public/images/" + filename);
        const bufferedImage = await photo.arrayBuffer();
        stream.write(Buffer.from(bufferedImage));
    }


    let lecturer: UpdateLecturer = {
        id: +(data.get("id") as string),
        name: data.get("name") as string,
        surname: data.get("surname") as string,
        phone: data.get("phone") as string,
        email: data.get("email") as string,
        faculty: data.get("faculty") as string,
        institution:data.get("institution") as string,
        dateofbirth: data.get("dateofbirth") as string,
        cover: "images/" + filename,
        isEmpty: photo.size === 0
    }

    console.log('lecturer update log start')
    console.log(lecturer)
    console.log('lecturer update log end')

    updateLecturer(lecturer)
    redirect("/lecturers")
}


import { ImagePicker } from "@/app/lib/components/image-picker";
import { redirect } from "next/navigation";
import { getLecturerById, deleteLecturer } from "../../../lib/api";
import styles from "../../../page.module.css";

interface PageProps {
    params: {
        id: string;
    };
}

export default function Page({ params }: PageProps) {
    if (!params.id) {
        redirect('/');
    }

    const lecturer = getLecturerById(params.id);
    console.log(lecturer);

    if(lecturer === null || lecturer.name === '') {
        redirect('/lecturers');
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    };

    deleteLecturer(lecturer.id);
    redirect('/lecturers');
}
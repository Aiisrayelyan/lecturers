import { handleAdd, handleUpdate } from "@/app/lib/actions/lecturer-actions";
import { ImagePicker } from "@/app/lib/components/image-picker";
import { redirect } from "next/navigation";
import { getLecturerById } from "../../../lib/api";
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
    
    return <>
        <h1 className="is-size-4">Edit lecturer</h1>
        <div className="columns">
            <div className="column is-two-fifths">
                <form className="box my-5" action = {handleUpdate}>
                    <input type="hidden" name="id" value={lecturer.id}/>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="enter a name"
                            className="input is-dark"
                            defaultValue={lecturer.name}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="surname"
                            placeholder="enter a surname"
                            className="input is-dark"
                            defaultValue={lecturer.surname}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="phone"
                            placeholder="enter a phone number"
                            className="input is-dark"
                            defaultValue={lecturer.phone}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="email"
                            placeholder="enter an email"
                            className="input is-dark"
                            defaultValue={lecturer.email}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="faculty"
                            placeholder="enter a faculty"
                            className="input is-dark"
                            defaultValue={lecturer.faculty}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="institution"
                            placeholder="enter a institution"
                            className="input is-dark"
                            defaultValue={lecturer.institution}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="dateofbirth"
                            placeholder="enter date of birth"
                            className="input is-dark"
                            defaultValue={lecturer.dateofbirth}
                        />
                    </div>
                    <div className="field my-4">
                        <ImagePicker urlParameter={'/' + lecturer.cover}/>
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}
import { handleAdd } from "@/app/lib/actions/lecturer-actions";
import { ImagePicker } from "@/app/lib/components/image-picker";

export default function Page() {
    return <>
        <h1 className="is-size-4">Add Lecturer</h1>
        <div className="columns">
            <div className="column is-two-fifths">
                <form className="box my-5" action = {handleAdd}>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="enter a name"
                            className="input is-dark"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="surname"
                            placeholder="enter a surname"
                            className="input is-dark"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="phone"
                            placeholder="enter a phone number"
                            className="input is-dark"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="email"
                            placeholder="enter an email"
                            className="input is-dark"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="faculty"
                            placeholder="enter a faculty"
                            className="input is-dark"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="institution"
                            placeholder="enter an institution"
                            className="input is-dark"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="dateofbirth"
                            placeholder="enter date of birth"
                            className="input is-dark"
                        />
                    </div>
                    <div className="field my-4">
                        <ImagePicker />
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}   
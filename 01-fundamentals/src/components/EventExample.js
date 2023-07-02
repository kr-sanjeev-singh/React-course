import { useRef } from "react";

const EventExamples = () => {
    const ref = useRef();
    const handleButtonClick = () => {
        alert("handle button click");
    };

    const handleFormInput = (e) => {
        // console.log(ref.current.name, ref.current.value);
        console.log("Input name", e.target.name);
        console.log("Input Value", e.target.value);
        console.log("handle form input");
    };

    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    };

    return (
        <section>
            <form onSubmit={handleFormSubmission}>
                <h2>Typical Form</h2>
                {/* pass the ref */}
                <input type="text" name="example" onChange={handleFormInput} style={{ margin: "1rem 0" }} />
                <button type="submit">Submit</button>
                <div>
                    <button onClick={handleButtonClick} type="button">
                        Click Me
                    </button>
                </div>
            </form>
        </section>
    );
};

export default EventExamples;

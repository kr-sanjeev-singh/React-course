import { useState } from "react";

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "Peter",
        age: 24,
        hobby: "Reading Books",
    });

    const handleClick = () => {
        // setPerson({
        //     name: "John",
        //     age: 28,
        //     hobby: "Scream at the computer",
        // });
        // setPerson((prev) => ({ ...prev, name: "John" }));
        setPerson({ ...person, name: "John" });
    };
    return (
        <div>
            <h2>useState object example</h2>
            <h4>Name: {person.name}</h4>
            <h4>Age: {person.age}</h4>
            <h4>Enjoy: {person.hobby}</h4>
            <button type="button" className="btn" onClick={handleClick}>
                Show John
            </button>
        </div>
    );
};

export default UseStateObject;

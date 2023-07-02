import React from "react";
import { data } from "../../../data";
const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);

    const removeItem = (id) => {
        const newPeople = people.filter((key) => key.id !== id);
        setPeople(newPeople);
    };

    const clearAllItem = () => {
        setPeople([]);
    };

    return (
        <div>
            {people.map((key) => (
                <div key={key.id}>
                    <h4>{key.name}</h4>
                    <button type="button" onClick={() => removeItem(key.id)}>
                        remove
                    </button>
                </div>
            ))}
            <button type="button" style={{ marginTop: "2rem" }} className="btn" onClick={clearAllItem}>
                clear items
            </button>
        </div>
    );
};

export default UseStateArray;

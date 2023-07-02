import { useState } from "react";

const UseStateGotcha = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            console.log("button click");
            setCount((prev) => prev + 1);
        }, 3000);
    };

    return (
        <div>
            <h2>useState "gotcha"</h2>
            <h1>{count}</h1>
            <button type="button" className="btn" onClick={handleClick}>
                increase
            </button>
        </div>
    );
};

export default UseStateGotcha;

import { list } from "../helpers/constants";
import Book from "./Book";
import EventExamples from "./EventExample";
import SomeComponent from "./SomeComponent";

const BookList = () => {
    const someValue = "shakeAndBake";

    const displayValue = () => {
        console.log(someValue);
    };

    const getBook = (id) => {
        const book = list.find((key) => key.id === id);
        console.log("🚀 ~ file: index.js:35 ~ getBook ~ book:", book);
    };

    return (
        <>
            <h1>Amazon Best Sellers</h1>
            <section className="booklist">
                <EventExamples />
                {list.map((item) => (
                    // <Book {...item} key={item.id}>
                    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptatibus.</p>
                    //     <button>Click me!</button>
                    // </Book>
                    // <Book {...item} key={item.id} />
                    <Book book={item} key={item.id} getBook={getBook} />
                ))}

                {/* {JSON.stringify(list)} */}
                <SomeComponent someValue={someValue} displayValue={displayValue} />
            </section>
        </>
    );
};
export default BookList;

const Book = ({ book: { src: source, title: bookTitle, author: bookAuthor, id }, getBook }) => {
    // const { src, title, author, children } = props;
    const displayTile = () => {
        console.log(bookTitle);
    };
    return (
        <article className="book">
            <p>{id}</p>
            <img src={source} alt={bookTitle} />
            <h2>{bookTitle}</h2>
            <h2>{bookAuthor}</h2>
            <button onClick={() => getBook(id)}>Display Title</button>

            {/* {children} */}
        </article>
    );
};

export default Book;

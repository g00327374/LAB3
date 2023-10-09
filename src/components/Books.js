import BookItem from "./bookItem"

function Books(props){
    // pull out every element from the array and perform
    // calculations on each of them
    return props.myBooks.map(
        (book)=>{
         return <BookItem mybook={book} key={book.isbn}></BookItem>
        }
    );
}

export default Books;
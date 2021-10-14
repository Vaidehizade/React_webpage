
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {books} from './books';
import Book from './Book';
//stateless functional component
//always return JSX

//jsx rules
//return always single element
//div/section/article or fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting
// function Greeting() {

//   return (
//     <div onClick>
//     <h1>hello world</h1>
//     <ul>
//       <li>
//         <a href ="#">hello world</a>
//       </li>
//       <img src="" alt=""/>
//       <input type="text" name="" id=""/>
//     </ul>
//   </div>

//   );
// function Greeting () {

//   return (

//     <div>
//       <Person/>
//       <Message/>
//     </div>
//   );
// }

// const Person =() => <h2>Vaidehi Zade</h2>;  //implicitely returning
// const Message = () => {
//       return <p>this is my message</p>    //explicitely returning
// }

//   // return <h4>This is Vaidehi! and this is my First Component</h4>;
// // }

// // const Greeting = () =>{
// //   return React.createElement('div',{}, React.createElement('h1',{}, 'hello world'));
// // };

// ReactDOM.render(<Greeting/>, document.getElementById('root'));


// const author = 'Amelia Hepworth';
// const title = 'I Love You to the Moon And Back';
// const img = "https://m.media-amazon.com/images/I/811MtOesEVL._AC_UY218_.jpg";
function BookList() {
  return (

    <section className='booklist'>{books.map((book)  =>{
        //  console.log(books);
        const {img, title,author} = book
               return (
                //  <div>
                //    <h2>{title}</h2>
                //    <h4>{author}</h4>
                //  </div>
                <Book key={book.id} {...book}></Book>
               );
          })}</section>
  );
}

ReactDOM.render(<BookList/>, document.getElementById('root'));




















import React from 'react'

const Book = ({img, title,author}) =>{
    //   console.log(props);
    //  const {img,title,author} = props.book;

    // console.log(props);
    //attribute, eventHandler
    //onClick,onMouseOver
    const clickHandler =(e) =>{
          console.log(e);
          console.log(e.target);
          alert('Welcome!');
    };
    const complexExample =(author) =>{
        document.write("Author is: " + author);
    };
        return (
          <article className='book' onMouseOver={()=>{
            console.log(title);
          }}>
            <img src={img} alt=""/>
            <h1 onClick ={() => console.log(title)}>{title}</h1>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}> reference</button>
             <button type="button" onClick={ ()=>complexExample(author)}>complex</button>
          </article>
        );
};

export default Book
// const Image = () => (<img src="https://m.media-amazon.com/images/I/811MtOesEVL._AC_UY218_.jpg" alt=""/>);

// const Title = () => <h2>I Love You to the Moon and Back</h2>;

// const Author = () => ( 
//    <h4 style={{color:'blue', fontSize: '0.75rem',marginTop: '0.25rem'}}>author: Amelia Hepworth</h4>
// );




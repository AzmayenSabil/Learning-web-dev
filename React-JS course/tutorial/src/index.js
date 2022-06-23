import React from "react";
import ReactDOM from "react-dom";

//CSS
import './index.css';

//vars
const img = 'https://webthemez.com/wp-content/uploads/2019/07/free-book-cover-mockup-1000x750.jpg'
 

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
};

const Book = () => {
  return (
  <article className="book">
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>
  );
};

const Image = () => {
  return (
    <img src={img} width='400px'></img>);
};

const Title = () => <h1>A demo Title</h1>;
const Author = () => <h4 style={{color:'#617d98', fontSize:'0.5rem', marginTop:'0.25rem'}}>A demo Author</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));

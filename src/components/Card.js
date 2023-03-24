import React from "react";

const Card = ({ book }) => {
  const id = book.id;
  const thumbnail = book.volumeInfo.imageLinks.thumbnail;
  const categories = book.volumeInfo.categories;
  const title = book.volumeInfo.title;
  const searchInfo = book.volumeInfo.subtitle;
  const authors = book.volumeInfo.authors;
  return (
    <article key={id} className="card col-sm-4 ">
      <div className="col-md-4">
        <img src={thumbnail} alt="#" className="card-img-top" />
      </div>
      <div className="row-md-8">
        <div className="card-body">
          <p className="card-text">{categories}</p>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{searchInfo}</p>
          <p className="card-text">
            <small className="text-muted">{authors}</small>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;

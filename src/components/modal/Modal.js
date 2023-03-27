import React from "react";

const Modal = (
  { book },
  thumbnail,
  categories,
  title,
  description,
  authors,
  id
) => {
  //   modal === true ? modalActive : modalClose;

  return (
    <div className="modalCard collapse" id={id}>
      <div className="card card-body">
        <p className="title">{title}</p>
        <img src={thumbnail} alt="" />
        <p className="autors">{authors}</p>
        <p className="categories">{categories}</p>
        <p className="description">{description}</p>
        <a className="info" href={book.volumeInfo.infoLink}>
          Узнать подробнее
        </a>
        <p className="language">{book.volumeInfo.language}</p>
        <p className="pageCount">{book.volumeInfo.pageCount}</p>
        <p className="publishedDate">{book.volumeInfo.publishedDate}</p>
        <p className="publisher">{book.volumeInfo.publisher}</p>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from "react";
import Modal from "../modal/Modal";
import Popup from "../modal/Popap";
import "./card.css";

const Card = ({ book }) => {
  const [popupActive, setPopupActive] = useState(false);
  const id = book.id;
  const thumbnail = book.volumeInfo.imageLinks.thumbnail;
  const categories = book.volumeInfo.categories;
  const title = book.volumeInfo.title;
  const description =
    book.volumeInfo.description !== undefined
      ? book.volumeInfo.description
      : "...";

  const authors = book.volumeInfo.authors;

  return (
    <>
      <Popup
        active={popupActive}
        setActive={setPopupActive}
        book={book}
        thumbnail={thumbnail}
        categories={categories}
        title={title}
        description={description}
        authors={authors}
        id={id}
      >
        <div className="" id={id}>
          <div className="">
            <p className="title">{title}</p>
            <img className="card-img-top" src={thumbnail} alt="" />
            <p className="autors">Авторы: {authors}</p>
            <p className="categories">Категория: {categories}</p>
            <p className="description">{description}</p>
            <a className="info" href={book.volumeInfo.infoLink}>
              Узнать подробнее
            </a>
            <p className="language">Язык: {book.volumeInfo.language}</p>
            <p className="pageCount">
              Количество страниц: {book.volumeInfo.pageCount}
            </p>
            <p className="publishedDate">
              Дата публикации: {book.volumeInfo.publishedDate}
            </p>
            <p className="publisher">
              Издательство: {book.volumeInfo.publisher}
            </p>
          </div>
        </div>
      </Popup>
      <article
        key={id}
        className="card cardWidth"
        onClick={() => setPopupActive(true)}
      >
        <img src={thumbnail} alt="#" className="card-img-top" />

        <div className="card__body">
          <h5 className="card__title">{title}</h5>
          <p className="description card-text">
            {description.slice(0, 100)}...
          </p>
          <p className="categories"></p>
          <p className="authors card-text">
            <small>Категория: {categories}</small>
            <br />
            <small className="text-muted">Авторы: {`${authors}`}</small>
            <br />
          </p>
        </div>
      </article>
    </>
  );
};

export default Card;

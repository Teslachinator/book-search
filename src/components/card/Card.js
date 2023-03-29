import React, { useState } from "react";
import Popup from "../modal/Popap";
import "./card.css";

const Card = ({ book }) => {
  const [popupActive, setPopupActive] = useState(false);
  const id = book.id;

  let imgImg =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  const categories = book.volumeInfo.categories;
  const title = book.volumeInfo.title;
  const description =
    book.volumeInfo.description !== undefined
      ? book.volumeInfo.description
      : "...";
  const authors = book.volumeInfo.authors;
  return (
    <>
      <Popup active={popupActive} setActive={setPopupActive}>
        <div className="popupCard" id={id}>
          <div
            className="popupCard__close"
            onClick={() => setPopupActive(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 96 960 960"
              width="40"
            >
              <path d="m251.333 857.71-53.043-53.043L426.957 576 198.29 347.333l53.043-53.043L480 522.957 708.667 294.29l53.043 53.043L533.043 576 761.71 804.667l-53.043 53.043L480 629.043 251.333 857.71Z" />
            </svg>
          </div>
          <div className="popupCard__header">
            <img className="popupCard-img" src={imgImg} alt="#" />
            <div>
              <p className="title h2">{title}</p>
              <p className="autors">Авторы: {`${authors}`}</p>
              <p className="categories">Категория: {categories}</p>
              <a
                className="info btn btn-info"
                href={book.volumeInfo.previewLink}
                target="_blank"
                rel="noreferrer"
              >
                Предпросмотр
              </a>
            </div>
          </div>
          <p className="line"></p>
          <div className="popupCard__main">
            <p className="description">{description}</p>
          </div>
          <div className="popupCard__footer">
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
        <img
          src={
            imgImg ||
            "https://books.google.ru/googlebooks/images/no_cover_thumb.gif"
          }
          alt="#"
          className="card-img-top"
        />

        <div className="card__body">
          <h5 className="card__title">{title}</h5>
          <p className="description card-text">
            {description.slice(0, 100)}...
          </p>
          <p className="categories"></p>
          <p className="authors card-text">
            <small>Категория: {categories}</small>
            <br />
            <small className="text-muted authors">Авторы: {`${authors}`}</small>
            <br />
          </p>
        </div>
      </article>
    </>
  );
};

export default Card;

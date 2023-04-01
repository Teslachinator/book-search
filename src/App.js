import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import API_KEY from "./token.js";
import { useEffect, useState } from "react";
import Card from "./components/card/Card";

function App() {
  const BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("relevance");
  const [category, setCategory] = useState("");
  const [books, setBooks] = useState([]);
  const [bookCount, setbookCount] = useState();
  const [pagesCount, setPagesCount] = useState(1);
  console.log(bookCount);
  useEffect(() => {
    setPagesCount(1);
  }, [search, sort, category]);
  let requestS;
  if (search === "") {
    requestS = "q=";
  } else {
    requestS = `q=${search}+intitle:${search}+${category}`;
  }
  const getSearchData = () => {
    axios
      .get(
        `${BASE_URL}${requestS}&orderBy=${sort}&startIndex=${
          (pagesCount - 1) * 40
        }&maxResults=40&langRestrict=ru&key=${API_KEY}`
      )
      .then((res) => {
        setbookCount(res.data.totalItems);

        setBooks(res.data.items);

        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const getPagesData = () => {
    axios
      .get(
        `${BASE_URL}${requestS}&orderBy=${sort}&startIndex=${
          (pagesCount - 1) * 40
        }&maxResults=40&langRestrict=ru&key=${API_KEY}`
      )
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  };
  console.log(
    pagesCount,
    books,

    `${BASE_URL}q=${search}+intitle:${search}+${category}&orderBy=${sort}&startIndex=${
      (pagesCount - 1) * 40
    }&maxResults=40&langRestrict=ru&key=${API_KEY}`
  );

  const sSort = (e) => setSort(e);
  const sCategory = (e) => setCategory(e);
  const sSearch = (e) => setSearch(e);

  useEffect(() => {
    getPagesData();
  }, [pagesCount]);

  return (
    <div className="App">
      <Header
        sSort={sSort}
        sSearch={sSearch}
        sCategory={sCategory}
        data={() => getSearchData()}
        bookCount={bookCount}
      />
      <main className="container-fluid">
        <nav
          className={
            bookCount === undefined || bookCount <= 40 ? "none" : "block"
          }
          aria-label="Page navigation"
        >
          <ul className="pagination mb-4 justify-content-center">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  setPagesCount(pagesCount - 1);
                }}
                disabled={pagesCount <= 1}
              >
                Прошлая <br /> страница
              </button>
            </li>
            <li className="page-item">
              <p className="page-link pagesCount">{pagesCount}</p>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  setPagesCount(pagesCount + 1);
                }}
                disabled={pagesCount >= Math.ceil(bookCount / 40)}
              >
                Следующая <br /> страница
              </button>
            </li>
          </ul>
        </nav>

        <section className="row gap-3">
          {books !== undefined && books.length > 0 ? (
            books.map((book) => {
              return <Card book={book} />;
            })
          ) : (
            <p className="unknow">Список книг пуст</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

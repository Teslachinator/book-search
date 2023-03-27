import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useState } from "react";
import Card from "./components/card/Card";
// import { Provider } from "react-redux";
// import store from "./helpers/store";

function App() {
  const KEY = "AIzaSyBQAd9SEszXHXvKruUmFFWA7P7Je9fcd2U";
  const BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("relevance");
  const [category, setCategory] = useState("");
  const [books, setBooks] = useState([]);
  const getSearchData = () => {
    axios
      .get(
        `${BASE_URL}q=${search}+${category}&orderBy=${sort}&maxResults=10&langRestrict=ru&key=${KEY}`
      )
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  };
  console.log(
    books,
    // books.searchInfo.textSnippet,
    `${BASE_URL}q=${search}+${category}&orderBy=${sort}&key=${KEY}`,
    category,
    sort
  );

  const sSort = (e) => setSort(e);
  const sCategory = (e) => setCategory(e);
  const sSearch = (e) => setSearch(e);

  return (
    // <Provider store={store}>
    <div className="App">
      <Header
        sSort={sSort}
        sSearch={sSearch}
        sCategory={sCategory}
        data={() => getSearchData()}
      />
      {/* <header>
        <div className="container">
          <h1 className="header__title">Поиск книг</h1>
          <div className="header__search input-group mb-3">
            <input
              className="form-control"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  getSearchData();
                }
              }}
            />
            <button onClick={() => getSearchData()} className="btn btn-primary">
              search
            </button>
          </div>
          <div className="header__filter container ">
            <div>
              <p>Категории</p>
              <select
                className="form-select"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" defaultValue>
                  Все
                </option>
                <option value="subject:art">Арт</option>
                <option value="subject:biography">Биография</option>
                <option value="subject:computers">Компьютеры</option>
                <option value="subject:history">История</option>
                <option value="subject:medical">Медицина</option>
                <option value="subject:poetry">Поэзия</option>
              </select>
            </div>
            <div>
              <p>Сортировать по</p>
              <select
                className="form-select"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="relevance" defaultValue>
                  По релевантности
                </option>
                <option value="newest">Сначала новые</option>
              </select>
            </div>
          </div>
        </div>
      </header> */}
      <main className="container-fluid">
        <section className="row row-cols-2 gap-3">
          {books.map((book) => {
            return <Card book={book} />;
          })}
        </section>
      </main>
    </div>
    // </Provider>
  );
}

export default App;

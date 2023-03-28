import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import API_KEY from "./token.js";
import { useState } from "react";
import Card from "./components/card/Card";
// import { Provider } from "react-redux";
// import store from "./helpers/store";

function App() {
  const BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("relevance");
  const [category, setCategory] = useState("");
  const [books, setBooks] = useState([]);
  const getSearchData = () => {
    axios
      .get(
        `${BASE_URL}q=${search}+${category}&orderBy=${sort}&maxResults=10&langRestrict=ru&key=${API_KEY}`
      )
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  };
  console.log(
    books,
    // books.searchInfo.textSnippet,
    `${BASE_URL}q=${search}+${category}&orderBy=${sort}&key=${API_KEY}`,
    category,
    sort
  );

  const sSort = (e) => setSort(e);
  const sCategory = (e) => setCategory(e);
  const sSearch = (e) => setSearch(e);

  return (
    <div className="App">
      <Header
        sSort={sSort}
        sSearch={sSearch}
        sCategory={sCategory}
        data={() => getSearchData()}
      />
      <main className="container-fluid">
        <section className="row row-cols-2 gap-3">
          {books.map((book) => {
            return <Card book={book} />;
          })}
        </section>
      </main>
    </div>
  );
}

export default App;

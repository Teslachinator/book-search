import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter, updateSorting } from "../helpers/store";

const Header = ({ sSearch, sCategory, sSort, getSearchData }) => {
  const propSort = (e) => {
    sSort(e.target.value);
  };
  const propSearch = (e) => {
    sSearch(e.target.value);
  };
  const propCategory = (e) => {
    sCategory(e.target.value);
  };

  <header>
    <div className="container">
      <h1 className="header__title">Поиск книг</h1>
      <div className="header__search input-group mb-3">
        <input
          className="form-control"
          type="text"
          onChange={propSearch}
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
          <select className="form-select" onChange={propCategory}>
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
          <select className="form-select" onChange={propSort}>
            <option value="relevance" defaultValue>
              По релевантности
            </option>
            <option value="newest">Сначала новые</option>
          </select>
        </div>
      </div>
    </div>
  </header>;
};
export default Header;

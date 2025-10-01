import React, { useEffect, useState } from 'react';
import './sidebar.css';

export default function Sidebar({ setBooks, comics, styles }) {
  const [price, setPrice] = useState({ min: '', max: '' });

  const uniqueAuthors = [];
  comics.forEach((comic) => {
    if (!uniqueAuthors.some((el) => el.id === comic.Author.id)) {
      uniqueAuthors.push(comic.Author);
    }
  });

  const checkboxAuthors = {};
  uniqueAuthors.forEach((author) => {
    if (!checkboxAuthors[author.id]) checkboxAuthors[author.id] = false;
  });

  const [authors, setAuthors] = useState(checkboxAuthors);

  const checkboxStyles = {};
  styles.forEach((style) => {
    if (!checkboxStyles[style.id]) checkboxStyles[style.id] = false;
  });

  const [genres, setGenres] = useState(checkboxStyles);

  const [search, setSearch] = useState('');

  const changePriceHandler = (e) => {
    setPrice((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const checkboxAuthorsHandler = (e) => {
    setAuthors((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const checkboxStylesHandler = (e) => {
    setGenres((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const sideBarFilter = () => {
    const minPrice = price.min.length > 0 ? Number(price.min) : 0;
    const maxPrice = price.max.length > 0 ? Number(price.max) : 99999;

    setBooks(() => comics.filter((book) => {
      // проверка цены
      if (book.price < minPrice || book.price > maxPrice) return false;
      // проверка авторов (если хотя бы один выбран)
      const authorsSelected = Object.values(authors).some((el) => el);
      if (authorsSelected && !authors[book.Author.id]) return false;
      // проверка стилей (если хотя бы один выбран)
      const stylesSelected = Object.values(genres).some((el) => el);
      if (stylesSelected && !genres[book.Style.id]) return false;
      // проверка поиска
      if (search.trim().length > 0) {
        const text = search.toLowerCase();
        const title = book.title?.toLowerCase() ?? '';
        const description = book.description?.toLowerCase() ?? '';
        if (!title.includes(text) && !description.includes(text)) return false;
      }
      return true;
    }));
  };
  useEffect(() => {
    const timeout = setTimeout(sideBarFilter, 500);
    return () => clearTimeout(timeout);
  }, [price, authors, genres, search]);

  return (
    <div className="sideBar">
      <div className="searchFields">
        <p>ПОИСК</p>
        <input type="text" value={search} name="search" onChange={searchHandler} placeholder="название комикса" />
      </div>
      <div className="searchFields price">
        <p>Цена</p>
        <input type="text" value={price.min} onChange={changePriceHandler} name="min" placeholder="от" />
        <input type="text" value={price.max} onChange={changePriceHandler} name="max" placeholder="до" />
      </div>
      <div className="searchFields">
        <p>Автор</p>
        <div>
          {uniqueAuthors?.map((author) => (
            <div className="form-check" key={author.id} onChange={checkboxAuthorsHandler}>
              <label className="form-check-label" htmlFor={`check${author.id}`}>
                {author.name}
                <input className="form-check-input" type="checkbox" name={author.id} id={`check${author.id}`} />
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="searchFields">
        <p>Жанр</p>
        <div>
          {styles?.map((style) => (
            <div className="form-check" key={style.id} onChange={checkboxStylesHandler}>
              <label className="form-check-label" htmlFor={`box${style.id}`}>
                {style.style}
                <input className="form-check-input" type="checkbox" name={style.id} id={`box${style.id}`} />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

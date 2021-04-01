import React, { useState } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import Books from "../data/books.js";
import Header from "../components/Header";

export default function HomeScreen() {
  const filterBooks = (item, query) => {
    if (!query) {
      return item;
    }

    return item.filter((item) => {
      const bookTitle = item.title.toLowerCase();
      const bookAutor = item.author.toLowerCase();
      return bookTitle.includes(query) || bookAutor.includes(query);
    });
  };
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredBooks = filterBooks(Books, searchQuery);

  return (
    <div className="container">
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {filteredBooks.map((item) => (
          <BookCard {...item} key={item.name} />
        ))}
      </div>
    </div>
  );
}

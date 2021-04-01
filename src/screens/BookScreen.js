import React, { useState } from "react";
import Book from "../components/Book";
import BookData from "../data/book.js";

export default function BookScreen() {
  const filteredBookData = (item, query) => {
    return item.filter((item) => {
      const bookTitle = item.title.toLowerCase();
      return bookTitle.includes(query);
    });
  };
  const { search } = window.location;
  const searchQuery = new URLSearchParams(search).get("show");
  const filterBookData = filteredBookData(BookData, searchQuery);
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
        {filterBookData.map((item) => (
          <Book {...item} key={item.name} />
        ))}
      </div>
    </div>
  );
}

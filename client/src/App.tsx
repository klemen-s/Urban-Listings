import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const url = "http://localhost:8000/listings";

  const [listings, setListings] = useState<Listing[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [previousPage, setPreviousPage] = useState<number>(currentPage - 1);
  const [nextPage, setNextPage] = useState<number>(currentPage + 1);
  const [firstPage, setFirstPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(50);
  const [showButton, setShowButton] = useState<boolean>(false);

  type Listing = {
    id: number;
    title: string;
    location: string;
    imageurl: string;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const pageHandler = (page: number) => {
    scrollToTop();
    setCurrentPage(page);
    setNextPage(page + 1);
    setPreviousPage(page - 1);

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page: page }),
    })
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setListings(result.listings);
        setLastPage(result.numberOfPages);
      })
      .catch((err) => console.log(err));
  };

  const listItems = listings.map((listing) => {
    return (
      <li className="listing-item" key={listing.id}>
        <img
          className="listing-image"
          src={listing.imageurl}
          alt="Listing Image"
        />
        <h1 className="listing-title">{listing.title}</h1>
        <p className="listing-location">{listing.location}</p>
      </li>
    );
  });

  useEffect(() => {
    fetch(url, { method: "PUT" })
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setListings(result.listings);
        setLastPage(result.numberOfPages);
      })
      .catch((err) => console.log(err));
  }, []);

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="main">
      <div className="navbar">
        <Link to="/" className="navbar-title">
          Urban Listings
        </Link>
      </div>
      <div className="content">
        {listItems}
        {listings.length && <div className="pagination-btns">
          {currentPage > 1 && (
            <Link
              to={{ pathname: "/listings", search: "?page=1" }}
              onClick={() => pageHandler(1)}
              className="pagination-btn"
            >
              {firstPage}
            </Link>
          )}
          {currentPage > 2 && previousPage !== 1 && (
            <Link
              to={{ pathname: "/listings", search: "?page=" + previousPage }}
              onClick={() => pageHandler(previousPage)}
              className="pagination-btn"
            >
              {previousPage}
            </Link>
          )}
          <Link
            to={{ pathname: "/listings", search: "?page=" + currentPage }}
            onClick={() => pageHandler(currentPage)}
            className="pagination-btn-active"
          >
            {currentPage}
          </Link>
          {currentPage !== lastPage && (
            <Link
              to={{ pathname: "/listings", search: "?page=" + nextPage }}
              onClick={() => pageHandler(nextPage)}
              className="pagination-btn"
            >
              {nextPage}
            </Link>
          )}
          {currentPage !== lastPage && nextPage !== lastPage && (
            <Link
              to={{ pathname: "/listings", search: "?page=" + lastPage }}
              onClick={() => pageHandler(lastPage)}
              className="pagination-btn"
            >
              {lastPage}
            </Link>
          )}
        </div>}
      </div>
      {showButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          ^
        </button>
      )}
    </div>
  );
}

export default App;

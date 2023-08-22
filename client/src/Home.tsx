import { Link } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const url = "http://localhost:8000/home-listings";
  const [listings, setListings] = useState<Listing[]>([]);

  type Listing = {
    id: number;
    title: string;
    location: string;
    imageurl: string;
  };

  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setListings(result.listings);
      })
      .catch((err) => console.log(err));
  }, []);

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

  return (
    <div className="main">
      <div className="navbar">
        <Link to="/" className="navbar-title">
          Urban Listings
        </Link>
      </div>
      <div className="home">
        <h1 className="home-title">Find your ideal apartment with us.</h1>
      </div>
      <div className="listings-text">
        <div className="listings-text-inner-wrapper">
          <p>Some of our apartment listings</p>
          <Link to="/listings" className="btn">
            All Listings
          </Link>
        </div>
        <ul className="content">{listItems}</ul>
      </div>
    </div>
  );
};

export default Home;

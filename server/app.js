const bodyParser = require("body-parser");
const express = require("express");
const sql = require("./db");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.put("/listings", async (req, res, next) => {
  try {
    const ITEMS_PER_PAGE = 20;
    let PAGE;

    if (!req.body.page) {
      PAGE = 1;
    } else {
      PAGE = req.body.page;
    }
    const numberOfListings = await sql`
        SELECT COUNT(*) FROM listings
    `;

    const NUMBER_OF_PAGES = Math.ceil(
      numberOfListings[0].count / ITEMS_PER_PAGE
    );

    const listings = await sql`
      SELECT * FROM listings
      OFFSET ${ITEMS_PER_PAGE * (PAGE - 1)} LIMIT ${ITEMS_PER_PAGE};
  `;

    res.json({ listings: listings, numberOfPages: NUMBER_OF_PAGES });
  } catch (error) {
    return error;
  }
});


app.get("/home-listings", async (req, res, next) => {
  try {
    const listings = await sql`
       SELECT * FROM listings
       LIMIT 4;
   `;

    res.json({ listings: listings });
  } catch (error) {
    return error;
  }
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ error: "Internal server error!" });
});

app.listen(8000);

from selenium import webdriver
from selenium.webdriver.common.by import By
import psycopg2

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--window-size=1920,1080')
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--disable-dev-shm-usage')

db_params = {
    "host": "database",
    "database": "postgres",
    "user": "postgres",
    "password": "root"
}


class Listing:
    def __init__(self, title, location, image_url):
        self.title = title
        self.location = location
        self.image_url = image_url

    def __str__(self):
        return f"Title: {self.title}, Location: {self.location}, Image Url: {self.image_url}"


driver = webdriver.Chrome(options=chrome_options)

listings = []

# first 500 listings = 20 listings per page * 25 pages
for page in range(1, 26):
    URL = "https://www.sreality.cz/en/search/for-sale/apartments?page=" + str(page)

    driver.get(URL)
    driver.implicitly_wait(10)

    contents = driver.find_element(By.CLASS_NAME, "dir-property-list")
    property_elements = contents.find_elements(By.CLASS_NAME, "property")

    # loop to scrape the title, location and image url
    for property in property_elements:
        title = property.find_element(By.CLASS_NAME, "name").text
        location = property.find_element(By.CLASS_NAME, "locality").text
        image_url = property.find_element(
            By.TAG_NAME, "img").get_attribute("src")

        # save data in listing instance
        listing = Listing(title, location, image_url)

        listings.append(listing)

try:
    conn = psycopg2.connect(**db_params)
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS listings (
            id SERIAL PRIMARY KEY,
            title TEXT,
            location TEXT,
            imageurl TEXT
        );
    """)

    conn.commit()

    for listing in listings:
        cur.execute("""
            INSERT INTO listings(title,location,imageurl) 
            VALUES(%s, %s, %s);
        """, (listing.title, listing.location, listing.image_url))

        conn.commit()

    conn.close()

except Exception as e:
    print(f"Error: {e}")

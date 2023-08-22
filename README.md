# react-node
Disclaimer: This code only runs on Windows!

To properly run these images please execute the docker compose build and docker compose up command in the Windows Command Line (cmd).

Steps to see scraped ads:
1. Firstly run the docker compose build command and after that run the docker compose up command. 
2. After the react-node-frontend container loaded, wait up to a minute or two for the web scraper to run and save all of the 500 listings ads into the database.
   This will be evident when the command line prints "react-node-python exited with code 0".

3. Only after that connect to http://localhost:8080 to see the scraped ads.
   

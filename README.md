<h2 align="center">Go Rent</h2>
 <p align="center">

Go Rent is a mobile app that makes it easy to buy and rent properties around the world. As simple as register and start looking for. Go Rent trys to make it as easy as possible for users to search, allowing users to filter by location, property type, by price, find a location in the map. 

 </br>
<img align="center" src="https://res.cloudinary.com/ddkurzft6/image/upload/v1669732004/gorent/gorent_captura_readme_huhwh2.jpg" alt="gorent"/>
 </p>

## Requirements

 - You will have to clone this project

 - You will have to create a .env in client and api folders

 - You will have to create you own database in PostgreSQL

 - Install the dependencies with npm install at Back and Front folders

 - Install Expo Go on your mobile phone

 - Run the server with npm run dev (development) or npm start (production)

 - Scan your QR with Expo Go


### Api .env
 ```
PORT= Number of the port where you wanna run api (ex. 3009).
JWT_SECRET= Is the secret key used for JWT.
DB_HOST= Host for the database (ex. localhost)
DB_USER= PostgreSQL username
DB_PASWORD= PostgreSQL password
DB_NAME= Database name
 ```

 ### Client .env
 ```
REACT_APP_URL_BASE = Your IPV4 adress + "/api/v1"
 ```
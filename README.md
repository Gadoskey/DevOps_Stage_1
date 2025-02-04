# Classify Number API

This is a simple backend API built with **Node.js**, **Express**, and **Axios**. It provides an endpoint that classifies numbers based on various mathematical properties and fetches fun facts about them.

## Author

`Yusuf Mustapha Opeyemi`
`[mustopha.yusufope@gmail.com]`

## Features:
- **Prime number check**
- **Perfect number check**
- **Armstrong number check**
- **Even/Odd classification**
- **Fun fact about the number** (fetched from Numbers API)

## API Endpoint:

### `GET /api/classify-number`
Classifies a number and returns its properties.

#### Query Parameters:
- `number`: The number you want to classify (must be a valid integer).

#### Example Request:
- `GET https://dev-ops-stage-1-g0r68n0zd-mustapha-opeyemis-projects.vercel.app/api/classify-number?number=28`


#### Example Response:
```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 10,
  "fun_fact": "28 is a perfect number."
}
```


#### Installation:
- git clone `https://github.com/Gadoskey/DevOps_Stage_1.git`


#### Navigate into proect directory:
- `cd api`

#### Install Dependencies:
- `npm install`


#### Run the Server Locally:
- `node server.js`
- The API will be available at `http://localhost:3000/api/classify-number?number=<input_number>.`


#### Deployment
This project is deployed on Vercel and can be accessed live at: `https://dev-ops-stage-1-nbtw582ko-mustapha-opeyemis-projects.vercel.app/api/classify-number?number=<input_number>`



#### License
This project is open source.
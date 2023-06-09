## Front End

The FE folder is the Front End part of the challenge:

The idea was to use Next 13, React 18 and TypeScript to implement the solution

following the criteria of the challenge to create and test the application:

tests based on the following criteria of (@irysan):

- Display a list of asteroids
- Search by a range of dates
- See the detail of the asteroids by clicking on one of the items
- Sort the asteroids by name

to run the project, just follow the steps:

```bash
cd FE/

npm install

npm run dev

```

to run the tests:

```bash

npm run test

```

## Back End

The BE folder is the Back End part of the challenge:

to run the project, just follow the steps:

Create a file .env inside the BE folder with the following:

- PORT=3333
- BASE_API_URL="https://api.nasa.gov/neo/rest/v1/feed"
- NASA_API_KEY="DEMO_KEY"

```bash
cd BE/

npm install

npm run dev

```

## SQL/Postgres Question

```bash

SELECT u.name, u.email, SUM(p.price * o.quantity) AS total_amount_spent
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN products p ON o.product_id = p.id
WHERE p.category = 'Electronics'
GROUP BY u.id, u.name, u.email
HAVING COUNT(DISTINCT o.id) >= 3
   AND total_amount_spent > 1000
ORDER BY total_amount_spent DESC;

```

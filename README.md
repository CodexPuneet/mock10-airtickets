# Air Tickets Backend

# SignUp

POST - api/user/register - This endpoint should allow users to register.
Body : { "name : "name", "email" : "email", "password" : "password" }

Result : Registration successfull

 # LogIn
POST - api/user/login - This endpoint should allow users to login.
Body : { "email" : "email", "password" : "password" }

Result : { "msg": "Login successful", "token": "token" }

After Login Pass token in headers.authencation to book the tickets

# Flights Routes

GET - /flight/flights - This endpoint should return a list of all available flights.
Result : Flight Array

GET - api/flight/flights/:id - This endpoint should return the details of a specific flight identified by its ID.
Result : Single Flight

POST - api/flight/flights - This endpoint should allow users to add new flights to the system.
Body : { "airline": "airline", "flightNo": "flightNo", "departure": "departure", "arrival": "arrival", "departureTime": "departureTime", "arrivalTime": "arrivalTime", "seats": 50, "price": 9999 }

Result : Flights Added successfull

PATCH - api/flight/flights/:id - This endpoint should allow users to update the details of a specific flight identified by its ID.
Body : { "seats": 67, "price": 13834 }

Result : Flights Updated successfull

DELETE - api/flightapi/flights/:id - This endpoint should allow users to delete a specific flight identified by its ID.
Result : Flights Deleted successfull

# Booking Routes

POST - api/booking - This endpoint should allow users to book flights with flight_id no.
Body : { "user_id":"_id","flight_id":"_id" }
Result : Flight_id & User_id

GET - api/booking/dashboard - This point should list all the bookings so far with the user and flight details.
Result : Booking Array

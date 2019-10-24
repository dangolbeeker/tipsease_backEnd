# backEnd
Backend repository


`https://tipsease-msm.herokuapp.com` is your base route.

//Customer Links
(GET `/api/customers`)- Grabbs a list of all customers if logged in.


(GET `/api/customers/:id`)- Grabbs customer by their ID if logged in.


(DELETE `/api/customers/:id`)- Deletes customer by their ID if logged in.


(POST `/api/customers/signup`)- allows a user to register as a "customer" for the site. It requires the user to sign in with ```{
    "username", -must be unique
    "password",
    "FirstName",
    "LastName",
    "email", -must have an @---.com
    "customerOrService" -boolean, true or false
}```


(POST `/api/customers/login`)- allows the customer to "login" and recive a token for authentication. It requires the customers registered information ```{
    "username", -must be a registered customers unique username
    "password" -must be the same registered customers password
}```


(PUT `api/customers/:id/tip`)- allows users to give a tip to a Service Worker IF they have the correct `username` and `company` name fields. The input for the tip is represented as `balance` inside the request ```{
    "username": "testing1",
	"company": "Red Robin",
	"balance": 66   <------------tip $ ammount
}``` This will update the Service Workers current balance with what they were previously tipped.




//Service Worker Links
(GET `/api/serviceworker/`)- Grabbs a list of all Service Workers if logged in.


(GET `/api/serviceworker/:id`)- Grabbs Service Workers by their ID if logged in.


(DELETE `/api/serviceworker/:id`)- Deletes Service Workers by their ID if logged in.


(POST `/api/serviceworker/signup`)- allows a user to register as a "Service Worker" for the site. It requires the user to sign in with ```{
    "username", -must be unique
    "password", -string
    "FirstName", -string
    "LastName", -string
    "email", -must have an @---.com
    "customerOrService", -boolean, true or false
    "tagline", -string
    "company", -string
    "YearsAtCompany", -integer
    "balance" -integer--------------->(right now this is required, but I'm fixing that)
}```


(POST `/api/serviceworker/login`)- allows the Service Workers to "login" and recive a token for authentication. It requires the Service Workers registered information ```{
    "username", -must be a registered Service Workers unique username
    "password" -must be the same registered Service Workers password
}```


(PUT `api/serviceworker/:id/tip`)- allows users to give a tip to a Service Worker IF they have the correct `username` and `company` name fields. The input for the tip is represented as `balance` inside the request ```{
    "username": "testing1",
	"company": "Red Robin",
	"balance": 66   <------------tip $ ammount
}``` This will update the Service Workers current balance with what they were previously tipped.
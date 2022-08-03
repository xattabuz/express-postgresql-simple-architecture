# Node.js + Express.js + Clean Architecture + JWT

This is the spike code to architect node.js, express.js using clean architecture and PostgreSQL database.

## Environment
1. Create .env file on your project.
Here is multiple environment variable that need to be setup:
*   PG_USER
*   PG_PASS
*   PG_HOST
*   PG_PORT
*   PG_DB
*   PORT
*   JWT_SECRET

## Installation
1. Install nodemon globally:
`npm install nodemon -g`
2. Install dependencies:
`npm install`
3. Run application:
`npm run start`
4. Run application development:
`npm run start:dev`

## Routes
### Login
Route: `/api/auth/login` Method: `POST`
Request:
```json
{
    "user_phone_number": "998992312433",
    "user_password": "admin1"
}
```
Response:
```json
{
    "statusCode": 200,
    "message": "User successfully logged!",
    "data": {
        "user_id": "6fb12135-aaba-4180-83fc-848501fd71f7",
        "user_first_name": "Diyorbek",
        "user_last_name": "Rustamjonov",
        "user_phone_number": "998992312433",
        "user_role_id": "7b82acc3-fb64-4eb4-be55-dbbdaeacc19a",
        "user_role_name": "admin",
        "user_profile_image": "http://192.168.1.18:5000/uploads/users/1659504640027-5.jpg",
        "user_created_at": "2022-08-03T05:30:40.106Z",
        "user_updated_at": null,
        "user_deleted_at": null
    },
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNmZiMTIxMzUtYWFiYS00MTgwLTgzZmMtODQ4NTAxZmQ3MWY3IiwidXNlcl9yb2xlX2lkIjpudWxsLCJpYXQiOjE2NTk1MDQ2NDAsImV4cCI6MTY1OTU5MTA0MH0.ag6J20xrhwE_ZonGXZNCdyyvQmF58jVIdqgxDWBfSbE"
}
```

## How it Works?
First you should create account by sign-up, then you will receive code and id. Write the id in the validate-code route into headers and send code with request body.
If you are in login, you will receive the code and you should do the same.
To change number or resend code also the same.
When your code and id is correct you will get access token.
## Concept

Our weather App use APIs and content essential climate variables for any location.
You are able to get information about current weather, hourly forecast for 24 hours, daily forecast for 7 days.
The App is designed for mobile and desktop devices.

Here you can find weather data:
- 	Temperature, Celsius degrees
- 	Feels like temperature. This temperature parameter accounts for the human perception of weather, Celsius degrees
- 	Min and Max daily temperature, Celsius degrees
- 	Cloudiness, %
- 	Current UV index
- 	Atmospheric pressure on the sea level, hPa
- 	Humidity, %
- 	Wind speed, km/h
- 	Wind direction
- 	Probability of precipitation, %
- 	Sunrise time, h
- 	Sunset time, h
- 	Moonrise time, h. The time of when the moon rises for this day
- 	Moonset time, h. The time of when the moon sets for this day
- 	Moon phase

#The link on the App design :  
- https://www.figma.com/file/drV89b86DLvdZDdF9FVt2y/newWeatherApp-design?node-id=0%3A1

#The API source link: 
- https://openweathermap.org/

#Our group of web-developers :
- 	Vitalii Yurchenko 
- 	Olena Shuliakovska
- 	Olga Dobrovolska
- 	Valeria Kurylko


This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated

# anote-app

A MEAN web application for creating notes and lists.

Node.js with Express.js backend, Angular frontend, and MongoDB database.


## Running anote-app

### Clone git
```
git clone https://github.com/alanypz/anote-app.git
```

### Install dependencies
```
cd anote-app
npm install
```

### Build Angular app
You only need to build if changes were made to the Angular project. Using Angular-CLI:

```
cd app
ng build
```

### Verify database
This project's database is being hosted for free by mLab. If you want to change the database host or run a local instance, you need to change ```/config/database.js```.

### Verify port
This project is being hosted by Heroku. The ```port``` setting in ```app.js``` will need to be changed if hosting through another service.

No changes are necessary if you are running locally.

### Run
```
npm start
```

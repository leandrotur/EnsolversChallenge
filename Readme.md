## Steps to Setup todo app through docker
Prerequisites: 

1. Docker: https://www.docker.com/products/docker-desktop

2. Maven: https://maven.apache.org/download.cgi

Installation:
windows:
run: install.cmd ##'this will call the docker-compose.yml' to build 3 containers (frontend, backend, db)##
Linux/Mac
run: "docker-compose up" from docker client inside "latest" root folder


Manual installation without docker:

## Steps to Setup the Spring Boot Back end app (restful-web-services)

1. **Clone the application**

	```bash
	git clone https://github.com/leandrotur/EnsolversChallenge.git
	cd restful-web-services
	```

3. **Change  username and password to login from the frontend**

	+ open `src/main/resources/application.properties` file.

	+ change `spring.security.user.name` and `spring.security.user.password` properties to login once frontend is confifured in below steps
	
4. **Change MySQL username and password as per your MySQL installation (default db= sandbox)**

	+ open `src/main/resources/application.yml` file.

	+ change `username` and `password` properties as per your mysql installation
		  

5. **Run the app**

	You can run the spring boot app by typing the following command -

	```bash
	mvn spring-boot:run
	```

	The server will start on port 8080.
	
	```

## Steps to Setup the React Front end app (frontend)

First go to the `frontend` folder -

```bash
cd frontend
```

Then type the following command to install the dependencies and start the application -

```bash
npm install && npm start
```

The front-end server will start on port `4200`.

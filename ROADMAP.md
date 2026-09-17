# F1 Live Dashboard — Development Roadmap

## Project Goal

Build a full-stack F1 live timing and analytics dashboard using the MERN stack.

The project should progressively develop from a simple React application into a system involving:

- React frontend
- Node.js + Express backend
- MongoDB + Mongoose
- External F1 API
- REST APIs
- Authentication
- Real-time communication
- WebSockets
- Data processing
- Caching
- Testing
- Docker
- CI/CD

The objective is not merely to build an F1 website. The objective is to understand how a real full-stack application moves, processes, stores, and displays data.

---

# Architecture

The final architecture should approximately become:

```text
                    ┌─────────────────┐
                    │    F1 API       │
                    │ External Source │
                    └────────┬────────┘
                             │
                             ↓
                    ┌─────────────────┐
                    │ Node + Express  │
                    │    Backend      │
                    └───────┬─┬───────┘
                            │ │
                   ┌────────┘ └─────────┐
                   ↓                    ↓
            ┌──────────────┐     ┌─────────────┐
            │   MongoDB    │     │   WebSocket │
            │  + Mongoose  │     │    Server   │
            └──────┬───────┘     └──────┬──────┘
                   │                    │
                   └────────┬───────────┘
                            ↓
                    ┌─────────────────┐
                    │      React      │
                    │    Frontend     │
                    └─────────────────┘
```

# Development Phases

## Phase 1 — Project Setup and Frontend Foundation

Start by building the dashboard entirely on the frontend using React and mock data. Create the basic dashboard layout and components for the current race, circuit, lap number, race status, driver leaderboard, driver position, gap, tyre compound, and last lap time. Use hardcoded JavaScript data initially. The purpose of this phase is to become comfortable with React components, JSX, props, state, arrays, `.map()`, conditional rendering, event handling, and basic frontend organisation. Do not use an API, database, or backend yet. The phase is complete when you can build and understand a functioning F1 dashboard using only local data.

## Phase 2 — Build the Node.js and Express Backend

Create a separate Node.js and Express backend. Start with a simple health endpoint such as `GET /api/health` that returns a JSON response confirming that the server is running. Then create simple endpoints such as `GET /api/drivers` and `GET /api/races`. At this stage, the backend can still use hardcoded data. Learn what HTTP requests and responses are, how REST APIs work, how routes work, how JSON is exchanged, what middleware does, and how HTTP status codes are used. The phase is complete when you have a functioning Express server that can provide data independently of React.

## Phase 3 — Connect React to the Express API

Remove the driver and race data from React and make the frontend obtain it from your Express backend. React should send requests such as `GET /api/drivers`, Express should process the request and return JSON, and React should use the response to render the dashboard. Add loading, error, and empty states. Learn `fetch()` or Axios, promises, `async/await`, asynchronous programming, CORS, and the basic client-server relationship. The phase is complete when your React application no longer relies on hardcoded backend data and communicates properly with your Express API.

## Phase 4 — Add MongoDB and Mongoose

Introduce MongoDB as the persistent database. Create models for entities such as drivers, teams, circuits, races, and sessions. Move the data that was previously hardcoded into MongoDB and make Express retrieve it through Mongoose. Learn how databases, collections, documents, schemas, models, queries, CRUD operations, references, and database connections work. The resulting flow should be React → Express → Mongoose → MongoDB and back again. The phase is complete when the dashboard obtains persistent data from MongoDB through your backend.

## Phase 5 — Organise the Backend Properly

Refactor the backend so that everything is no longer contained inside `server.js`. Separate routes, controllers, services, models, middleware, and configuration. A request should follow a clear structure such as Route → Controller → Service → Database or External API. Learn separation of concerns, reusable code, middleware, error handling, and basic backend architecture. Do not over-engineer this phase; the purpose is to understand why different parts of the backend have different responsibilities. The phase is complete when you can explain what each backend layer does and why it exists.

## Phase 6 — Integrate an External F1 API

Connect the backend to a real F1 data provider. Do not make React communicate directly with the external F1 API. Instead, React should communicate with your Express API, and Express should communicate with the external F1 API. Learn how to read API documentation, identify endpoints, use query parameters, send external HTTP requests, handle API responses and errors, deal with rate limits, and transform external data into a format appropriate for your application. For example, your backend might request raw race data from the F1 provider, process it, and return a cleaner response to React. The phase is complete when your dashboard displays genuine F1 data through your own backend API.

## Phase 7 — Build the Historical F1 Database

Expand the application so that it stores useful historical F1 data rather than requesting everything from the external API every time. Store seasons, races, circuits, drivers, teams, results, qualifying results, lap times, pit stops, and tyre information where the chosen data source supports them. Create endpoints for browsing seasons, races, drivers, teams, and results. Introduce filtering, sorting, pagination, and more sophisticated database queries. Learn how to design API resources and database structures around the actual requirements of an application. The phase is complete when users can browse historical F1 information through your application.

## Phase 8 — Add F1 Analytics

Stop merely displaying data and start deriving information from it. Add driver comparisons, average lap times, race pace, qualifying versus race performance, position progression, fastest laps, pit-stop analysis, tyre strategy, and championship progression. Create charts for lap times, positions, points, and tyre strategies. Learn data aggregation, data transformation, more complex database queries, and frontend data visualisation. The phase is complete when the application provides analysis that is calculated from the underlying data rather than simply reproducing information from the F1 API.

## Phase 9 — Add Authentication and User Accounts

Introduce actual users. Allow users to register, log in, log out, view their profile, save favourite drivers and teams, and store dashboard preferences. Implement authentication endpoints such as `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/logout`, and `GET /api/auth/me`. Learn authentication, authorization, password hashing, JWT or session concepts, protected frontend routes, protected backend routes, and authentication middleware. The phase is complete when users have separate accounts and protected resources cannot be accessed without proper authorization.

## Phase 10 — Introduce Live F1 Data

Turn the application from a historical dashboard into a live race dashboard. Display information such as the current lap, driver positions, gaps, lap times, sector times, tyre compounds, pit stops, race-control messages, and safety-car or VSC status where the data source provides them. Initially, use polling if necessary: React requests current race data at regular intervals through your backend. Learn how live data differs from ordinary API requests, how polling works, how to handle stale data, how to deal with incomplete information, and how to handle external API failures. The phase is complete when the dashboard can update during a live session without requiring the user to manually refresh the page.

## Phase 11 — Add WebSockets and Real-Time Communication

Once polling works, introduce WebSockets so that the server can push changes to connected clients. The architecture becomes F1 data source → backend → WebSocket → React. When a driver changes position or a new lap is completed, the backend sends an event to the connected frontend and React updates its state without making another ordinary HTTP request. Learn persistent connections, WebSocket events, broadcasting, connection and disconnection handling, real-time state, and the difference between request-response communication and event-driven communication. The phase is complete when important race information updates automatically in the browser through real-time events.

## Phase 12 — Build a Race State Engine

Make the backend understand the race as a changing state rather than treating every piece of data as an isolated response. Maintain information such as the current lap, total laps, race status, driver positions, tyre compounds, safety-car status, and other relevant session information. Process events such as `LAP_COMPLETED`, `POSITION_CHANGED`, `PIT_STOP`, `SAFETY_CAR`, `VSC`, `RED_FLAG`, `SESSION_RESUMED`, and `CHEQUERED_FLAG`. Learn state management, state machines, event-driven programming, business logic, and state transitions. The phase is complete when the backend can maintain a coherent representation of the current race.

## Phase 13 — Add Redis and Caching

Introduce Redis when the application begins making repeated requests for the same data or when the external API's limits become a problem. The backend should first check the cache, return cached data when appropriate, and only request fresh data from the external F1 API when necessary. Learn caching, TTL, cache invalidation, performance optimisation, and external API rate-limit management. The phase is complete when the backend can intelligently avoid unnecessary external API requests while still providing reasonably fresh information.

## Phase 14 — Security and API Protection

Secure the application against common problems. Add rate limiting, input validation, authorization checks, secure headers, appropriate CORS configuration, request-size limits, secure environment variables, and proper error handling. Deliberately test the system by attempting to access another user's data, modify protected resources, send malformed input, and spam endpoints with excessive requests. Learn the basic security principles behind authentication, authorization, validation, rate limiting, and common web vulnerabilities. The phase is complete when unauthorized, invalid, and abusive requests are handled correctly.

## Phase 15 — Testing

Introduce automated testing so that you no longer depend entirely on manually clicking through the application. Test backend API endpoints, authentication, database operations, race logic, authorization, important React components, forms, loading states, and error states. Create at least one complete end-to-end flow such as registration → login → view race → view driver → save favourite → receive live update. Learn unit testing, integration testing, API testing, mocking, and end-to-end testing. The phase is complete when important application behaviour is automatically verified.

## Phase 16 — Docker

Containerise the application so that the required services can be run consistently. Create containers for the frontend, Node/Express backend, MongoDB, and Redis where appropriate. Use Docker Compose to manage the local environment so that the project can be started with a command such as `docker compose up`. Learn Docker images, containers, Dockerfiles, Docker Compose, ports, volumes, networks, and environment configuration. The phase is complete when another developer can clone the project and run the required environment without manually configuring every dependency.

## Phase 17 — CI/CD

Create a GitHub Actions pipeline that automatically installs dependencies, runs linting, executes tests, builds the application, and eventually deploys it. Learn continuous integration, continuous delivery, automated testing, build pipelines, deployment, environment variables, and production configuration. The phase is complete when significant changes pushed to the repository automatically pass through your development pipeline.

## Phase 18 — Production Deployment

Deploy the frontend, backend, database, and supporting services to an appropriate hosting environment. Configure production environment variables, HTTPS, database access, CORS, API URLs, logging, error handling, and other production settings. The phase is complete when the application is publicly accessible and behaves correctly outside your local development environment.

## Phase 19 — Documentation and Portfolio Preparation

Turn the finished application into a professional portfolio project. Write a README explaining what the application does, its architecture, technologies, database structure, API structure, authentication, real-time architecture, caching, testing, deployment, and important engineering decisions. Include an architecture diagram, database diagram, API documentation, screenshots, a demonstration link, and setup instructions. Document difficult problems you encountered and explain how you solved them. The final repository should demonstrate not only that you can build the application, but that you understand why its components exist and how data travels through the system.

# Final Development Progression

The project should grow in this order:

React + Mock Data

→ React + Express

→ React ↔ Express

→ React ↔ Express ↔ MongoDB

→ Proper Backend Architecture

→ External F1 API

→ Historical F1 Database

→ F1 Analytics

→ Authentication

→ Live F1 Data

→ WebSockets

→ Race State Engine

→ Redis/Caching

→ Security

→ Testing

→ Docker

→ CI/CD

→ Production Deployment

→ Documentation

The core learning objective is to understand the complete journey of data through a full-stack system:

External F1 Data → Backend → Processing → Database/Cache → API → Frontend → User

and eventually:

Live F1 Event → Backend → State Change → WebSocket → React State → Live UI Update.

Do not implement the entire final architecture at the beginning. Each phase should be added only after the previous phase works and is understood. When you encounter a problem, research that specific problem, understand the solution, implement it, test it, and then continue. The purpose of the project is not to maximise the number of technologies used; it is to progressively understand how a real full-stack application is designed, built, connected, secured, tested, and deployed.

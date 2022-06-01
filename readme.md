# Welcome to my Login-logout App

## Installation and Usage

1. Clone or fork the repo and cd into it
2. Run the start.sh script `bash _scripts/start.sh` to launch the server
3. Open live server by copying path of index.html to a searchbar of your choice (google)

The port for the api is 3000

- To stop the server and remove containers use the stop.sh script `bash _scripts/stop.sh`
- To completely remove containers/images/volumes and do a clean up use the teardown.sh script `bash _scripts/teardown.sh`

### Dependencies

There is a description for what each dependency is for below but the DevDepenencies are only required for development purposes.

Cors: Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts. We use it as a middlware and enable cors by using the line `app.use(cors());`.

If you make a request to your app, you will notice a header being returned:

- `Access-Control-Allow-Origin: *`

The Access-Control-Allow-Origin header determines which origins are allowed to access server resources over CORS (the \* wildcard allows access from any origin).

##### DevDependencies

- nodemon

##### Dependencies

- cors
- express
- pg

#[macro_use]
extern crate rocket;
extern crate rocket_cors;

use rocket::fs::{relative, FileServer};
use rocket::http::Method;
use rocket_cors::{AllowedHeaders, AllowedOrigins, Cors, CorsOptions};

fn make_cors() -> Cors {
    let allowed_origins =
        AllowedOrigins::some_exact(&["http://localhost:3000", "http://127.0.0.1:3000"]);
    CorsOptions {
        allowed_origins,
        allowed_methods: vec![Method::Get].into_iter().map(From::from).collect(),
        allowed_headers: AllowedHeaders::some(&[
            "Authorization",
            "Accept",
            "Access-Control-Allow-Origin",
        ]),
        allow_credentials: true,
        ..Default::default()
    }
    .to_cors()
    .expect("error while building CORS")
}

#[get("/hello")]
fn hello() -> &'static str {
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![hello])
        .mount("/", FileServer::from(relative!("../frontend/build")))
        .attach(make_cors())
}

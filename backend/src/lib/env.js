import dotenv from "dotenv";

dotenv.config({quiet: true});    // quiets the unnecessary warnings (like injecting env(3) from .env)

export const ENV={
    PORT:process.env.PORT,
    DB_URL:process.env.DB_URL
}
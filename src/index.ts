import dotenv from 'dotenv';
import { App } from "./server";

dotenv.config()

App.listen(3333, () => {
    console.info("this server is running on port 3333.")
})
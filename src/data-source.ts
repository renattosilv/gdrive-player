import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions"


const configData: SqliteConnectionOptions = {
    type: "sqlite",
    database: "./",
    entities: [User],
    migrations: [],
    subscribers: [],
}

export const AppDataSource = new DataSource(configData)

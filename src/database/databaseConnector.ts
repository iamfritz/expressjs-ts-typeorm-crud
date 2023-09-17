import { readFileSync } from "fs"
import path from "path"
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Accounts } from "./entities/Accounts"
import { Settings } from "./entities/Settings"
import { Users } from "./entities/Users"
import { Task } from "./entities/Task"


let entities = [
    Accounts,
    Settings,
    Users,
    Task,
]

let dbSettings: any = {
    name: `default`,
    type: `mongodb`,
    port: parseInt(process.env.DB_PORT || "27017"),
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSL === 'true' || false,
    readPreference: "secondaryPreferred",
    retryWrites: false,
    logging: "all",
    authSource: process.env.DB_AUTH_SOURCE || 'admin',
    entities: entities,
    subscribers: [],
    migrations: [],
};
console.log(dbSettings);
if (process.env.DB_SSL_CA) dbSettings.sslCA = [readFileSync(path.resolve(process.env.DB_SSL_CA))];
if (process.env.DB_REPLICA_SET) dbSettings.replicaSet = process.env.DB_REPLICA_SET;

export const db = new DataSource(dbSettings);

db.initialize()
    .then(() => { console.log(`Connected to DB ${process.env.DB_HOST}:${process.env.DB_PORT} as ${process.env.DB_USERNAME}`) })
    .catch((error) => console.log(error))

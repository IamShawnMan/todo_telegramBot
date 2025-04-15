import { connect } from "mongoose";

const db_url = process.env.DB_URL;

export async function connectionDB() {
  try {
    await connect(db_url);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("DB connection failed");
    process.exit(1);
  }
}

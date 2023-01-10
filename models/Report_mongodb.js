// Kleines Beispiel für ein mögliches Model mit dem nativen MongoDB-Treiber.
import db from "../lib/mongodb.js";
import { ObjectId } from "mongodb";

const collection = db.collection("reports");

export const getAll = async () => {
    const reports = await collection.find().toArray();
    return reports;
};

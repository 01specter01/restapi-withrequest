import { Router } from "express";
import * as customers from "../controllers/customers.js";

const router = Router();

router.get("/", customers.getAll);
router.post("/", customers.create);

export default router;

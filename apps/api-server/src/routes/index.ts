import { Router, type IRouter } from "express";
import healthRouter from "./health";
import jambRouter from "./jamb";

const router: IRouter = Router();

router.use(healthRouter);
router.use(jambRouter);

export default router;

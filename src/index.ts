// Required External Modules
import * as dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
dotenv.config();

// App Variables
if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
export const app = express();

// App Configuration
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  next();
});

// Server Activation
app.get("/hi", (req, res) => {
  console.log(req.body);
  return res.json({ msg: "hey" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { router } from "./presentation/routes";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} | PID: ${process.pid}`);
});

// Graceful shutdown function
const shutdown = () => {
  console.log(`Server ${process.pid} is shutting down...`);
  server.close(() => {
    console.log(`Server ${process.pid} has been shut down.`);
    process.exit(0);
  });
};

// Capturing system signals for graceful shutdown
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

export { server };

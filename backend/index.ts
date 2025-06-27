import express, { NextFunction, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import { envs } from "./config/envs";
import { postController } from "./src/posts/routes/posts.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors()
);

const PORT = envs.PORT || 3000;

const __dirname = path.resolve();

app.use("/posts", postController);


app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.all("/{*any}", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Error: " + err.message);
    res.status(err.status || 500).json({
        error: {
            message: err.message || "Error interno",
        },
    });
});

app.listen(PORT, async () => {
    console.log(`Running on port ${PORT} `);
});


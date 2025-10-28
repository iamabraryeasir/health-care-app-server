import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

const app: Application = express();
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

// parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// basic api home routes
app.get("/", (req: Request, res: Response) => {
    res.send({
        message: "Welcome to Healthcare Application API",
        developer: {
            name: "Abrar Yeasir",
            linkedin: "https://www.linkedin.com/in/iamabraryeasir",
        },
        time: new Date().toLocaleTimeString(),
    });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;

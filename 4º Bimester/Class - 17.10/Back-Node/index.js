import express from "express";
import rotasUsuario from "./rotas/rotasUsuario.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", rotasUsuario);

app.listen(8081);
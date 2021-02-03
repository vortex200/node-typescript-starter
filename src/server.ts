import path from "path";

import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const PORT = process.env.PORT || 5000;

import app from "./app";

app.listen(PORT, () => console.log(`Server listening on port ${PORT} 🚀`));

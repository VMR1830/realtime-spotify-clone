import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors";
import fs from "fs";
import { createServer } from "http";
import cron from "node-cron";
import { initializeSocket } from "./lib/socket.js";
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5000;

const httpServer = createServer(app);
initializeSocket(httpServer);
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

app.use(express.json());
app.use(clerkMiddleware());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: path.join(__dirname, "tmp"),
		createParentPath: true,
		limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
	})
);

// Clean up /tmp every hour
const tempDir = path.join(process.cwd(), "tmp");
cron.schedule("0 * * * *", () => {
	if (fs.existsSync(tempDir)) {
		fs.readdir(tempDir, (err, files) => {
			if (err) return console.log("Cleanup error:", err);
			for (const file of files) {
				fs.unlink(path.join(tempDir, file), () => {});
			}
		});
	}
});

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
	});
}
// Global error handler
app.use((err, req, res, next) => {
	res.status(500).json({
		message:
			process.env.NODE_ENV === "production"
				? "Internal server error"
				: err.message,
	});
});

// Start server with safe error handling
httpServer
	.listen(PORT)
	.on("listening", () => {
		console.log("✅ Server is running on port " + PORT);
		connectDB();
	})
	.on("error", (err) => {
		if (err.code === "EADDRINUSE") {
			console.error(`❌ Port ${PORT} is already in use. Try killing the process or change the port.`);
		} else {
			console.error("❌ Server Error:", err);
		}
		process.exit(1);
	
	});
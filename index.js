import http from "http";
import express from "express";
import { spawn } from 'child_process';
import path from "path";
import { fileURLToPath } from 'url';
import { Server as SocketIO } from "socket.io";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new SocketIO(server);

const options = [
    '-loglevel', 'error',
    '-i',
    '-',
    '-c:v', 'libx264',
    '-preset', 'ultrafast',
    '-tune', 'zerolatency',
    '-r', '25',
    '-g', '50',
    '-keyint_min', '25',
    '-crf', '25',
    '-pix_fmt', 'yuv420p',
    '-sc_threshold', '0',
    '-profile:v', 'main',
    '-level', '3.1',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-ar', '44100',
    '-f', 'flv',
    'rtmp://a.rtmp.youtube.com/live2/',
];

const ffmpegPath = 'C:/ffmpeg/ffmpeg.exe';
const ffmpegProcess = spawn(ffmpegPath, options);

ffmpegProcess.stdout.on('data', (data) => {
    console.log(`ffmpeg stdout: ${data}`);
});

ffmpegProcess.stderr.on('data', (data) => {
    console.error(`ffmpeg stderr: ${data}`);
});

ffmpegProcess.on('close', (code) => {
    console.log(`ffmpeg process exited with code ${code}`);
});

ffmpegProcess.on('error', (err) => {
    console.error(`Failed to start ffmpeg process: ${err.message}`);
});

app.use(express.static(path.resolve(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('Socket Connected', socket.id);
});

server.listen(3000, () => {
    console.log(`HTTP server is running on PORT 3000`);
});

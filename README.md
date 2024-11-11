# Stream Yard Clone

A robust streaming application built using Node.js and FFmpeg for real-time video streaming and encoding. This application sets up a simple HTTP server to handle video streaming and outputs to an RTMP server (such as YouTube Live).

## Features

- Real-time video streaming
- Video encoding using FFmpeg with adjustable options
- Socket-based communication for better control and connection

## Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **FFmpeg** (properly installed and available in your system's PATH)
- **Git** (for version control)

## Installation Guide

Follow these steps to install and run the application locally:

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/KrishnaD098/Stream-Yard-Clone.git
cd Stream-Yard-Clone
```
## 2. Install Dependencies

Install the necessary npm packages by running:

```bash
npm install
```
## 3. Configure FFmpeg Path (Windows Only)

Ensure that `ffmpeg` is installed and added to your system's PATH. If you're using Windows, follow these steps:

1. Download FFmpeg and extract it to a folder (e.g., `C:\ffmpeg`).
2. Add the `bin` directory (e.g., `C:\ffmpeg\bin`) to your system's PATH:
   - Open **Control Panel** > **System and Security** > **System** > **Advanced system settings**.
   - Click on **Environment Variables** and add the path to the `Path` variable.

## 4. Running the Application

Start the server using the following command:

```bash
npm start
```
## Development with Auto-Reloading

For development with auto-reloading, use:

```bash
npx nodemon index.js
```
You should see the output indicating the server is running on `PORT 3000`:

HTTP server is running on PORT 3000
Socket Connected <ID>

## 5. How to Use

- Access the server by navigating to [http://localhost:3000](http://localhost:3000) in your browser.
- Video data is processed through FFmpeg and streamed to your specified RTMP server.
- Configure the RTMP output URL within your `index.js` or respective configuration file as needed.

## 6. Common Errors & Solutions

**Failed to start ffmpeg process: spawn ... ENOENT**

- Ensure that `ffmpeg` is installed and correctly added to your system's PATH.

**Updates were rejected due to non-fast-forward**

- If you're facing issues pushing changes, use the following commands:

```bash
git pull origin main --rebase
git push origin main
```
## Code Overview

- **index.js**: The main entry point for the Node.js server, handling connections and FFmpeg operations.
- **FFmpeg Options**: Located in the code to configure streaming and encoding with specific options for optimal performance.


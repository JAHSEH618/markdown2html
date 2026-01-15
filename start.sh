#!/bin/bash

# Configuration
PORT=8888
PID_FILE="server.pid"

# Check if already running
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p $PID > /dev/null; then
        echo "Server is already running on PID $PID"
        exit 1
    else
        # Stale PID file
        rm "$PID_FILE"
    fi
fi

# Start Server (using Python 3)
echo "Starting Markdown Editor on http://localhost:$PORT..."
nohup python3 -m http.server $PORT > server.log 2>&1 &
NEW_PID=$!

# Save PID
echo $NEW_PID > "$PID_FILE"
echo "Server started with PID $NEW_PID"
echo "Logs are being written to server.log"

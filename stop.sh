#!/bin/bash

PID_FILE="server.pid"

if [ ! -f "$PID_FILE" ]; then
    echo "No server PID file found. Is the server running?"
    exit 1
fi

PID=$(cat "$PID_FILE")

if ps -p $PID > /dev/null; then
    echo "Stopping server (PID $PID)..."
    kill $PID
    rm "$PID_FILE"
    echo "Server stopped."
else
    echo "Process $PID not found. Removing stale PID file."
    rm "$PID_FILE"
fi

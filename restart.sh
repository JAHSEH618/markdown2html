#!/bin/bash

# Ensure scripts are executable
chmod +x stop.sh start.sh

echo "Restarting server..."
./stop.sh
sleep 1
./start.sh

#!/bin/bash
cd /home/kavia/workspace/code-generation/coffee-order-hub-25437-25473/coffee_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


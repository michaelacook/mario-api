#!/bin/bash

# This is a test script to install dependencies and deploy the API in
# a test cloud environment.

sudo apt update -y
sudo apt upgrade -y

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source .bashrc

nvm install 20.6.1
npm install -y
npm update --force
npm audit fix --force
npm run start:dev
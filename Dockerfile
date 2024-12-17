From node
workdir /src
copy . .
run npm install express
expose 4000
cmd server.js

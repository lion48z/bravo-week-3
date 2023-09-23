const config = {
  appName: "Monkey Business",
  port: 3456789,
  security: { 
    encryption: "AES1600",
    apiKey: "banana"
},
  username:"monkey68@yahoo.com",
  password: "bananaHammock"
};


const {
    appName,
    port,
    security: { encryption, apiKey },
    username,
    password,
} = config;

console.log(`${appName} ${port} ${encryption} ${apiKey} ${username} ${password}`);
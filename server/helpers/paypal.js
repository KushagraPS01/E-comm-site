const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "",
  client_id: "AVzM9fM6eB4xHmbp5ysx-mbir33wMPr5iQiCGxDQXYg4FupRGNlVQCbNYgYA7OaNk0vDWrYVp-hmam3b",
  client_secret: "EOMXUh-irZbOZqmMQi34hvO1QOvzKWl4rDJu5NsusPpw7r5bK6Iumct541c4t5IN4GE6o0blBhVS4oT8",
});

module.exports = paypal;
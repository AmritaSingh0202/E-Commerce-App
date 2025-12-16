const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZQPH1xhXCOctT2Vka5PrVzFQTC2k53ZAxexAlN0WUtETl2CLW05UE4714aGrA-C4MihwBj5hlsPDWBZ",
  client_secret: "EH8qXdIswgqApc_dzQwXmG7QDKbzb5Y3audg-B1U3JikzgJvwbUh4JdYSEXYV1lYuNvkQSF83G9CSiLz",
});

module.exports = paypal;


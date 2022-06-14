require("dotenv").config();
const { env } = process;
module.exports = {
  URL: env.URL,
};

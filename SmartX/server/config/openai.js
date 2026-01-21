const openai = require("openai");
const client = new openai.OpenAI({apiKey:process.env.openAi_key1});
module.exports = client;
const express = require("express");
const cors = require("cors");
bodyParser = require("body-parser");
const app = express();

app.use(
  cors({
    origin: "https://complai.de/",
  })
);

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.route("/register").get((req, res) => {
  // check static beta invitation code
  const { email, code } = req.body;

  if (code === "SOMECODE") {
    res.status(200).end(true);
  } else {
    res.status(403).end(false);
  }
});

var companies = [];

class Company {
  constructor(email, nace, region, size, name) {
    this.email = email;
    this.nace = nace;
    this.region = region;
    this.size = size;
    this.name = name;
  }
}

// Put new company
app.route("/company").post((req, res) => {
  const { email, code, nace, region, size, name } = req.body;

  if (code !== "SOMECODE") {
    res.status(403).end(false);
    return;
  }

  var id = companies.push(new Company(email, nace, region, size, name));
  res.status(200).end(id);
});

// Poll notifications for company
app.route("/interpretLaw").post((req, res) => {
  const { id, lawtext } = req.body;
  getResponse(lawtext, id, res);
});

app.listen(8543, () => {
  console.log("server is runing at port 8543");
});

async function getResponse(lawtext, id, res) {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const company = companies[id];
  const prompt =
    "Betriff eine Firma mit NACE code " +
    company.nace +
    " das folgende Gesetzt? Dann, und nur dann, geben Sie in der nächsten Zeile ausführliche Empfehlungen an Unternehmen, die diese Dienste anbieten, zum Umgang mit diesem Gesetz:\n" +
    lawtext;
  console.log("sending to openai: " + prompt);

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt + "\n",
      temperature: 0.2,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log("got from openai: " + JSON.stringify(response.data));
    res.status(200).end(history + response.data.choices[0].text);
  } catch (error) {
    console.error(error.response.status, error.response.data);
    res.status(error.response.status).json(error.response.data);
  }
}


// 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

import { Configuration, OpenAIApi } from "openai";
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"; 

const configuration = new Configuration({
    organization: "org-SjIxKEfJ6GIbHtCx6MRzR3A8",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();





// create a simple express api that calls the function above
const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post('/',async (req,res)=>{
    const {message} = req.body
    console.log(message)
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${message}`,
            max_tokens: 100,
            temperature: 0.5,
        })
        console.log(response.data.choices[0].text)
        res.json({
            // data: response.data,
            message: response.data.choices[0].text
        })
    
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})



import express from "express";
import bodyParser, { json } from "body-parser";
import { readFileSync } from "fs";
import lodash from "lodash";

const app = express() ;
const PORT = 3000;

const projectJson= readFileSync ("project.json", "utf-8");
app.use(express.static("public"));
app.use(bodyParser.urlencoded,({extended:true}));

let data;

app.get ("/", (req, res) => {
    res.render("index.ejs", {proverbs: data})

});

app.POST ("/popularProverbs" , (req,res) => {
    switch (req, body, choice) {
    case "proverb1":
        data = json.Parse (projectJson) [0]
        break;

    case "proverb2":
        data = json.Parse (projectJson) [1]
        break;

    case "proverb3":
        data = json.Parse (projectJson) [2]
        break;

    case "proverb4":
        data = json.Parse (projectJson) [3]
        break;

    case "proverb5":
        data = json.Parse (projectJson) [4]
        break;

        default:
            break;
    }
     console.log(data)
    
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log("server started!")
})
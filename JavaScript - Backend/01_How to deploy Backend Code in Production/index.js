// console.log("Backend COde Deployment in Production")

require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

const githubdata =
{
    "login": "sandeepatel01",
    "id": 115567883,
    "node_id": "U_kgDOBuNtCw",
    "avatar_url": "https://avatars.githubusercontent.com/u/115567883?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sandeepatel01",
    "html_url": "https://github.com/sandeepatel01",
    "followers_url": "https://api.github.com/users/sandeepatel01/followers",
    "following_url": "https://api.github.com/users/sandeepatel01/following{/other_user}",
    "gists_url": "https://api.github.com/users/sandeepatel01/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sandeepatel01/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sandeepatel01/subscriptions",
    "organizations_url": "https://api.github.com/users/sandeepatel01/orgs",
    "repos_url": "https://api.github.com/users/sandeepatel01/repos",
    "events_url": "https://api.github.com/users/sandeepatel01/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sandeepatel01/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sandeep Patel",
    "company": null,
    "blog": "",
    "location": "Bareilly",
    "email": null,
    "hireable": null,
    "bio": "Think slow and code fast | Software developer | react.js | node.js | mongodb | freelancer",
    "twitter_username": null,
    "public_repos": 24,
    "public_gists": 0,
    "followers": 8,
    "following": 24,
    "created_at": "2022-10-11T14:38:59Z",
    "updated_at": "2024-02-06T18:42:09Z"
}

app.get('/', (req, res) => {
    res.send('How to Deploy Backend code in Production')
})

app.get('/facebook', (req, res) => {
    res.send("sandeepatel.com")
})

app.get('/yt', (req, res) => {
    res.send("<h1> Backend Code </h1>")
    // res.send("<h2> How to Deploy Backend code in Production </h2> ")
})

app.get("/insta", (req, res) => {
    res.send("Restart With Backend");
})

app.get('/github', (req, res) => {
    res.json(githubdata)
})

app.listen(process.env.PORT, () => {
    console.log(` app listening on port ${port}`)
})
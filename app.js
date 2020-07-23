// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateBullshits = require('./generate_bullshits')
const Handlebars = require("handlebars")
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

//自定義helper
Handlebars.registerHelper('if_equal', function (job, expectedJob, options) {
    if (job === expectedJob) {
      return options.fn(this);
    }
    return options.inverse(this);
});

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
    // console.log('get form POST request')
    // console.log('req.body', req.body)
    const options = req.body
    const job = req.body.target
    const Bullshits = generateBullshits(options)
    // console.log(generateBullshits(options))
    // console.log(options.target)
    res.render('index',{ Bullshits: Bullshits, job: job})
})
// starts the express server and listening for connections.
app.listen(port, () => {
//   console.log(`Express app listening on port ${port}.`)
})
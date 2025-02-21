const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// set up router
const router = express.Router();

// create a function for checking...
function check_input(input) {
    if (input === '' || input === null || input === undefined) {
        return res.send("Input cannot be empty")
    }
}

// creating paycheck calculator - paycheck for bills
router.post('/paycheck_bills', (req, res) => {
    // static bills - this can change later
    const internet_bill = 25.45
    const car_bill = 381.72
    const icloud_bill = 0.99
    const spotify_bill = 13.59
    const gym_bill = 34.24


    // user input parameters
   const income_input = req.query.income;
   const rent_input = req.query.rent;

   // check for empty inputs
   if (income_input === '' || income_input === null || income_input === undefined) {
        return res.send('Income cannot be empty...');
   }

   if (rent_input === '' || rent_input === null || rent_input === undefined) {
        return res.send('Rent input cannot be empty - Enter 0 if rent is not applicable')
   }

   // convert to number and check for valid integer
   const income = parseInt(income_input, 10);
   if (isNaN(income)) {
        return res.send('Provide a valid integer for income...');
   }

   const rent = parseInt(rent_input, 10);
   if (isNaN(rent)) {
        return res.send('Provide a valid integer for rent....');
   }

   // check for floating-point number
   if (parseFloat(income_input) != income) {
        return res.send('Please provide an integer, not a floating-point number...');
   }

   if (parseFloat(rent_input) != rent) {
        return res.send('Please provide an integer, not a floating-pointer number...');
   }

   res.send(`Rent due: $${rent} and income is $${income}`);
})

// creating paycheck calculator - paycheck for savings
// router.post

// testing route if things go south
router.post('/hello', (req, res) => {
    res.send("This is 100% going to work")
});


module.exports = router

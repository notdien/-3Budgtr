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
   if (!income_input || !rent_input) {
     return res.status(400).send('Both inputs are required and cannot be empty...');
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

   if (parseFloat(income_input) != income || parseFloat(rent_input) != rent) {
     return res.status(400).send('Inputs cannot be floating point number... Please provide an integer!')
   }

   // total bills
   const total = rent + internet_bill + car_bill + icloud_bill + spotify_bill + gym_bill;

   // total after bills
   const total_after = income - total;

   // needs / wants
   const needs = total_after * 0.50;
   const wants = total_after * 0.50;


   const data = {
     "Total_rent": `$${rent}...`,
     "Total_income": `$${income}...`,
     "Total_bills": `This is the total bill amount including rent: $${total}...`,
     "Total_after_bills": `This is the amount you have left after bills: $${total_after}...`,
     "Needs": `This is the amount you have to spend for needs this paycheck: $${needs}...`,
     "Wants": `This is the amount you have to spend for wants this paycheck: $${wants}...`,
   }

   res.json(data);

})

// creating paycheck calculator - paycheck for savings
// router.post

// testing route if things go south
router.post('/hello', (req, res) => {
    res.send("This is 100% going to work")
});


module.exports = router

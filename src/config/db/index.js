const mongoose = require('mongoose');//1 import
async function connect(){
    try {
        // await always in async "remember!!!, don`t forget"
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log("Connect successfully!!!")//when successfully
    } catch (error) {
        console.log("Connect failure!!!")//when failure
    }
}
module.exports = { connect };//and then export
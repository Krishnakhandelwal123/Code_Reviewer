require('dotenv').config();
const app=require('./src/app');
const { connectDB } = require('./src/lib/db.js');




app.listen(3000,()=>{
    console.log('Server is running on port 3000');
    connectDB();
});   
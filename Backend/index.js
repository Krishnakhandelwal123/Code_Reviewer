import 'dotenv/config';
import app from './src/app.js';
import { connectDB } from './src/lib/db.js';

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
    connectDB();
});    
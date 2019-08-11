const mongoose = require('mongoose');
/* const Schema = mongoose.Schema; - this is similar to following line. 
   It means that mongoose has a property called Schema. take that property and assign it 
   into a new variable called schema. */
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
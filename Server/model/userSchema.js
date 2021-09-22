const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const MessageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const UserSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  token:
    {
    type: String,
  },
});



// For Hashing the Password

// UserSchema.pre("save", async function(next) {
//   if(this.isModified("password")){
//     this.password = await bcrypt.hash(this.password, 12);
//     this.cpassword = await bcrypt.hash(this.cpassword, 12);
//   }
//   next();
// });


// UserSchema.methods.generateAuthToken = async function() {
//   try {
//     let createToken = jwt.sign({_id: this._id},process.env.SECRET_KEY);
//     this.tokens = this.tokens.concat({token: createToken});
//     await this.save();
//     return createToken;
//   } catch (error) {
    
//   }
// }

const User = mongoose.model("studentLogins", UserSchema);
const UserMessage = mongoose.model("messages", MessageSchema);


module.exports = UserMessage;
module.exports = User;

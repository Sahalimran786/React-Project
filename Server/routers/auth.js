const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Authtenticate = require("../middleware/authentication");

const User = require("../model/userSchema");
const UserMessage = require("../model/userSchema");
const FSCpart1 = require("../model/part1");
const FSCpart2 = require('../model/part2');


// Message Reception coding
router.post("/message", async (req, res) => {
  const { Name, Email, Subject, Description } = req.body;
  // console.log(req.body);
  if (
    !Name ||
    !Email||
    !Subject||
    !Description
  ) {
    res.status(400).json({ Message: "Fill the Fields" });
  }
  else{
    try {
      const newMessage = new UserMessage({
        name: Name,
        email: Email,
        subject: Subject,
        description: Description,
      });
      const message = await newMessage.save();
      if(!message){
        res.status(500).json({ Message: "Oops! Server error" });
      }
      else if(message){
        res.status(200).json({ Message: "Message Received" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json({ Message: "Not Implemented" });
    }
  }

});


 router.post("/login", async (req, res) => {
   const { email, Password } = req.body;
   if (!email || !Password) {
     res.status(400).json({ Message: "Fill the All fields" });
   }
   try {
    const studentFound = await User.findOne({email: email});
    if(studentFound )
    {
       const passwordMatched = await bcrypt.compare(
         Password,
         studentFound.password
       );
       if(passwordMatched)
       {
         let Token = jwt.sign(
           { _id: studentFound._id },
           process.env.SECRET_KEY
         );
         await User.findByIdAndUpdate(
           { _id: studentFound._id },
           {
             token: Token,
           }
         );
         res.cookie("jwToken", Token, {
           expires: new Date(Date.now() + 3600000),
           httpOnly: true,
         });
         res.status(200).json({ Message: "Student Found" });
       }
       else if(!passwordMatched)
       {
         res.status(401).json({ Message: "Password not Matched" });
       }
    }
    else{
      res.status(404).json({ Message: "User not found" });
    }

   } catch (error) {
     
   }
 });

router.get("/partone", Authtenticate, async (req, res) => {
  // console.log(req.getUser);
  const Email = req.getUser.email;
  const getResult = await FSCpart1.find({ email: Email });
  if (getResult) {
    // console.log(getResult);
    console.log("OK!");
    res.send(getResult);
  } else if (!getResult) {
    console.log("No");
    res.status(404);
  }
});
router.get("/parttwo", Authtenticate, async (req, res) => {
  const Email = req.getUser.email;
  const getResult = await FSCpart2.find({ email: Email });
  if (getResult) {
    console.log("OK!");
    res.send(getResult);
  } else if (!getResult) {
    console.log("No");
    res.status(404);
  }
});

router.get("/logout",(req, res) => {
  res.clearCookie('jwToken', {path: '/'});
  res.status(200).send("User logout");
});

router.post("/update",async (req, res) => {
  const { email, Password, NewPassword } = req.body;
  if (!email || !Password || !NewPassword) {
    res.status(204).json({ Message: "Fill the All fields" });
  }
  try {
    const studentFound = await User.findOne({ email: email });
    if (studentFound) {
      const passwordMatched = await bcrypt.compare(
        Password,
        studentFound.password
      );
      if (passwordMatched) {
        const newPassword = await bcrypt.hash(NewPassword, 12);
        const updated = await User.findOneAndUpdate(
          { email: email },
          { $set: { password: newPassword } }
        );
        if(updated)
        {
          res.status(200).json({ Message: "Password Updated" });
        }
        else if (!updated) {
          res.status(501).json({ Message: "Password Not Updated" });
        }

        
      } else if (!passwordMatched) {
        res.status(401).json({ Message: "Password not Matched" });
      }
    } else {
      res.status(403).json({ Message: "Incorrect Email" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
});

module.exports = router;

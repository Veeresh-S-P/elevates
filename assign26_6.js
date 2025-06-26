// Express-Validator Questions
// 1. Conditional Validation Implement validation that requires phone number only if user role is 'admin', using express-validator's conditional logic.


const {body,validationResult}=require('express-validator');

const validateUser=[

  body('phoneNumber').custom((value,{req})=>{
    if(req.body.role=='admin'&&!value){
      return console.log('Phone number is required for admin')
    }
    return true
  }),

  (req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return console.log("failed")
    }
    next();
  }
]
module.exports = validateUser;

// JWT (jsonwebtoken) Questions
// 2. Token Blacklisting Build a system to blacklist JWT tokens on logout and check blacklist on each request.  

const blacklist=[]

function auth(req, res, next){
  const token=req.headers.authorization?.split(' ')[1]
  if (!token||blacklist.includes(token)){
    return res.sendStatus(401)
}
    jwt.verify(token,secretkey)    
    req.user = user;
    next();
  
}

app.post('/logout', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) blacklist.push(token);
  res.sendStatus(200);
});
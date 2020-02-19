const jwt          = require('jsonwebtoken');
const jwtSecretKey = process.env.JWT_SECRET_KEY;
const user         = require('../model/user');
const bcrypt       = require('bcrypt');



exports.postRegister =  async ( req, res ) => {
      // deconstructuring the stuff comming out from the body
      let { name, email, pass } = req.body


      let userCheck = await user.findOne({ email });

      if( userCheck ) {
            res.json({ status : 'failed', message : 'user already taken!' });
            return;
      }

      pass = await bcrypt.hash(pass, 10);

      const newUser = new user({
            // name : name this is the older way
            name, // this is the e6 way it has the same meaning
            email,
            pass
      });

      newUser.save((err) => {
            if(err) {  res.json({ status : 'failed', message : err }); }
            else    {  res.json({ status: 'success', message : 'Congratz! You createda new account successfully'});}
      });
    
      
}

const signToken = id => {
      return jwt.sign({ id }, jwtSecretKey , { expiresIn : 360000})
}

exports.postLogin = ( req, res, next ) => {
      // destructuring what we are going to get from the body
      const { email, pass } = req.body;
   
      user.findOne({ email }, (err, result) => {

          
            if  ( err )     res.json({ status: 'failed', message: err })
      else  if( !result )   res.json({ status: 'failed', message : 'email or password is wrong' })

      else { 
            bcrypt.compare(pass, result.pass).then( async ( isPassCorrect ) => {

                  if(isPassCorrect){
                        console.log(result);
                        const token = await signToken(result.id);
                        res.json({
                              status: 'success',
                              message : 'Congratz! Login successfull!',
                              token
                        });

                  } else { res.json({ status : 'failed', message : 'email or password is wrong!'}); }
            });
         }
      });
}
const user = require('../model/user');

exports.postRegister =  ( req, res ) => {
      // deconstructuring the stuff comming out from the body
      let {name, email, pass } = req.body

      const newUser = new user({
            // name : name this is the older way
            name, // this is the e6 way it has the same meaning
            email,
            pass
      });

      newUser.save((err) => {
            if(err) {  res.json({status : 'failed', message : err}); }
            else    {  res.json({ status: 'success', message : 'Congratz! You createda new account successfully'});}
      });
    
      
}
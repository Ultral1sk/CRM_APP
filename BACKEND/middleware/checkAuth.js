const jwt = require('jsonwebtoken');
const jwtSecretKey = process.env.JWT_SECRET_KEY;

exports.checkAuth = ( req, res, next ) => {
      const userToken = req.header('x-auth-token');

      if ( !userToken ) {
            return res.status(401).json({ status : 'failed', message : 'Authorization problem 5012' });

      } 

      try { 
            jwt.verify(userToken, jwtSecretKey, ( fail, decodedPayload ) => {
                  if(fail ) {
                        res.status(401).json({ status: 'failed', message : 'Authoziation problem 5013' });
                  
                  } else {

                        req.userId = decodedPayload.id;
                        // currentUserID = decodedPayload.id
                        next()
                  }
            })
      } 
      catch ( error ) {
            res.status(500).json({ status : 'error', message : error });
      }
          

}
const { User } = require('../models');



 const addUser = async (req, res) => {

        try {

               await User.create({
                    f_uid : req.params.id,
                })

                res.send("user added")
                
            }
            catch (err) {
                res.json(err)
            }
     
}

const findUser = async (req, res) => {
    console.log(req.params);
  
    try {
      const user = await User.findOne({ f_uid: req.params.id });
  
      res.send(user);
    } catch (err) {
      res.json(err);
    }
  };

  module.exports = { addUser,findUser };
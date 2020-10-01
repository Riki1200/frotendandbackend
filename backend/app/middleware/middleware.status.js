module.exports = function(req,res,next){
    if (req.url === null) next();
    return res.status(400).send({messages: 'recurse not found'}); 
   
};


const form = require('../models/form');


module.exports.password_generator = function(request ,  response){
    return response.render('home');
}

// for contact details saving in database
module.exports.contact_data = function(request , response){
    form.findOne({email: request.body.email},function(err , message){
        if(err){
            console.log('Error While Submiting Messages');
            return;
        }
        // Submitting The Messages
        if(!message){
            form.create(request.body , function(err , message){
                if(err){
                    console.log('Error to Submittung Messages',err);
                    return;
                }
                console.log('Successfully Submitted The Message ',message);
                return response.redirect('/');
            });
        }
        else{
            return response.redirect('back');
        }
    });
}

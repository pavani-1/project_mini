const mongoose=require('mongoose');

const hospSchema=mongoose.Schema({
    h_ID: {
        type:String,
        
    },
    hosp_name: {
        type:String,
        
    },
    location:String,
    address :String,
    contactno :String
});


module.exports=mongoose.model('Hospital',hospSchema);
const mongoose=require('mongoose');

const ventSchema=mongoose.Schema({
    h_ID: {
        type:String
    },
    vent_ID: {
        type:String
    },
    status: String,
    hosp_name: {
        type:String
    }
});


module.exports=mongoose.model('Ventilator',ventSchema);
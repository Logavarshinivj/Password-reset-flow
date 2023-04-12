const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        fname:{
            type:String,
        },
        lname:{
            type:String,
        },
        email:{
            type:String,
            unique:true,
        },
        password:{
            type:String
        }
    }
)



const User=mongoose.model('users',userSchema);

module.exports =User
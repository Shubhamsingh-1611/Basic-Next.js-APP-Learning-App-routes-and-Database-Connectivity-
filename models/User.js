import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowecase:true,
        match:[/^\S+@\S+\.\S+$/, "Please Enter a valid email address"],
    }, 
    phone:{
        type:String,
        required:true,
        match:[/^[0-9]{10}$/, "Please enter valid 10 Digit Number"],
    }
},{
    timestamps:true
})
const User = mongoose.models.User || mongoose.model("User", UserSchema);// because next re-runs file mutiple time

export default User;


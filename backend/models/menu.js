import mongoose ,{Schema} from "mongoose";



const menuSchema = new Schema(

{
    title: String,
   
    imageUrl:{
        type :String,
        required:true,
    },
}, 
{
    timestamps : true 
}



);

const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);
export default Menu;
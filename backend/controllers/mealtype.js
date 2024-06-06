const MealTypes = require('../models/mealType')

exports.getAllMealtypes=(req,res)=>{
    MealTypes.find().then(result=>{
        res.status(200).json({ message:"MealTypes fetched successfully" , data:result})
    }).catch(e=>
        res.status(500).json({ message:"Error in DB" , error:e})
 
        )

}
const Restaurants= require('../models/restaurant')


exports.getAllRestaurants=(req,res)=>{
   Restaurants.find().then(
       result=>{
           res.status(200).json({ message:"data fetched successfully" , data:result })
       }
   ).catch(error=>{
           res.status(500).json({ message:"Error in database" , error:error })
   })

}


exports.getAllRestaurantsBycity=(req,res)=>{
    const filter={city:req.params.city}


    Restaurants.find(filter).select({"name":1,"_id":0}).then(
        result=>{
            res.status(200).json({ message:"data fetched successfully" , data:result })
        }
    ).catch(error=>{
            res.status(500).json({ message:"Error in database" , error:error })
    })
 
 }


 exports.getAllRestaurantDetails=(req,res)=>{
    const filter={name:req.params.name}


    Restaurants.findOne(filter).then(
        result=>{
            res.status(200).json({ message:"data fetched successfully" , data:result })
        }
    ).catch(error=>{
            res.status(500).json({ message:"Error in database" , error:error })
    })
 
 }


 exports.getAllRestaurantsByFilter=(req,res)=>{
    const filter={}

     if(req.body.city_id){
         filter.city= req.body.city_id
     }

     if(req.body.cuisine && req.body.cuisine.length >0 ){
        filter['Cuisine.name']={ $in : req.body.cuisine }
     }
     
     if(req.body.lcost && req.body.hcost){
         if(req.body.lcost==0){
             filter.cost ={
                 $lte :req.body.hcost
             }
         }
         else{
            filter.cost= {
                $lt: req.body.hcost,
                $gt: req.body.lcost
            } 
         }
     }

     let sort=1;
     if(req.body.sort){
         sort:req.body.sort
     }
    //logic of pagination achieved through limit and skip 
    Restaurants.find(filter).limit(2).skip(2*(req.params.pageNo-1)).sort({"cost":sort}).then(
        result=>{
            res.status(200).json({ message:"data fetched successfully" , data:result })
        }
    ).catch(error=>{
            res.status(500).json({ message:"Error in database" , error:error })
    })
 
 }

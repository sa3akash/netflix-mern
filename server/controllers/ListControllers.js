import List from "../models/List.js";

const ListControllers = {
    // Create a new Movie
    async createList(req, res, next){
       const newList = new List(req.body)
       try{
            const list = await newList.save();
            res.status(201).json(list);
       }catch(err){
        return next(err);
       }
    },

    // Update a new Movie
    async updateList(req, res, next){
       try{
            const updateList = await List.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true});
            res.status(200).json(updateList);
       }catch(err){
        return next(err);
       }
    },

    // Delete a new Movie
    async deleteList(req, res, next){
       try{
            await List.findByIdAndDelete(req.params.id)
            res.status(200).json({success:true, message: "List deleted successfully."});
       }catch(err){
        return next(err);
       }
    },

    // Get One a new Movie
    async getOneList(req, res, next){
       try{
            const movie = await List.findById(req.params.id)
            res.status(200).json(movie);
       }catch(err){
        return next(err);
       }
    },

    // Get All a new Movie
    async getAllList(req, res, next){
        const typeQuery = req.query.type;
        const genreQuery = req.query.genre;
        let list = []
       try{
          // if type=movie then match all movie and return list[]
          if(typeQuery){
               // if genre=action then match all movie,genre and return list[]
               if(genreQuery){
                    list = await List.aggregate([
                         {$sample: {size: 10}},
                         {$match: {type: typeQuery, genre: genreQuery}}
                    ])
               }else{
                    list = await List.aggregate([
                         {$sample: {size: 10}},
                         {$match: {type: typeQuery}}
                    ])
               }

          }else{
               list = await List.aggregate([{$sample: {size: 10}}])
          }
            res.status(200).json(list.reverse());
       }catch(err){
        return next(err);
       }
    },
}

export default ListControllers;



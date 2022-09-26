import Movie from "../models/Movie.js";

const MovieControllers = {
    // Create a new Movie
    async createMovie(req, res, next){
       const newMovie = new Movie(req.body)
       try{
            const movie = await newMovie.save();
            res.status(201).json(movie);
       }catch(err){
        return next(err);
       }
    },

    // Update a new Movie
    async updateMovie(req, res, next){
       try{
            const updateMovie = await Movie.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true});
            res.status(200).json(updateMovie);
       }catch(err){
        return next(err);
       }
    },

    // Delete a new Movie
    async deleteMovie(req, res, next){
       try{
            await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json({success:true, message: "Movie deleted successfully."});
       }catch(err){
        return next(err);
       }
    },

    // Get One a new Movie
    async getOneMovie(req, res, next){
       try{
            const movie = await Movie.findById(req.params.id)
            res.status(200).json(movie);
       }catch(err){
        return next(err);
       }
    },

    //Get All a new Movie
    
    async getAllMovie(req, res, next){
        const query = req.query.limit;
       try{
            const movies = query ? await Movie.find().limit(query) : await Movie.find()
            res.status(200).json(movies.reverse());
       }catch(err){
        return next(err);
       }
    },

    // Get a random Movie
    async getRandom(req, res, next){
        const type = req.query.type;
        let movie;
       try{
            if(type === 'series'){
                movie = await Movie.aggregate([
                    {$match: {isSeries: true}},
                    {$sample: {size: 1}}
                ])
            }else{
                movie = await Movie.aggregate([
                    {$match: {isSeries: false}},
                    {$sample: {size: 1}}
                ])
            }
            res.status(200).json(movie);
       }catch(err){
        return next(err);
    }
    }


}

export default MovieControllers;


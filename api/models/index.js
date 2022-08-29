const User= require("../models/Users")
const Favorite = require("../models/Favorite")

User.hasMany(Favorite, {  // un usuario tiene mucho favoritos
    foreignKey: "userId"});
Favorite.belongsTo(User);  // un favorito pertenece a un usuario


module.exports= { User, Favorite }


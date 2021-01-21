module.exports = function(sequelize, DataTypes) {
  var Grant = sequelize.define("Grant", {
    // Giving the User model a name of type STRING

  });

  Grant.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts

    Grant.belongsToMany(models.User, {through: 'Grant_User'},{
      onDelete: "cascade"
    });
 
  };

  return Grant;
};
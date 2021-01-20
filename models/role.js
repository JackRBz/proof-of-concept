module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("Role", {
      // Giving the User model a name of type STRING
      name: DataTypes.STRING,
    });
  
    Role.associate = function(models) {
      // Associating User with Posts
      // When an User is deleted, also delete any associated Posts
      Role.hasMany(
        models.User,
        {
          onDelete: "cascade",
        }
      );

    };
  
    return Role;
  };

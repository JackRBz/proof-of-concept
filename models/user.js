module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  User.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts

    User.belongsTo(models.Role, {through: 'Role_User'}, {
      onDelete: "cascade"
    });

    User.belongsToMany(
      models.Permission,
      { through: "User_Permsission" },
      {
        onDelete: "cascade",
      }
    );

  };

  return User;
};
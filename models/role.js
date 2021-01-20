module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("Role", {
      // Giving the User model a name of type STRING
      name: DataTypes.STRING,
    });
  
    Role.associate = function(models) {
      // Associating User with Posts
      // When an User is deleted, also delete any associated Posts

      Role.belongsToMany(models.User, {through: 'Role_User'},{
        onDelete: "cascade"
      });

    //   Role.belongsToMany(models.Permission, {through: 'Role_Permission'},{
    //     onDelete: "cascade"
    //   });
    };
  
    return Role;
  };

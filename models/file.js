module.exports = function(sequelize, DataTypes) {
  var File = sequelize.define("File", {
    // Giving the User model a name of type STRING
    path: DataTypes.STRING,
  });

  File.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts

    File.hasMany(
      models.Grant,
      {
        onDelete: "cascade",
      }
    );
  };

  return File;
};
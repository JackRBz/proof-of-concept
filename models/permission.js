"use strict";

module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    "Permission",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Permission.associate = function (models) {

    Permission.belongsTo(
      models.File,
      { through: "File_Permsission" },
      {
        onDelete: "cascade",
      }
    );

    Permission.belongsToMany(
      models.User,
      { through: "User_Permsission" },
      {
        onDelete: "cascade",
      }
    );

    // Permission.belongsToMany(models.Role, {through: 'Role_Permsission'}, {
    //     onDelete: "cascade"
    // });
  };
  return Permission;
};

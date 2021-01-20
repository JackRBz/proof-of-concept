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

    Permission.hasMany(
        models.Grant,
        {
          onDelete: "cascade",
        }
      );
  };
  return Permission;
};

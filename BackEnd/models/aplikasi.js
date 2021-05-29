'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aplikasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Aplikasi.init({
    nama_aplikasi: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    keterangan: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    jumlah_pengguna: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    pendiri: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    tanggal_didirikan: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
  }, {
    hooks:{
      beforeValidate:(aplikasi)=>{
        if (aplikasi.jumlah_pengguna == '') {
          aplikasi.jumlah_pengguna = 0
        }
      }
    },
    sequelize,
    modelName: 'Aplikasi',
  });
  return Aplikasi;
};
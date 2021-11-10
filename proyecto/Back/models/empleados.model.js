//Se crea esquema de los registros que van a ir a la Base de datos
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
    nombre:{type:String, required:true, max:60},
    apellido_p:{type:String, required:true, max:40},
    apellido_m:{type:String, required:true, max:40},
    telefono:{type:String, required:true, max:15},
    email:{type:String, required:false,  max:80},
    direccion:{type:String, required:false, max:60}
})

module.exports = mongoose.model("Empleados",EmpleadosSchema);
import React, { useEffect, useState } from "react";
import empleadosForm from "./empleadosForm";

import { db } from "../Firebase";
import { toast } from "react-toastify";

const Empleados = () =>{
    const [Empleados, setEmpleados] = useState([]);
    const [currentId , setCurrentId ]= useState("");

    const getEmpleados = async() => {
        db.collection("Empleados").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id:doc.id});
            });
            getEmpleados(docs);
        });
    };

    const eliminarEmpleado = async (id) => {
        if (window.confirm("Esta seguro de que desea eliminar a este empleado?")){
            await db.collection("Empleados").doc(id).delete();
            toast("De elimino un trabajador", {
                type:"error",
            });
        }
    };

    useEffect(() => {
        getEmpleados();
    }, []);

    insertaroeliminarEmpleado = async (EmpleadoObject) => {
        try{
            if (currentId === ""){
                await db.collection("Empleados").doc().set(EmpleadoObject);
                toast("Se agrego empleado con exito",{
                    type: "success",
                });
            }else{
                await db.collection("Empleados").doc(currentId).update(EmpleadoObject);
                toast("Se actualizo un empleado", {
                    type: "info",
                });
                setCurrentId();
            }
        }catch(error){
            console.log(console.error());
        }
    };

    return (
        <div className="col-md-4 p-2">
            <h2>Agregar Empleados</h2>
        </div>
    )
}
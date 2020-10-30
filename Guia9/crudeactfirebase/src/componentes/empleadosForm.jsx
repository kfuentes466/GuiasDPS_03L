import React, {useState, useEffect } from "react";
import { db } from "../Firebase";

const EmpleadosForm = (props) => {

    const initialStateValues = {
        nombre: "",
        apellido: "",
        cargo: "",
    };

    const [values, setValues] = useState(initialStateValues);

    const handleInputChanges = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]:value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.insertaroeliminarEmpleado(values);
        setValues({ ...initialStateValues });
    };

    const obtenerEmpleadoId = async(id) =>{
        const doc = await db.collection("Empleados").doc(id).get();
        setValues({ ...doc.data() });
    };

    useEffect(() => {
        if(props.currentId === ""){
            setValues({ ...initialStateValues });
        }else{
            if(props.currentId !== null && props.currentId !== undefined){
                obtenerEmpleadoId(props.currentId);
            }
        }
    }, [props.currentId]);

    return(
        <form onSubmit={handleSubmit} className="card card-body border-primary">
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">contact_page</i>
                </div>
                <input 
                    type="text"
                    className="form-control"
                    value={values.nombre}
                    name="nombre"
                    onChange={handleInputChanges}
                    placeholder="Ingrese nombre"
                />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">contact_page</i>
                </div>
                <input 
                    type="text"
                    value={values.apellido}
                    name="apellido"
                    placeholder="Ingrese apellido"
                    className="form-control"
                    onChange={handleInputChanges}
                />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">exposure</i>
                </div>
                <input 
                    type="text"
                    value={values.cargo}
                    name="cargo"
                    placeholder="Ingresar cargo"
                    className="form-control"
                    onChange={handleInputChanges}
                />
            </div>
            <button className="btn btn-primary btn-block">
                {props.currentId === "" ? "Guardar" : "Actualizar"}
            </button>
        </form>
    );
};

export default EmpleadosForm;
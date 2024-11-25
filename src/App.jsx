import { Link } from 'react-router';
import './App.css'
import { useLabStore } from './store/store';
import { useState } from 'react';

function App() {
  const [nombreLab, setNombreLab] = useState("")
  const { labs, createLab, deleteLab, deleteAllLabs } = useLabStore((state) => state)
  const sendDataCreateLab = (e) => {
    e.preventDefault()
    createLab(nombreLab)
    console.log("hola")
  }
  return (
    <div className="container">
      <h2 className="text-center">
        Te amito ❤
      </h2>
      <div className="container mt-5 pt-5">
        <div className="d-flex justify-content-between">
          <div><button type='button' className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#createLabModal">Crear Lab</button></div>
          <div><button type='button' className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteLabModal">Eliminar Lab</button></div>
        </div>
      </div>
      <div className="container my-2 border border-primary text-center">
        <div className="row">
          <div className="col">
            <Link className="btn btn-primary btn-lg my-2" to="/generador_Inventario_lab/material"> Añadir Materiales </Link>
          </div>
        </div>
      </div>
      <div className="container my-2 border border-danger text-center">
        <div className="row">
          <div className="col">
            <button type='button' className="btn btn-danger btn-lg my-2" data-bs-toggle="modal" data-bs-target="#deleteDataModal"> Eliminar toda la data ❕</button>
          </div>
        </div>
      </div>


      {/* MODALES */}


      {/* create lab */}
      <div className="modal" tabIndex="-1" id="createLabModal" aria-labelledby="createLabModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Crear Laboratorio</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <p>Crear Laboratorio</p>
              <form onSubmit={sendDataCreateLab} >
                <div className="mb-3">
                  <label htmlFor="nombreLaboratorio" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombreLaboratorio" onChange={e => { setNombreLab(e.target.value) }} required />
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

      {/* delete lab */}
      <div className="modal" tabIndex="-1" id="deleteLabModal" aria-labelledby="deleteLabModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Borrar Lab</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <p>Borrar Laboratorio</p>
              {labs && labs.map(({ nombre, id }) => (
                <div className="d-flex align-items-center border my-2 p-1" key={id}>
                  <div className="col">{nombre}</div>
                  <div className="col"><button className="btn btn-warning" onClick={() => deleteLab(id)}>Borrar</button></div>
                </div>)
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Eliminar Laboratorio</button>
            </div>
          </div>
        </div>
      </div>

      {/* delete all data */}
      <div className="modal" tabIndex="-1" id="deleteDataModal" aria-labelledby="deleteDataModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Segura de borrar TODA la data?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <p>Esto eliminará toda la data, tanto los Laboratorios como los Materiales</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteAllLabs}>Eliminar TODO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

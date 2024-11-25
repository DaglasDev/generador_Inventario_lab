import { useState } from "react"
import { useLabStore } from "../store/store"

export default function Material() {

  const [id, setId] = useState("")
  const [nombre, setNombre] = useState("")
  const [esInsumo, setEsInsumo] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [unidad, setUnidad] = useState("")
  const [observacion, setObservacion] = useState("Por grupo")
  const sendDataAddMaterials = (e) => {
    e.preventDefault()
    addMaterials(id, { nombre, esInsumo, cantidad, unidad, observacion })
    setNombre("")
    setEsInsumo("")
    setCantidad("")
    setUnidad("")
    setObservacion("Por grupo")
  }
  const { labs, addMaterials } = useLabStore((state) => state)
  return (
    <>
      {labs && labs.map(({ nombre, id }) => (
        <div className="d-flex align-items-center border my-2 p-1" key={id}>
          <div className="col">{nombre}</div>
          <div className="col"><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addMaterialsToLabModal" onClick={() => { setId(id) }}>Agregar</button></div>
        </div>
      ))}
      <div className="modal" tabIndex="-1" id="addMaterialsToLabModal" aria-labelledby="addMaterialsToLabModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agregar Material</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <p>Nuevo Material</p>
              <form onSubmit={sendDataAddMaterials} >
                <div className="mb-3">
                  <label htmlFor="nombreMaterial" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombreMaterial" onChange={e => { setNombre(e.target.value) }} required value={nombre} />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="esInsumoMaterial1" onChange={() => { setEsInsumo(true) }} required value={esInsumo} />
                    <label className="form-check-label" htmlFor="esInsumoMaterial1">
                      Insumo
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="esInsumoMaterial2" onChange={() => { setEsInsumo(false) }} required value={esInsumo} />
                    <label className="form-check-label" htmlFor="esInsumoMaterial2">
                      Activo
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="cantidadMaterial" className="form-label">Cantidad</label>
                  <input type="number" className="form-control" id="cantidadMaterial" onChange={e => { setCantidad(e.target.value) }} required value={cantidad} />
                </div>
                <div className="mb-3">
                  <label htmlFor="unidadMaterial" className="form-label">Unidad</label>
                  <input type="text" className="form-control" id="unidadMaterial" onChange={e => { setUnidad(e.target.value) }} required value={unidad} />
                </div>
                <div className="mb-3">
                  <label htmlFor="obsMaterial" className="form-label">Observacion</label>
                  <select id="obsMaterial" className="form-select" onChange={e => { setObservacion(e.target.value) }} required value={observacion}  >
                    <option value="Por grupo">Por grupo</option>
                    <option value="Por curso">Por curso</option>
                    <option value="Individual">Individual</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Agregar</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
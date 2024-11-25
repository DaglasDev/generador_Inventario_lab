import { useState } from "react";
import { useLabStore } from "../store/store";

export default function Material() {
  const [busquedaId, setBusquedaId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [esInsumo, setEsInsumo] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [unidad, setUnidad] = useState("");
  const [observacion, setObservacion] = useState("Por grupo");

  const labs = useLabStore((state) => state.labs);
  const addMaterials = useLabStore((state) => state.addMaterials);
  const deleteMaterial = useLabStore((state) => state.deleteMaterial);

  const sendDataAddMaterials = (e) => {
    e.preventDefault();
    addMaterials(busquedaId, {
      nombre,
      esInsumo,
      cantidad,
      unidad,
      observacion,
    });
    setNombre("");
    setEsInsumo("");
    setCantidad("");
    setUnidad("");
    setObservacion("Por grupo");
  };
  return (
    <>
      {labs &&
        labs.map(({ id, nombre }) => (
          <div className="d-flex align-items-center border my-2 p-1" key={id}>
            <div className="col">{nombre}</div>
            <div className="col">
              <button
                className="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#checkMaterialsToLabModal"
                onClick={() => setBusquedaId(id)}
              >
                Revisar
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addMaterialsToLabModal"
                onClick={() => setBusquedaId(id)}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      <div
        className="modal"
        tabIndex="-1"
        id="addMaterialsToLabModal"
        aria-labelledby="addMaterialsToLabModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agregar Material</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body">
              <p>Nuevo Material</p>
              <form onSubmit={sendDataAddMaterials}>
                <div className="mb-3">
                  <label htmlFor="nombreMaterial" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombreMaterial"
                    onChange={(e) => {
                      setNombre(e.target.value);
                    }}
                    required
                    value={nombre}
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="esInsumoMaterial1"
                      onChange={() => {
                        setEsInsumo(true);
                      }}
                      required
                      value={esInsumo}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="esInsumoMaterial1"
                    >
                      Insumo
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="esInsumoMaterial2"
                      onChange={() => {
                        setEsInsumo(false);
                      }}
                      required
                      value={esInsumo}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="esInsumoMaterial2"
                    >
                      Activo
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="cantidadMaterial" className="form-label">
                    Cantidad
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="cantidadMaterial"
                    onChange={(e) => {
                      setCantidad(e.target.value);
                    }}
                    required
                    value={cantidad}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="unidadMaterial" className="form-label">
                    Unidad
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="unidadMaterial"
                    onChange={(e) => {
                      setUnidad(e.target.value);
                    }}
                    required
                    value={unidad}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="obsMaterial" className="form-label">
                    Observacion
                  </label>
                  <select
                    id="obsMaterial"
                    className="form-select"
                    onChange={(e) => {
                      setObservacion(e.target.value);
                    }}
                    required
                    value={observacion}
                  >
                    <option value="Por grupo">Por grupo</option>
                    <option value="Por curso">Por curso</option>
                    <option value="Individual">Individual</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-sm btn-primary">
                  Agregar
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal"
        tabIndex="-1"
        id="checkMaterialsToLabModal"
        aria-labelledby="checkMaterialsToLabModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Listado de Materiales</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body">
              {labs.find((l) => l.id === busquedaId) &&
                labs
                  .find((l) => l.id === busquedaId)
                  .materiales.map(
                    ({ nombre, esInsumo, cantidad, unidad, observacion }) => (
                      <>
                        <div className="row border mb-1">
                          <div className="col-6">
                            <p>{nombre}</p>
                          </div>
                          <div className="col-6">
                            <p>{esInsumo ? "Insumo" : "Activo"}</p>
                          </div>
                          <div className="col-4">
                            <p>
                              {cantidad} {unidad}
                            </p>
                          </div>
                          <div className="col-4">
                            <p>{observacion}</p>
                          </div>
                          <div className="col-4">
                            <button
                              className="btn btn-warning"
                              data-bs-dismiss="modal"
                              onClick={() => deleteMaterial(busquedaId, nombre)}
                            >
                              Borrar
                            </button>
                          </div>
                        </div>
                      </>
                    )
                  )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

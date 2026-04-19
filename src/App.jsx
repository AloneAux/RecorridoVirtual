import { useState } from 'react'
import fachada from './assets/UTZAC_fachada.png';
import './App.css'

function App() {

  return (
    <div id="root" style={{ 
      backgroundImage: `url(${fachada})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <main>
        <div className="main-content"> {/* Cambiado a className */}
          <h1> Universidad Tecnológica del Estado de Zacatecas </h1>
          <h2> Formulario de Pre Registro </h2>
          
          <form 
            action="http://localhost/dbreact/saveFrom.php"
            method="POST"
            className="was-validated"
          >
            <div className="cajaPregunta">
              <div className="mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Captura tu nombre completo"
                  name="nombre"
                  minLength="5"
                  maxLength="60"
                  pattern="[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+"
                  
                  required
                />
                <div className="valid-feedback">Valido</div>
                <div className="invalid-feedback">
                  Por favor captura este campo.
                </div>
              </div>
            </div>

            <div className="mb-3 mt-3">
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="Correo Electronico"
                name="email"
                pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                minLength={12}

                required
                />
                <div className="valid-feedback">Valido</div>
                <div className="invalid-feedback"> Por favor captura este campo. </div>
            </div>

            <div className="cajaPregunta">
              <div className="mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="numero"
                  placeholder="Número Telefónico"
                  name="numero"
                  minLength={10}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                />
                <div className="valid-feedback">Válido</div>
                <div className="invalid-feedback">Deben ser 10 dígitos.</div>
              </div>
            </div>

            <div className="cajaPregunta">
              <div className="mb-3 mt-3">
                <select className="form-select mt-3" name='esc_proc' required>
                  <option value="">-- Escuela de Procedencia --</option>
                  <option value="cetis113">CETIS 113</option>
                  <option value="cobaezac">COBAEZ</option>
                  <option value="prepa2">Prepa 2, UAZ</option>
                </select>
                <div className="valid-feedback">Válido</div>
                <div className="invalid-feedback">Selecciona una opcion.</div>
              </div>
            </div>

            <div className="cajaPregunta">
              <div className="mb-3 mt-3">
                <select className="form-select mt-3" name='car_inter' required>
                  <option value="">-- Carrera de Interés --</option>
                  <option value="Tecnologias de la Informacion"> Tecnologias de la Informacion </option>
                  <option value="Mecatronica"> Mecatronica </option>
                  <option value="Energias Renovables"> Energias Renovables </option>
                  <option value="Terapia Fisica"> Terapia Fisica </option>
                  <option value="Procesos Industriales"> Procesos Industriales </option>
                  <option value="Minas"> Minas </option>
                  <option value="Mantenimiento Industrial"> Mantenimiento Industrial </option>
                  <option value="Negocios"> Negocios </option>
                  <option value="Recursos Humanos"> Recursos Humanos </option>
                </select>
                <div className="valid-feedback">Válido</div>
                <div className="invalid-feedback">Selecciona una opcion.</div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btnEnviar">
              Enviar Registro
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default App
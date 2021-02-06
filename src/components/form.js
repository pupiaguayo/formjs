import React from "react";
import "../styles.css/form.css";
class Form extends React.Component {
  state = {
    countries: {
      allCountries: [],
    },
    nombre: "",
    apellido: "",
    dni: "",
    error: false,
  };
  componentDidMount() {
    this.fetchData(`https://restcountries.eu/rest/v2/all`);
  }
  fetchData = async (url) => {
    const response = await fetch(url);
    const paises = await response.json();
    this.setState({
      countries: {
        allCountries: paises,
      },
    });
    console.log(paises);
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.nombre.trim() === "" ||
      this.state.apellido.trim() === "" ||
      this.state.dni.trim() === ""
    ) {
      this.setState({
        error: true,
      });
      alert("Proceso Fallido");
      return;
    }

    this.setState({
      error: false,
    });
    alert("Proceso Exitoso");
    this.setState({
      nombre: "",
      apellido: "",
      pais: "",
      dni: "",
    });
  };
  handleFailed = (e) => {
    this.setState({
      nombre: "",
      apellido: "",
      pais: "",
      dni: "",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-edit">
          <form>
            <label className="edit-label">
              Nombre<span>*</span>
              <input
                type="text"
                name="nombre"
                onChange={this.handleChange}
                value={this.state.nombre}
              />
            </label>
            <label className="edit-label">
              Apellido<span>*</span>
              <input
                type="text"
                name="apellido"
                onChange={this.handleChange}
                value={this.state.apellido}
              />
            </label>
            <label className="edit-label">
              Seleccione un pais<span>*</span>
              <select id="pais" name="pais">
                {this.state.countries.allCountries
                  .map((pais, index) => {
                    return (
                      <option key={index} value={pais.name}>
                        {pais.name}
                      </option>
                    );
                  })
                  .slice(0, 20)}
              </select>
            </label>

            <label className="edit-label">
              Numero de documento<span>*</span>
              <input
                type="text"
                name="dni"
                onChange={this.handleChange}
                value={this.state.dni}
              />
            </label>
          </form>
          <div className="btn-edit">
            <button
              type="submit"
              className="btn-uno"
              onClick={this.handleSubmit}
            >
              Enviar
            </button>
            <button
              type="submit"
              className="btn-dos"
              onClick={this.handleFailed}
            >
              Cancelar
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Form;

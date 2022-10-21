import React, { Component } from 'react'

export default class FormSimple extends Component {
  
    //NECESITAMOS UNA VARIABLE DE REFERENCIA PARA CADA
    //CONTROL DE FORMULARIO QUE DESEEMOS RECUPERAR SU VALOR
    cajanombre = React.createRef();
    cajaedad =React.createRef();
    //EL SIGUIENTE PASO SERA TENER UN METODO PARA CAPTURAR
    //EL SUBMIT DEL FORMULARIO
    //EL METODO DEBE RECIBIR UN EVENT(e)
    recibirDatosForm = (e) => {
        //LA PRIMERA LINEA SIEMPRE SERA
        //DETENER LA PROPAGACION DEL EVENTO!!!
        e.preventDefault();
        //EN LAS REFERENCIAS DE OBETOS PARA CAPTURAR EL VALUE
        //SE UTILIZA referencia.current.val
        console.log(this.cajanombre.current.value);
        this.setState({
            user:{
                nombre: this.cajanombre.current.value,
                edad: this.cajaedad.current.value
            }
        });
    };

    state = {
        user:null
    }
  
    render() {
    return (
        <div>
            <h1>Ejemplo simple de forms</h1>
            {
                this.state.user &&
                (<div>
                    <h2 style={{color:"blue"}}>
                        Usuario: {this.state.user.nombre},
                        Edad: {this.state.user.edad}
                    </h2>
                </div>)
            }
            <form onSubmit={this.recibirDatosForm}>
                <label>Nombre:</label>
                <input type="text" ref={this.cajanombre} onChange={this.recibirDatosForm}/>
                <br/>
                <label>Edad:</label>
                <input type="text" ref={this.cajaedad} onChange={this.recibirDatosForm}/>
                <br/>
                <button>
                    Envia datos
                </button>
            </form>
        </div>
    )
  }
}

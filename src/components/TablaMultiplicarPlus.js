import React, { Component } from 'react'

export default class  extends Component {
    //NECESITAMOS UNA VARIABLE DE REFERENCIA PARA CADA
    //CONTROL DE FORMULARIO QUE DESEEMOS RECUPERAR SU VALOR
    selecnumero = React.createRef();
    //CEAMOS UN STATE CON EL ARRAY LISTARES
    //PARA QUE NOS RENDERICE Y ACTUALICE
    //PORQUE SI NO EL ARRAY QUE TENEMOS DENTRO DE LA FUNCION
    //PISA A LISTARES
    state = {
        listaTabla : [],
        listaNumAl : [Math.trunc(Math.random()*100),Math.trunc(Math.random()*100),Math.trunc(Math.random()*100),Math.trunc(Math.random()*100),Math.trunc(Math.random()*100),Math.trunc(Math.random()*100),Math.trunc(Math.random()*100),Math.trunc(Math.random()*100),Math.trunc(Math.random()*100)],
        numero : 0
    }
    //EL SIGUIENTE PASO SERA TENER UN METODO PARA CAPTURAR
    //EL SUBMIT DEL FORMULARIO
    //EL METODO DEBE RECIBIR UN EVENT(e)
    recibirDatosForm = (e) => {
        //LA PRIMERA LINEA SIEMPRE SERA
        //DETENER LA PROPAGACION DEL EVENTO!!!
        e.preventDefault();
        //EN LAS REFERENCIAS DE OBETOS PARA CAPTURAR EL VALUE
        //SE UTILIZA referencia.current.val
        this.state.numero =  this.selecnumero.current.value;
        this.state.listaTabla = [];
        this.setState({})
    }

  render() {
    return (
        <div>
            <h1>Tabla de Multiplicar</h1>
            <label>Tabla de multiplicar del :</label>
            <select onChange={this.recibirDatosForm} ref={this.selecnumero}>
                {
                    this.state.listaNumAl.map((numero,index) =>{
                        return(<option>{numero}</option>)
                    })
                }
            </select>
            <table>
                <thead>
                    <tr><td>Numero Aleatorio</td><td>Operador</td><td>Resultado</td></tr>
                </thead>
                <tbody>
                        {this.state.listaTabla.map((numero, index) => {
                            return (<tr></tr>);
                        })}
                </tbody>
            </table>
        </div>
    )
  }
}
import React, { Component } from 'react'

export default class  extends Component {
    //NECESITAMOS UNA VARIABLE DE REFERENCIA PARA CADA
    //CONTROL DE FORMULARIO QUE DESEEMOS RECUPERAR SU VALOR
    cajanumero = React.createRef();
    //CEAMOS UN STATE CON EL ARRAY LISTARES
    //PARA QUE NOS RENDERICE Y ACTUALICE
    //PORQUE SI NO EL ARRAY QUE TENEMOS DENTRO DE LA FUNCION
    //PISA A LISTARES
    state = {
        listaTabla : []
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
        console.log(this.cajanumero.current.value);
        var numero = parseInt(this.cajanumero.current.value);
        var resTabla = 0;
        console.log(resTabla);
        for(var i=1;i<=10;i++){
            resTabla = numero * [i];
            this.state.listaTabla.push(resTabla);
        }
            //FUNCION RECURSIVA PARA QUE VUELVA A ESCRIBIR DATOS
            //this.tabla(resTabla);
        this.setState({listaTabla:this.state.listaTabla});                
    }

  render() {
    return (
        <div>
            <h1>Tabla de Multiplicar</h1>
            <form onSubmit={this.recibirDatosForm}>
            <label>Tabla de multiplicar del :</label>
            <select ref={this.cajanumero}>
                <option>8</option>
                <option>99</option>
            </select>
            <input type="text" />
            <button>
                Ver tabla
            </button>
            <table>
                {this.state.listaTabla.map((numero, index) => {
                    return (<th key={index} text="Numero Aleatorio">{numero}</th>,
                    <td></td>);
                })}
            </table>
            </form>
        </div>
    )
  }
}

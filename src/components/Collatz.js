import React, { Component } from 'react'

export default class Collatz extends Component {
    //NECESITAMOS UNA VARIABLE DE REFERENCIA PARA CADA
    //CONTROL DE FORMULARIO QUE DESEEMOS RECUPERAR SU VALOR
    cajanumero = React.createRef();

    //CEAMOS UN STATE CON EL ARRAY LISTARES
    //PARA QUE NOS RENDERICE Y ACTUALICE
    //PORQUE SI NO EL ARRAY QUE TENEMOS DENTRO DE LA FUNCION
    //PISA A LISTARES
    state = {
        listares : []
    }
    
    //EL SIGUIENTE PASO SERA TENER UN METODO PARA CAPTURAR
    //EL SUBMIT DEL FORMULARIO
    //EL METODO DEBE RECIBIR UN EVENT(e)
    recibirDatosForm = (e) => {

        //LA PRIMERA LINEA SIEMPRE SERA
        //DETENER LA PROPAGACION DEL EVENTO!!!
        e.preventDefault();

        this.setState = {
            listares : this.state.listares.splice(0,this.state.listares.length)
        }
        //EN LAS REFERENCIAS DE OBETOS PARA CAPTURAR EL VALUE
        //SE UTILIZA referencia.current.val
        console.log(this.cajanumero.current.value);
        this.calcular(this.cajanumero.current.value);
    }

    //CREAMOS LA FUNCION DE CALCULAR CON PARAMETRO NUM
    calcular = (num) => {
        //CREAMOS VARIABLE RESULTADO PARA RELLENAR CON
        //CON EL NUMERO DE LA OPERACION
        var resultado = 0;
        //TRIPLICAMOS EL VALOR
        if (num > 1) {
            if (num % 2 == 0) {
                resultado = num / 2;
            } else {
                resultado = num * 3 + 1;
            }
            this.state.listares.push(resultado);
            this.calcular(resultado);
            this.setState({listares:this.state.listares});
        } else {
            return num;
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.recibirDatosForm}>
                    <h1>
                        Conjetura collatz
                    </h1>
                    <label>Numero:</label>
                    <input type="text" ref={this.cajanumero}></input>
                    <button>
                        Calcular
                    </button>

                    {this.state.listares.map((numero, index) => {
                        return (<li>{numero}</li>);
                    })}

                </form>
            </div>
        )
    }
}

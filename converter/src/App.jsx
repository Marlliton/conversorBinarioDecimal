import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const initialState = {
    bin: '',
    result: ''
}

export default class App extends Component {

    state = { ...initialState }

    getBin(event) {
        const bin = event.target.value
        this.setState({ bin })
    }

    convert() {
        let bin = this.state.bin
        if (bin === "") alert("Por favor, digite uma sequencia binária!")
        bin.split('').map((char) => {
            if (char !== '0' && char !== '1') {
                alert("Por favor, digite uma sequencia binária!")
                bin = ""        
            }
        })
        console.log(bin)
        const decimal = parseInt(bin, 2)
        this.setState({ result: decimal })
    }

    render() {

        return (
            <div className="container">
                <h1>Conversor de Números binários</h1>
                <div className="center">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Número binário</span>
                        </div>
                        <input type="text" className="form-control inputBin" placeholder="Digite aqui!" onChange={e => this.getBin(e)} />
                    </div>


                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text pr-5 ">Resultado</span>
                        </div>
                        <textarea readOnly="true" className="form-control" aria-label="Resultado" value={this.state.result}></textarea>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="btn btn-primary mt-3 btn-lg medio" onClick={() => this.convert()}>
                            Calcular
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}



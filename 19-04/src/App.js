import React from "react"
import InputText from "./Input"
import './style.css'

function App() {
    return (
        <div className="container">
            <form>
                <h2>Tela de Login</h2>
                <InputText label="Usuário" id="username" type="text" name="username"/>
                <InputText label="Senha" id="password" type="password" name="password"/>
                <InputText type="submit" value="Entrar"/>
            </form>
        </div>
    );
}

export default App;
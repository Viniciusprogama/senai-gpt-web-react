import "./novo-usuario.css"
import logo from "../../assets/imgs/image.webp"
import { useState } from "react"



function Newuser() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");
    const [confirmationPassword, setPassword] = useState("")

    const Nuserclick = async () => {

        let response = await fetch
        "https://senai-gpt-api.up.railway.app/users", {
            headers: {
                "content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            })

        };

        console.log(response);

        if (response.ok == true) {
            alert("login realizado com sucesso");


            let json = await response.json();

            let token = json.accessToken;
            let userId = json.user.id;

            console.log("Token;" + token);

            localStorage.setItem("meuToken", token);
            localStorage.setItem("meuId", userId);

            window.location.href = "/new-user";

        } else {

            if (response.status == 401) {

                alert("crendenciais incorretas. tente novamente");

            } else {

                alert("erro inesperado aconteceu, caso persista contate os administradores")
            }

        }

    }

    return (
        <>
            <main className="paige-contener">
                <div className="roboimage"></div>

                <div className="login-logincontener">

                    <img className="login-logo" src={logo} alt="logo do senai GPT" />

                    <h1
                        id="meutitulo"
                        className="titulo"
                    >Newuser</h1>

                    <input className="inpt" value={text} onChange={Event => setText(Event.target.value)} type="text" placeholder="Insira o seu nome" />
                    <input className="inpt" value={email} onChange={Event => setEmail(Event.target.value)} type="email" placeholder="Insira o e-mail" />
                    <input className="inpt" value={password} onChange={Event => setPassword(Event.target.value)} type="password" placeholder="Insira a senha" />
                    <input className="inpt" value={confirmationPassword} onChange={Event => setPassword(Event.target.value)} type="password" placeholder="insira a senha" />
                    <button className="login-btn" onClick={Nuserclick}>criar usuario</button>

                </div>

            </main>
        </>

    )
}

export default Newuser


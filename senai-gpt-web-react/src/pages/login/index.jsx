import "./login.css"
import logo from "../../assets/imgs/Chat.png"
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onloginclick = async () => {

    let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {
      headers: {
        "content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      })

    });

    console.log(response);

    if (response.ok == true) {
      alert("login realizado com sucesso");


      let json = await response.json();

      let token = json.accessToken;

      console.log("Token;" + token);

      localStorage.setItem("meuToken", token);

      window.location.href = "/chat"; 

    } else {

      if (response.status == 401) {

        alert("crendenciais incorretas. tente novamente");

      } else {

        alert("erro inesperado aconteceu, caso persista, caso persista contate os administradores")
      }

    }

  }



  return (
    <>
      <main className="paige-contener">
        <div className="roboimage"></div>

        <div className="logincontener">

          <img className="logo" src={logo} alt="logo do senai GPT" />

          <h1
            id="meutitulo"
            className="titulo"
          >Login</h1>

          <input className="inpt" value={email} onChange={Event => setEmail(Event.target.value)} type="email" placeholder="Insira o e-mail" />
          <input className="inpt" value={password} onChange={Event => setPassword(Event.target.value)} type="password" placeholder="Insira a senha" />

          <button className="btn" onClick={onloginclick}>Entra</button>

        </div>

      </main>
    </>

  )
}


export default Login


/*API rest get = listar/ post = enviar informacao/put = atualizar um valo/delete = deletar uma informacai */ 
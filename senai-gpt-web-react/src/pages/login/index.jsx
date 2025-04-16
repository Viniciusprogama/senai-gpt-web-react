import "./login.css"

function Login() {

  return (
    <>
      <main className="paige-contener">
        <div className="roboimage"></div>

        <div className="logincontener">

          <img className="logo" src="../assents/imgs/Chat.png" alt="logo do senai GPT" />

          <h1
          
            id="meutitulo"
            className="titulo"
          >Login</h1>

          <input className="inpt" type="email" placeholder="Insira o e-mail" />
          <input className="inpt" type="password" placeholder="Insira a senha" />

          <button className="btn">Entra</button>
        </div>


      </main>
    </>
  )
}
export default Login

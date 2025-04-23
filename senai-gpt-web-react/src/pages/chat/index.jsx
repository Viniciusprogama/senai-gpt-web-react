import "./chat.css"
import meio  from "../../assets/imgs/Chat.png"
import ChatText1 from "../../assets/imgs/ChatText.png"
import icon from "../../assets/imgs/IconSet.png"
import icon1 from "../../assets/imgs/IconSet (1).png"
import icon2 from "../../assets/imgs/IconSet (2).png"
import icon3 from "../../assets/imgs/IconSet (3).png"
import icon4 from "../../assets/imgs/IconSet (4).png"
import user from "../../assets/imgs/User.png"
import icon5 from "../../assets/imgs/IconSet (5).png"
import icon6 from "../../assets/imgs/IconSet (6).png"


function Chat() {

    return (
        <>
            <header>

                <div className="meio">

                    <img src= {meio} alt="" />
                </div>

                <div className="borda" />

                <div className="botao" >


                    <button className="btn" />
                    + New chat
                </div>

                <div className="painel-lateral">


                    <button className="botao-chat">Ai Chat Tool Ethics</button>
                    <button className="botao-chat">Ai Chat Tool Impact Writing</button>
                    <button className="botao-chat">New Chat</button>



                </div>



                <div className="painel-lateral-baixo">

                    <button className="botao-chat" >Clear conversations</button>
                    <button className="botao-chat">Light mode</button>
                    <button className="botao-chat">My account</button>
                    <button className="botao-chat">Updates & FAQ</button>
                    <button className="botao-chat">Log out</button>


                </div>




            </header>

            <body>


                <div className="exemplos">
                    <h1 className="titulos-um">Examples</h1>
                    <p className="paragrafo1">"Explain quantum computing insimple terms"</p>
                    <p className="paragrafo1">"Got any creative ideas for a 10year old's?"</p>
                    <p className="paragrafo1">"How do i make an HTTP requestin Javascript?"</p>



                </div>

                <div className="exemplosdois">
                    <h1 className="titulos-dois">Capabilites</h1>
                    <p className="paragrafo2">Remembers what user saidearlier in the conversation</p>
                    <p className="paragrafo2">Allows user to provide follow-up corrections.</p>
                    <p className="paragrafo2">traided to decline inappropriate requests.</p>



                </div>

                <div className="exemplostres">

                    <h1 className="titulos-tres">Limitations</h1>
                    <p>May occasionally generate incorret information.</p>
                    <p>May occasionally produce harmfull instructions or biased content.</p>
                    <p>Limited knowledge of world andevents after 2021.</p>



                </div>

                <div className="digitacao">

                    <input className="escreva" type="mensagem" placeholder="type mensagem" />
                    <img className="foto-baixo-escreva" src="../assents/imgs/Group.png" alt="" />
                    <img className="foto-baixo-escreva-direita" src="../assents/imgs/PaperPlaneRight.png" alt="" />




                </div>




                <div className="imagem-meio">

                    <img className="imagem-no-meio" src= {icon} alt="" />

                </div>

                <div className="imagem-meio-dois">

                    <img className="imagem-meio-segunda" src= {icon1} alt="" />

                </div>

                <div className="imagem-meio-tres">

                    <img className="imagem-meio-terceira" src= {icon2} alt="" />
                </div>

                <div className="img-painel-lateral">

                    <img className="img-tela1" src= {ChatText1}  alt="" />
                    <img className="img-tela2" src= {ChatText1} alt="" />
                    <img className="img-tela3" src= {ChatText1} alt="" />
                </div>


                <div className="img-painel-lateral-baixo">

                    <img className="img-tela-baixo1" src= {icon3} alt="" />
                    <img className="img-tela-baixo2" src= {icon4} alt="" />
                    <img className="img-tela-baixo3" src= {user} alt="" />
                    <img className="img-tela-baixo4" src= {icon5} alt="" />
                    <img className="img-tela-baixo5" src= {icon6} alt="" />
                </div>
                <main>






                </main>
                </body>

            </>


            )

   }

    export default Chat; 
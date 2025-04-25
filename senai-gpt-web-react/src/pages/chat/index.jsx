import "./chat.css"
import meio from "../../assets/imgs/Chat.png"
import ChatText1 from "../../assets/imgs/ChatText.png"
import icon from "../../assets/imgs/IconSet.png"
import group from "../../assets/imgs/Group.png"
import paper from "../../assets/imgs/PaperPlaneRight.png"
import icon1 from "../../assets/imgs/IconSet (1).png"
import icon2 from "../../assets/imgs/IconSet (2).png"
import icon3 from "../../assets/imgs/IconSet (3).png"
import icon4 from "../../assets/imgs/IconSet (4).png"
import user from "../../assets/imgs/User.png"
import icon5 from "../../assets/imgs/IconSet (5).png"
import icon6 from "../../assets/imgs/IconSet (6).png"
import { useEffect, useState } from "react"


function Chat() {

    const [chats, setChats] = useState([]);
    const [chatSelecionado, setChatSelecionado] = useState(null);
    useEffect(() => {
        getChats();
    }, []);

    const getChats = async () => {

        let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats", {

            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken")
            }

        });

        console.log(response);

        if (response.ok == true) {

            let json = await response.json();

            setChats(json);

        } else {

            if (response.status == 400)
                window.location.href = "/login";
        }
    }

    const onlogoutClick = () => {

        localStorage.clear();
        window.location.href = "/login";


    }

    const clickChat = (chat) => {
        setChatSelecionado(chat);
        console.log(chat)

    }

    return (
        <>

            <main></main>


            <body>
                <header>



                    <div className="meio">
                        <img src={meio} alt="" />
                    </div>

                    <div className="borda" />

                    <div className="botao" >


                        <button className="chatbtn" > + New chat</button>

                    </div>

                    <div className="painel-lateral">
                        <img src={ChatText1} alt="" />
                        <img src={ChatText1} alt="" />
                        <img src={ChatText1} alt="" />

                        {chats.map(chat => (
                            <button className="botao-chat" onClick={() => clickChat(chat)}>
                                {chat.chatTitle}
                            </button>
                        ))}


                    </div>


                    <div className="painell-lateral-baixo">
                        <div className="img-chat">
                            <img src={icon3} alt="" />
                            <img src={icon4} alt="" />
                            <img src={user} alt="" />
                            <img src={icon5} alt="" />
                            <img src={icon6} alt="" />

                        </div>

                        <button className="botao-chat" >Clear conversations</button>
                        <button className="botao-chat">Light mode</button>
                        <button className="botao-chat">My account</button>
                        <button className="botao-chat">Updates & FAQ</button>
                        <button className="botao-chat" onClick={() => onlogoutClick()}>Log out</button>


                    </div>




                </header>

                {chatSelecionado == null && (
                    <>  

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



                        <div className="imagem-meio">

                            <img className="imagem-no-meio" src={icon} alt="" />

                        </div>

                        <div className="imagem-meio-dois">

                            <img className="imagem-meio-segunda" src={icon1} alt="" />

                        </div>

                        <div className="imagem-meio-tres">

                            <img className="imagem-meio-terceira" src={icon2} alt="" />
                        </div>

                    </>
                )}

                

                <div className="digitacao">

                    <input className="escreva" type="mensagem" placeholder="type mensagem" />
                    <img className="foto-baixo-escreva" src={group} alt="" />
                    <img className="foto-baixo-escreva-direita" src={paper} alt="" />




                </div>




                

            </body>



        </>


    )

}

export default Chat; 
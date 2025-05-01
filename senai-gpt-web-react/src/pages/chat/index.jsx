import "./chat.css";
import logo from "../../assets/imgs/Chat.png";
import example from "../../assets/imgs/IconSet (2).png";
import { useEffect, useState } from "react";



function Chat() {

    const [chats, setChats] = useState([]);
    const [chatSelecionado, setChatSelecionado] = useState(null);


    const [userMessage, setUserMessage] = useState("")

    useEffect(() => {

        // Executada toda vez que a tela abre.
        getChats();


    }, []);

    const getChats = async () => {
        // Arrow Function
        let response = await fetch("https://senai-gpt-api.up.railway.app/chats", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken")
            }
        });

        console.log(response);

        if (response.ok == true) {

            let json = await response.json(); // Pegue as informações dos chats.

            setChats(json);

        } else {

            if (response.status == 401) {

                alert("Token inválido. Faça login novamente.");
                localStorage.clear();
                window.location.href = "/login";

            }

        }

    }

    const onLogOutClick = () => {

        localStorage.clear();
        window.location.href = "/login";

    }

    const clickChat = (chat) => {

        setChatSelecionado(chat);
        console.log(chat);

    }

    const chatGPT = async (message) => {

        

        // Configurações do endpoint e chave da API
        const endpoint = "https://ai-testenpl826117277026.openai.azure.com/";
        const apiKey = "DCYQGY3kPmZXr0lh7xeCSEOQ5oiy1aMlN1GeEQd5G5cXjuLWorWOJQQJ99BCACYeBjFXJ3w3AAAAACOGol8N";
        const deploymentId = "gpt-4"; // Nome do deployment no Azure OpenAI
        const apiVersion = "2024-05-01-preview"; // Verifique a versão na documentação

        // URL para a chamada da API
        const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;

        // Configurações do corpo da requisição
        const data = {
            messages: [{ role: "user", content: message }],
            max_tokens: 50
        };

        // Cabeçalhos da requisição
        const headers = {
            "Content-Type": "application/json",
            "api-key": apiKey
        };

        // Faz a requisição com fetch
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            const botMessage = result.choices[0].message.content;
            return botMessage;
        }

    }

    const enviarMensagem = async (message) => {

        // Mostrar chat na tela.
        console.log("Mensagem", message);

        let userId = localStorage.getItem("meuId");

        let novaMensagemUsuario = {

            text: message,
            id: crypto.randomUUID(),
            userId: userId

        };

        let novoChatSelecionado = { ...chatSelecionado };
        novoChatSelecionado.messages.push(novaMensagemUsuario);
        setChatSelecionado(novoChatSelecionado);

        let respostaGPT = await chatGPT(message);

        let novaMensagemGPT = {

            text: respostaGPT,
            id: crypto.randomUUID(),
            userId: "chatbot"

        };

        // Acrescenta a mensagem do GPT na tela
        novoChatSelecionado = { ...chatSelecionado };
        novoChatSelecionado.messages.push(novaMensagemGPT);
        setChatSelecionado(novoChatSelecionado);

        console.log("resposta", respostaGPT);

        // Salva as mensagens no banco.
        let response = await fetch("https://senai-gpt-api.up.railway.app/chats/" + chatSelecionado.id, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken"),
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                novoChatSelecionado
            )
        });

        if (response.ok == false) {

            console.log("Salvar o chat deu errado.");

        }

    }


    const novoChat = async () => {

        let novoTitulo = prompt("insira o titulo do chat")
    
        if (novoTitulo == null || novoTitulo == "") {
    
          alert("Insira um titulo")
          return
    
        }
    
          let userId = localStorage.getItem("meuId")
    
          let nChat = {
        
            chatTitle: novoTitulo,
            id: crypto.randomUUID(),
            userId: userId,
            messages: []
        
          }
        
          let response = await fetch("https://senai-gpt-api.up.railway.app/chats", {
            method: "POST",
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("meuToken"),
              "content-Type": "application/json"
            },
            body: JSON.stringify(
              nChat
            )
          });
        
          if (response.ok) {
        
            await getChats();
        
          }
    
        }
    return (
        <>
            <div className="container">

                <header className="left-panel">

                    <div className="top">

                        <button className="btn-new-chat" onClick={() => novoChat()}>+ New chat</button>
                        
                        {chats.map(chat => (
                            <button className="btn-chat" onClick={() => clickChat(chat)}>
                                <img src="../assets/imgs/chat.svg" alt="ícone de chat." />
                                {chat.chatTitle}
                            </button>
                        ))}

                    </div>

                    <div className="bottom">

                        <button className="btn-chat">Clear conversations</button>
                        <button className="btn-chat">Light mode</button>
                        <button className="btn-chat">My account</button>
                        <button className="btn-chat">Updates & FAQ</button>
                        <button className="btn-chat" onClick={() => onLogOutClick()}>Log out</button>

                    </div>

                </header>

                <main className="central-panel">

                    {chatSelecionado == null && (

                        <>

                            <div className="chat-logo">
                                <img src={logo} alt="Logo do SenaiGPT." />
                            </div>

                            <div className="dicas-container">

                                <div className="dicas-item">

                                    <h2>
                                        <img src={example} alt="Example icon." />
                                        Examples
                                    </h2>

                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>

                                </div>

                                <div className="dicas-item">

                                    <h2>
                                        <img src={example} alt="Example icon." />
                                        Examples
                                    </h2>

                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>

                                </div>

                                <div className="dicas-item">

                                    <h2>
                                        <img src={example} alt="Example icon." />
                                        Examples
                                    </h2>

                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>

                                </div>

                            </div>

                        </>

                    )}

                    {chatSelecionado != null && (

                        <>

                            <div className="chat-container">

                                <div className="chat-header">

                                    <h2>{chatSelecionado.chatTitle}</h2>



                                </div>

                                <div className="chat-messages">

                                    {chatSelecionado.messages.map(message => (
                                        <p className={"message-item " + (message.userId == "chatbot" ? "chatbot" : "")}>{message.text}</p>

                                    ))}

                                </div>

                            </div>


                        </>

                    )}

                    <div className="input-container-1">

                        <img src="../assets/imgs/mic.svg" alt="Microphone." />
                        <img src="../assets/imgs/img.svg" alt="Image." />

                        <input
                            value={userMessage}
                            onChange={event => setUserMessage(event.target.value)}
                            placeholder="Type a message."
                            type="text" />


                        <img onClick={() => enviarMensagem(userMessage)} src="../../assets/imgs/IconSet (2).png" alt="Send." />

                    </div>

                </main>

            </div>
        </>
    )

};

export default Chat;

// import "./chat.css"
// import meio from "../../assets/imgs/Chat.png"
// import ChatText1 from "../../assets/imgs/ChatText.png"
// import icon from "../../assets/imgs/IconSet.png"
// import group from "../../assets/imgs/Group.png"
// import paper from "../../assets/imgs/PaperPlaneRight.png"
// import icon1 from "../../assets/imgs/IconSet (1).png"
// import icon2 from "../../assets/imgs/IconSet (2).png"
// import icon3 from "../../assets/imgs/IconSet (3).png"
// import icon4 from "../../assets/imgs/IconSet (4).png"
// import user from "../../assets/imgs/User.png"
// import icon5 from "../../assets/imgs/IconSet (5).png"
// import icon6 from "../../assets/imgs/IconSet (6).png"
// import { useEffect, useState } from "react"


// function Chat() {

//     const [chats, setChats] = useState([]);
//     const [chatSelecionado, setChatSelecionado] = useState(null);
//     useEffect(() => {
//         getChats();
//     }, []);

//     const getChats = async () => {

//         let response = await fetch("https://senai-gpt-api.up.railway.app/chats", {

//             headers: {
//                 "Authorization": "Bearer " + localStorage.getItem("meuToken")
//             }

//         });

//         console.log(response);

//         if (response.ok == true) {

//             let json = await response.json();

//             setChats(json);

//         } else {

//             if (response.status == 400)
//                 window.location.href = "/login";
//         }
//     }

//     const onlogoutClick = () => {

//         localStorage.clear();
//         window.location.href = "/login";


//     }

//     const clickChat = (chat) => {
//         setChatSelecionado(chat);
//         console.log(chat)

//     }



//     return (
//         <>

//             <main></main>


//             <body>
//                 <header>



//                     <div className="meio">
//                         <img src={meio} alt="" />
//                     </div>

//                     <div className="borda" />

//                     <div className="botao" >


//                         <button className="chatbtn" > + New chat</button>

//                     </div>

//                     <div className="painel-lateral">
//                         <img src={ChatText1} alt="" />
//                         <img src={ChatText1} alt="" />
//                         <img src={ChatText1} alt="" />

//                         {chats.map(chat => (
//                             <button className="botao-chat" onClick={() => clickChat(chat)}>
//                                 {chat.chatTitle}
//                             </button>
//                         ))}


//                     </div>


//                     <div className="painell-lateral-baixo">
//                         <div className="img-chat">
//                             <img src={icon3} alt="" />
//                             <img src={icon4} alt="" />
//                             <img src={user} alt="" />
//                             <img src={icon5} alt="" />
//                             <img src={icon6} alt="" />

//                         </div>

//                         <button className="botao-chat" >Clear conversations</button>
//                         <button className="botao-chat">Light mode</button>
//                         <button className="botao-chat">My account</button>
//                         <button className="botao-chat">Updates & FAQ</button>
//                         <button className="botao-chat" onClick={() => onlogoutClick()}>Log out</button>


//                     </div>




//                 </header>

//                 {chatSelecionado == null && (
//                     <>

//                         <div className="exemplos">
//                             <h1 className="titulos-um">Examples</h1>
//                             <p className="paragrafo1">"Explain quantum computing insimple terms"</p>
//                             <p className="paragrafo1">"Got any creative ideas for a 10year old's?"</p>
//                             <p className="paragrafo1">"How do i make an HTTP requestin Javascript?"</p>



//                         </div>

//                         <div className="exemplosdois">
//                             <h1 className="titulos-dois">Capabilites</h1>
//                             <p className="paragrafo2">Remembers what user saidearlier in the conversation</p>
//                             <p className="paragrafo2">Allows user to provide follow-up corrections.</p>
//                             <p className="paragrafo2">traided to decline inappropriate requests.</p>



//                         </div>

//                         <div className="exemplostres">

//                             <h1 className="titulos-tres">Limitations</h1>
//                             <p>May occasionally generate incorret information.</p>
//                             <p>May occasionally produce harmfull instructions or biased content.</p>
//                             <p>Limited knowledge of world andevents after 2021.</p>



//                         </div>



//                         <div className="imagem-meio">

//                             <img className="imagem-no-meio" src={icon} alt="" />

//                         </div>

//                         <div className="imagem-meio-dois">

//                             <img className="imagem-meio-segunda" src={icon1} alt="" />

//                         </div>

//                         <div className="imagem-meio-tres">

//                             <img className="imagem-meio-terceira" src={icon2} alt="" />
//                         </div>

//                     </>
//                 )}

//                 {chatSelecionado != null && (

//                     <>


//                         <div className="chat-conteiner">


//                             <div className="chat-header">

//                                 <h2>{chatSelecionado.chatTitle}</h2>


//                             </div>

//                             <div className="chat-mensagens">



//                             </div>

//                         </div>


//                     </>
//                 )}

//                 <div className="digitacao">

//                     <input className="escreva" type="mensagem" placeholder="type mensagem" />
//                     <img className="foto-baixo-escreva" src={group} alt="" />
//                     <img className="foto-baixo-escreva-direita" src={paper} alt="" />




//                 </div>






//             </body>



//         </>


//     )

// }

// export default Chat; 
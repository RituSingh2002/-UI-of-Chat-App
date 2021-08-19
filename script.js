let sendchat=document.querySelector("#send");
let chatInputMessage=document.querySelector("#chat");
let chatList=document.querySelector(".chat-list");

chatInputMessage.addEventListener("keyup",function(e){
    console.log(e.keyCode);
    if(e.keyCode == 13){
        sendchat.click();
    }
})

sendchat.addEventListener("click",function(){
    let chat=chatInputMessage.value;
    if(chat){
        let chatDiv=document.createElement("div");
        chatDiv.classList.add("chatInputMessages");
        chatDiv.classList.add("right");
        let chatName=document.createElement('div');
        chatName.classList.add("chat-name");
        chatName.innerHTML="somesh";
        let chatText=document.createElement('div');
        chatText.classList.add('chat-text');
        chatText.innerHTML=chat;

        
        chatDiv.append(chatName);
        chatDiv.append(chatText);
        chatList.append(chatDiv);
         
        chatList.scrollTop=chatList.scrollHeight;
        chatInputMessage.value="";

    }
})
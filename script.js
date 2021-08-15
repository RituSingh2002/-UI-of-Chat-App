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
        chatDiv.classList.add("chat");
        chatDiv.classList.add("right");
        chatDiv.innerHTML=chat;
        chatList.append(chatDiv);
        chatInputMessage.value="";
        chatList.scrollTop=chatList.scrollHeight;

    }
})
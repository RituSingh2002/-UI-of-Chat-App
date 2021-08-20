let chat=document.querySelector("#chat-input");
let  send=document.querySelector("#send");
let chatBox=document.querySelector(".chat-box");

chat.addEventListener("keyup",function(e){
    console.log(e.keyCode);
    if(e.keyCode == 13){
        send.click();
    }
})

send.addEventListener("click",function(){
    let chatText=chat.value;
    if(chatText){
        let chatDiv=document.createElement("div");
        chatDiv.classList.add("chat");
        chatDiv.classList.add("right");
        let chatName=document.createElement('div');
        chatName.classList.add("chat-name");
        chatName.innerHTML="somesh";
        let chatText1=document.createElement('div');
        chatText1.classList.add('chat-text');
        chatText1.innerHTML=chatText;

        
        chatDiv.append(chatName);
        chatDiv.append(chatText1);
        chatBox.append(chatDiv);
         
        chatList.scrollTop=chatList.scrollHeight;
        chat.value="";

    }
})
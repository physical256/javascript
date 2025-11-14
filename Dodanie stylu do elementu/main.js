//const box = document.querySelector('#box');
//const akapit = document.createElement('p')
//akapit.classList.add('p');
//akapit.innerHTML = "to jest akapit";
//box.appendChild(akapit);

function sendMessage(){
    let input = document.getElementById("messageInput"). value;
    let chat = document.querySelector("#chat")
    let newMessage = document.createElement("div");
    newMessage.classList.add ("message","krzysztof");
    newMessage.innerHTML = `<img src= "krzysztof.jpg") alt= "Krzysztof Łukaśiński"> <p>${input}</p>`;
    chat.appendChild (newMessage)
    document.getElementById ("messageInput").value = ""

}

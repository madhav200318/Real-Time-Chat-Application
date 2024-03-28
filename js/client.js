const socket=('http://localhost:8000');

const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageInp')
const messagecontainer = document.querySelector(".container")


const append =(message,postion)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classlist.add('message');
    messageElement.classlist.add(position);
    messagecontainer.append(messageElement);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageinput.ariaValueMax;
    append('You: ${message}','right')
    socket.emit('send',message);
    messageinput.value =''
})

const name = prompt("Enter your name to join");
socket.emit=('new-user-joined',Name)

socket.on=('user-joined',name =>{
    append('${name} joined the chat', 'right'); 
})    

socket.on=('recieve',data =>{
    append('${data.message}: $(data.user)', 'left'); 
});

let mode = "question";


function setMode(newMode){

    mode = newMode;

    addMessage("Robot: " + 
    (mode === "repeat" 
    ? "Repeat mode activated."
    : "Question mode activated."));

}



function sendMessage(){

    let input = document.getElementById("text").value;

    if(input.trim()=="") return;


    addMessage("You: " + input);


    let reply;


    if(mode === "repeat"){

        reply = input;

    }

    else{

        reply = answerQuestion(input.toLowerCase());

    }


    setTimeout(()=>{

        addMessage("Robot: " + reply);
        speak(reply);

    },500);


    document.getElementById("text").value="";

}



function answerQuestion(question){


    if(question.includes("hello") ||
       question.includes("hi")){

        return "Hello! Nice to meet you.";

    }


    if(question.includes("your name")){

        return "I am Robo AI, your smart robot assistant.";

    }


    if(question.includes("how are you")){

        return "I am working perfectly.";

    }


    if(question.includes("what is ai")){

        return "Artificial intelligence allows computers to learn and answer questions.";

    }


    if(question.includes("time")){

        return "I can tell time after adding a clock feature.";

    }


    return "Sorry, I am still learning this question.";

}



function addMessage(message){

    let chat = document.getElementById("chat");

    let p = document.createElement("p");

    p.innerHTML = message;

    chat.appendChild(p);

    chat.scrollTop = chat.scrollHeight;

}

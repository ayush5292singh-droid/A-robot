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


    return
    
if(question.includes("date")){

    return "Today is " + new Date().toDateString();

}


if(question.includes("who made you")){

    return "I was created as a Robo AI project.";

}


if(question.includes("joke")){

    return "Why did the computer go to the doctor? Because it had a virus.";

}


if(question.includes("capital of india")){

    return "The capital of India is New Delhi.";

}


if(question.includes("largest planet")){

    return "Jupiter is the largest planet in our solar system.";

}


if(question.includes("2 plus 2")){

    return "2 plus 2 is 4.";

}


if(question.includes("thank")){

    return "You are welcome.";

}


return "I am learning more answers. Try asking another question.";


}



function addMessage(message){

    let chat = document.getElementById("chat");

    let p = document.createElement("p");

    p.innerHTML = message;

    chat.appendChild(p);

    chat.scrollTop = chat.scrollHeight;

}
// Voice input

function startVoice(){

    let recognition = new webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();


    recognition.onresult = function(event){

        let voiceText = event.results[0][0].transcript;

        document.getElementById("text").value = voiceText;

        sendMessage();

    };

}



// Robot speaking

function speak(text){

    let speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    
    let mouth = document.getElementById("mouth");

    mouth.classList.add("talking");


    speech.onend = function(){

        mouth.classList.remove("talking");

    };


    window.speechSynthesis.speak(speech);

}

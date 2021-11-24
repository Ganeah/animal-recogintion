function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AlGdYKZTB/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
dog = 0;
cat = 0;
cow = 0;
tiger = 0;
function gotResults(error,results){
    console.log("Got result");
    if(error){
        console.error(error);
    }
    else{        
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("count_dog").innerHTML = "Detected dog- "+dog + 1;
        document.getElementById("count_cat").innerHTML = "Detected cat- " + 1;
        document.getElementById("count_tiger").innerHTML = "Detected tiger- " + 1;
        document.getElementById("count_cow").innerHTML = "Detected cow- " + 1;
        document.getElementById("count_dog").style.color = "rgb(" + random_number_r +" , "+random_number_g+","+random_number_b+")";
        document.getElementById("count_cat").style.color = "rgb(" + random_number_r +" , "+random_number_g+","+random_number_b+")";
        document.getElementById("count_tiger").style.color = "rgb(" + random_number_r +" , "+random_number_g+","+random_number_b+")";
        document.getElementById("count_cow").style.color = "rgb(" + random_number_r +" , "+random_number_g+","+random_number_b+")";
        img = document.getElementById("dog");
        img1 = document.getElementById("cat");
        img2 = document.getElementById("cow");
        img3 = document.getElementById("tiger");
        img4 = document.getElementById("background");
        if(results[0].label == "Barking"){
            img.src = "dog.gif";
            img1.src = "cat.png";
            img2.src = "cow.jpg";
            img3.src = "tiger.jpg";
            img4.src = "background_noise.png";
        } else if(results[0].label == "Meowing"){
            img.src = "dog.jpg";
            img1.src = "cat.gif";
            img2.src = "cow.jpg";
            img3.src = "tiger.jpg";
            img4.src = "background_noise.png";
        } else if(results[0].label == "Mooing"){
            img.src = "dog.jpg";
            img1.src = "cat.png";
            img2.src = "cow.gif";
            img3.src = "tiger.jpg";
            img4.src = "background_noise.png";
        } else if(results[0].label == "Roaring"){
            img.src = "dog.jpg";
            img1.src = "cat.png";
            img2.src = "cow.jpg";
            img3.src = "tiger.gif";
            img4.src = "background_noise.png";
        } else{
            img.src = "dog.jpg";
            img1.src = "cat.png";
            img2.src = "cow.gif";
            img3.src = "tiger.jpg";
            img4.src = "background.gif";
        }
    }
}
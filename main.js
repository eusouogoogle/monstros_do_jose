
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/95Wd_p7mw/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}
// Passo 1:Crie uma função que se chama 'gotResults', com os parametros (error, results)
//Passo 2: Programe que: Se acontecer um error, esse error será mostrado no console.error
//Passo 3: senãooooo... será mostrado no console log (results)
function gotResults(error, results){
if (error) {

console.error(error)
}

else {


console.log(results)





    console.log(results);
    RGB_color_R = Math.floor(Math.random() * 255) + 1;
    RGB_color_b = Math.floor(Math.random() * 255) + 1;
    RGB_color_g = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    
    document.getElementById("result_label").style.color = "rgb("+RGB_color_R+","+RGB_color_b+","+RGB_color_g+")";
    document.getElementById("result_confidence").style.color= "rgb("+RGB_color_R+","+RGB_color_b+","+RGB_color_g+")";

   
  

    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')

    if (results[0].label == "palmas") {
      img.src = 'aliens-01.gif';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "sopro") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.gif';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "batida") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.gif';
      img3.src = 'aliens-04.png';
    }else{
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.gif';
    }
  }
}

function calculerMoyenneModule1() {
    var noteModulecc1 = parseFloat(document.getElementById("CC1").value);
    var noteModuleef1 = parseFloat(document.getElementById("EF1").value);
    var resultatElement = document.getElementById("moyenneModule1");
  
    if (noteModulecc1 < 0 || noteModulecc1 > 20 || noteModuleef1 < 0 || noteModuleef1 > 20) {
      resultatElement.innerHTML = "Les valeurs saisies sont incorrectes";
      resultatElement.classList.remove("text-red");
      resultatElement.classList.remove("text-green");
    } else {
      var moyenneModule1 = (noteModulecc1 * 0.40) + (noteModuleef1 * 0.60);
      resultatElement.innerHTML = "" + moyenneModule1.toFixed(2);
  
      if (moyenneModule1 >= 10) {
        resultatElement.classList.remove("text-red");
        resultatElement.classList.add("text-green");
      } else {
        resultatElement.classList.remove("text-green");
        resultatElement.classList.add("text-red");
      }
    }
  }

  function calculerMoyenneModule2() {
    var noteModulecc2 = parseFloat(document.getElementById("CC2").value);
    var noteModuleef2 = parseFloat(document.getElementById("EF2").value);
    var resultatElement = document.getElementById("moyenneModule2");
  
    if (noteModulecc2 < 0 || noteModulecc2 > 20 || noteModuleef2 < 0 || noteModuleef2 > 20) {
      resultatElement.innerHTML = "Les valeurs saisies sont incorrectes";
      resultatElement.classList.remove("text-red");
      resultatElement.classList.remove("text-green");
    } else {
      var moyenneModule2 = (noteModulecc2 * 0.40) + (noteModuleef2 * 0.60);
      resultatElement.innerHTML = "" + moyenneModule2.toFixed(2);
  
      if (moyenneModule2 >= 10) {
        resultatElement.classList.remove("text-red");
        resultatElement.classList.add("text-green");
      } else {
        resultatElement.classList.remove("text-green");
        resultatElement.classList.add("text-red");
      }
    }
  }

  function calculerMoyenneModule3() {
    var noteModulecc3 = parseFloat(document.getElementById("CC3").value);
    var noteModuleef3 = parseFloat(document.getElementById("EF3").value);
    var resultatElement = document.getElementById("moyenneModule3");
  
    if (noteModulecc3 < 0 || noteModulecc3 > 20 || noteModuleef3 < 0 || noteModuleef3 > 20) {
      resultatElement.innerHTML = "Les valeurs saisies sont incorrectes";
      resultatElement.classList.remove("text-red");
      resultatElement.classList.remove("text-green");
    } else {
      var moyenneModule3 = (noteModulecc3 * 0.40) + (noteModuleef3 * 0.60);
      resultatElement.innerHTML = "" + moyenneModule3.toFixed(2);
  
      if (moyenneModule3 >= 10) {
        resultatElement.classList.remove("text-red");
        resultatElement.classList.add("text-green");
      } else {
        resultatElement.classList.remove("text-green");
        resultatElement.classList.add("text-red");
      }
    }
  }

  function calculerMoyenneModule4() {
    var noteModulecc4 = parseFloat(document.getElementById("CC4").value);
    var noteModuleef4 = parseFloat(document.getElementById("EF4").value);
    var resultatElement = document.getElementById("moyenneModule4");
  
    if (noteModulecc4 < 0 || noteModulecc4 > 20 || noteModuleef4 < 0 || noteModuleef4 > 20) {
      resultatElement.innerHTML = "Les valeurs saisies sont incorrectes";
      resultatElement.classList.remove("text-red");
      resultatElement.classList.remove("text-green");
    } else {
      var moyenneModule4 = (noteModulecc4 * 0.40) + (noteModuleef4 * 0.60);
      resultatElement.innerHTML = "" + moyenneModule4.toFixed(2);
  
      if (moyenneModule4 >= 10) {
        resultatElement.classList.remove("text-red");
        resultatElement.classList.add("text-green");
      } else {
        resultatElement.classList.remove("text-green");
        resultatElement.classList.add("text-red");
      }
    }
  }
  

  function calculerMoyenneModule5() {
    var noteModulecc5 = parseFloat(document.getElementById("CC5").value);
    var noteModuleef5 = parseFloat(document.getElementById("EF5").value);
    var resultatElement = document.getElementById("moyenneModule5");
  
    if (noteModulecc5 < 0 || noteModulecc5 > 20 || noteModuleef5 < 0 || noteModuleef5 > 20) {
      resultatElement.innerHTML = "Les valeurs saisies sont incorrectes";
      resultatElement.classList.remove("text-red");
      resultatElement.classList.remove("text-green");
    } else {
      var moyenneModule5 = (noteModulecc5 * 0.40) + (noteModuleef5 * 0.60);
      resultatElement.innerHTML = "" + moyenneModule5.toFixed(2);
  
      if (moyenneModule5 >= 10) {
        resultatElement.classList.remove("text-red");
        resultatElement.classList.add("text-green");
      } else {
        resultatElement.classList.remove("text-green");
        resultatElement.classList.add("text-red");
      }
    }
  }

  function calculerMoyenneModule6() {
    var noteModulecc6 = parseFloat(document.getElementById("CC6").value);
    var noteModuleef6 = parseFloat(document.getElementById("EF6").value);
    var resultatElement = document.getElementById("moyenneModule6");
  
    if (noteModulecc6 < 0 || noteModulecc6 > 20 || noteModuleef6 < 0 || noteModuleef6 > 20) {
      resultatElement.innerHTML = "Les valeurs saisies sont incorrectes";
      resultatElement.classList.remove("text-red");
      resultatElement.classList.remove("text-green");
    } else {
      var moyenneModule6 = (noteModulecc6 * 0.40) + (noteModuleef6 * 0.60);
      resultatElement.innerHTML = "" + moyenneModule6.toFixed(2);
  
      if (moyenneModule6 >= 10) {
        resultatElement.classList.remove("text-red");
        resultatElement.classList.add("text-green");
      } else {
        resultatElement.classList.remove("text-green");
        resultatElement.classList.add("text-red");
      }
    }
  }

  function calculerMoyenneModule7() {
    var noteModuleef7 = parseFloat(document.getElementById("EF7").value);
    var resultatElement = document.getElementById("moyenneModule7");
  
    if (noteModuleef7 < 0 || noteModuleef7 > 20) {
      resultatElement.innerHTML = "Les valeurs saisies sont incorrectes";
      resultatElement.classList.remove("text-red");
      resultatElement.classList.remove("text-green");
    } else {
      var moyenneModule7 = noteModuleef7;
      resultatElement.innerHTML = "" + moyenneModule7.toFixed(2);
  
      if (moyenneModule7 >= 10) {
        resultatElement.classList.remove("text-red");
        resultatElement.classList.add("text-green");
      } else {
        resultatElement.classList.remove("text-green");
        resultatElement.classList.add("text-red");
      }
    }
  }

  function calculerMoyenneGenerale() {
    event.preventDefault(); 
    var moyenneModule1 = parseFloat(document.getElementById("moyenneModule1").innerHTML);
    var moyenneModule2 = parseFloat(document.getElementById("moyenneModule2").innerHTML);
    var moyenneModule3 = parseFloat(document.getElementById("moyenneModule3").innerHTML);
    var moyenneModule4 = parseFloat(document.getElementById("moyenneModule4").innerHTML);
    var moyenneModule5 = parseFloat(document.getElementById("moyenneModule5").innerHTML);
    var moyenneModule6 = parseFloat(document.getElementById("moyenneModule6").innerHTML);
    var moyenneModule7 = parseFloat(document.getElementById("moyenneModule7").innerHTML);
  
    var moyenneGenerale = ((moyenneModule1*3)+(moyenneModule2*3)+(moyenneModule3*3)+(moyenneModule4*2)+(moyenneModule5*2)+(moyenneModule6*2)+(moyenneModule7)) / 16;
  
    var resultatElement = document.getElementById("moyenneGenerale");
    resultatElement.innerHTML = moyenneGenerale.toFixed(2);
  }
  

  var activeTextBlock = null;

function toggleText(blockNumber) {
  var textBlock = document.getElementById("textBlock" + blockNumber);

  if (textBlock.style.display === "none") {
    if (activeTextBlock !== null) {
      activeTextBlock.style.display = "none";
    }
    textBlock.style.display = "block";
    activeTextBlock = textBlock;
  } else {
    textBlock.style.display = "none";
    activeTextBlock = null;
  }
}
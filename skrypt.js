function kalkulatorBMI() {

    let wzrost = parseFloat(document.getElementById("wzrost").value); 
    let waga = parseFloat(document.getElementById("waga").value); 

  
    if (isNaN(wzrost) || isNaN(waga) || wzrost <= 0 || waga <= 0) {
      document.getElementById("wynik").innerHTML = "Proszę wprowadzić poprawne dane!";
      return;
    }

   
    let wzrostM = wzrost / 100;

    let bmi = waga / (wzrostM * wzrostM);

    if (bmi < 18.5) {
        document.getElementById("wynik").innerHTML = "Twoje BMI wynosi: " + bmi.toFixed(2) + " Niedowaga";
    } 
    else if (bmi >= 18.5 && bmi < 24.9) {
        document.getElementById("wynik").innerHTML = "Twoje BMI wynosi: " + bmi.toFixed(2) + " Waga prawidłowa.";
    } 
    else if (bmi >= 25 && bmi < 29.9) {
        document.getElementById("wynik").innerHTML = "Twoje BMI wynosi: " + bmi.toFixed(2) + " Nadwaga.";
    } 
    else {
        document.getElementById("wynik").innerHTML = "Twoje BMI wynosi: " + bmi.toFixed(2) + " Otyłość.";
    }

   
   
  }






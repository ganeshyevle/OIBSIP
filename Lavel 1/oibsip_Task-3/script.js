function cal1() {
   function CtoF(celsius) {
      var fahrenheit = Math.round((celsius * (9 / 5)) + 32);
      return fahrenheit;
   }

   function FtoC(fahrenheit) {
      var celsius = Math.round((fahrenheit - 32) * (5 / 9));
      return celsius;
   }
   var tempS = document.getElementById("tempselect");
   var vTemp = tempS.options[tempS.selectedIndex].value;
   var nTemp = document.getElementById("tempinput").value;
   var result;

   if (vTemp == 1) {
      result = CtoF(nTemp);
      document.getElementById("result").innerHTML = "Result: " + result + "°F";
   } else {
      result = FtoC(nTemp);
      document.getElementById("result").innerHTML = "Result: " + result + "°C";
   }

}
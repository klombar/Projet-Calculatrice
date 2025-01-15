const button = document.querySelectorAll('button');
const screen = document.querySelector('.screen');


button.forEach(button => {
   button.addEventListener("click", () => {
      const value = button.textContent;

      if (value === "C") {
         screen.value = "";

      } else if (value === "=") {
         try {
            const expression = screen.value
               .replace(/(\d+)%/g, (_, num) => `(${num} / 100)`)
               .replace(/√(\d+(\.\d+)?)/g, (_, num) => `Math.sqrt(${num})`);
            const result = eval(expression); 
            screen.value = result; 
         } catch (error) {
            screen.value = "Error";
         }
      } else if ( value === "√" ) {
         screen.value += "√";
      } else if (value === "%") {
         screen.value += "%";
       }
      else {
         if (screen.value === "0" || screen.value === "Error") {
            screen.value = value;
         } else {
            screen.value += value;
      }}
});
});


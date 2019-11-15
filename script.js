// Write your JavaScript code here!
window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let i = Math.floor(Math.random()*json.length);
         document.getElementById("missionTarget").innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[i].name}</li>
               <li>Diameter: ${json[i].diameter}</li>
               <li>Star: ${json[i].star}</li>
               <li>Distance from Earth: ${json[i].distance}</li>
               <li>Number of Moons: ${json[i].moons}</li>
            </ol>
            <img src="${json[i].image}">
         `
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel");
      let cargoMassInput = document.querySelector("input[name=cargoMass");
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required.");
         event.preventDefault();
      }else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)) {
         alert("Invalid input.");   
         event.preventDefault();
      }else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Invalid input.");
         event.preventDefault();
      }

      document.getElementById("pilotStatus").setAttribute("name", pilotNameInput.value);
      document.getElementById("copilotStatus").setAttribute("name", copilotNameInput.value);

      if(fuelLevelInput.value < 10000){
         document.getElementById("faultyItems").style.visibility="visible";
         document.getElementById("launchStatus").innerHTML = "Shutle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("fuelStatus").innerHTML = "Insufficient fuel";

         event.preventDefault();
      }else if(cargoMassInput.value > 10000){
         document.getElementById("faultyItems").style.visibility="visible";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
         
         event.preventDefault();
      }else{
         document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
         document.getElementById("launchStatus").style.color = "green";
      }
   });

    
})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

$(document).ready(function(){
  
  //Variables
  var selectedChoice = "";
  var defaultText = "Please select an answer.";
  var alertText = defaultText;
  var defaultHintButtonLabel = "Go to Relevant Video Clip";
  var experimentButtonLabel = "Experiment on Your Own";
  var gearGeneratorURL = "http://geargenerator.com/#200,200,100,10,1,1,10100.500000000648,2,1,18,1.8,10,27,-90,0,0,52,5.2,10,27,-60,0,0,2,-497";
  var drivetrainPictureURL = "https://drive.google.com/file/d/1MN0dEQrWwF60tJzEfnbYEQbuP3F7lBkq/view?usp=sharing";
  
  //Functions
  $("#radioA").click(function(){
          selectedChoice = "A";
          $("#gotovideosection").html(experimentButtonLabel);
          alertText = "Correct! If you want to try it yourself with some virtual gears, click on the ‘Experiment on Your Own’ button below.";
  });
  
  $("#radioB").click(function(){
          selectedChoice = "B";
          $("#gotovideosection").html(experimentButtonLabel);
          alertText = "Not quite. Your front gear matters! The size of your front gear affects how many times the back gear spins. If you bike, why would you shift to a bigger front gear? To go faster. Then, what does that mean for the back wheel and the back gear? Your back wheel and back gear are spinning more per pedal. \n\nNow, see it for yourself. Follow these steps: \n1) Click the ‘Experiment on Your Own’ button. \n2) imagine that one is your ‘front gear’ and the other is your ‘back gear,’ \n3) see what happens to the number of rotations your ‘back gear’ makes when you change the number of teeth in the front gear.";
  });
  
  $("#radioC").click(function(){
          selectedChoice = "C";
          document.getElementById("gotovideosection").style.display = "none";
          alertText = "Not quite. This is what would happen if your pedal was attached to the back gear, and if you were counting how many times the front gear spins!";
  });
  
  $("#radioD").click(function(){
          selectedChoice = "D";
          $("#gotovideosection").html("See Picture of Drivetrain");
          alertText = "Incorrect. Pedaling makes the front gear spin. The chain connects both gears, so when the front gear spins, the back gear will also spin. \nClick on the ‘See Picture of Drivetrain’ button below for a helpful visual.";
  });
  
  $("#radioE").click(function(){
          selectedChoice = "E";
          $("#gotovideosection").html(defaultHintButtonLabel);
          alertText = "A gear combination represents the sizes of the two gears that your chain is sitting on.  The first number represents the size of the front gear, and the second number represents the size of the back gear.  In the 52-18 combination, the chain is sitting on a front gear with 52 teeth and a back gear with 18 teeth. \nClick on 'Go to Relevant Video Clip' to revisit the video explanation.";
  });
  
  $("#submit").click(function(){
        alert(alertText);
        if (alertText != defaultText) {
        	document.getElementById("exitform").style.display = "inline";
        	if (selectedChoice != "C") {
	            document.getElementById("gotovideosection").style.display = "inline";
	        }
       	}
  });
  
  function closeQuiz() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("showquiz").style.display = "inline";
    document.getElementById("returntovideoatquiz").style.display = "inline";
  }
  
  $("#exitform").click(function(){
    closeQuiz();
  });
  
  $("#gotovideosection").click(function(){
       if (selectedChoice == "A") {
         window.open(gearGeneratorURL);
         closeQuiz();
       }
       else if (selectedChoice == "B") {
         window.open(gearGeneratorURL);
         closeQuiz();
       }
       else if (selectedChoice == "D") {
         window.open(drivetrainPictureURL);
         closeQuiz();
       }
       else if (selectedChoice == "E") {
         setCurrentTime(1);
         closeQuiz();
       }
  });
  
  
});
//health variables
var playerHealth = 1050;
var easyEnemyHealth = 100;
var medEnemyHealth = 150;
var hardEnemyHealth = 200;
var hardEnemyHealth2 = 200;
var bossHealth = 300;
var easyList = [1, 2, 3, 4, 5, 6];
var mediumList = [1, 2, 3, 4, 5, 6];
var hardList = [1, 2, 3, 4, 5, 6];
var bossList = [1, 2, 3, 4, 5, 6,];
//onEvent for the shoot buttons
onEvent("easyShoot", "click", function( ) {
  healthLabel();
  if (easyList[(randomNumber(0,easyList.length-1))]<=4) {
  setText("easyLabel","enemy hit!");
  easyEnemyHealth = easyEnemyHealth-25;
  if (easyEnemyHealth <= 0){
    hideElement,"mig29";
    setScreen("Medium");
    healAll();
    }
  } else {
    setText("easyLabel", "enemy attacked you!");
    playerHealth = playerHealth-25;
    if (playerHealth <= 0){
     healAll();
     clearHealthLabel();
     setText("easyLabel", " ");
     setScreen("mainMenu");
    }
  }
});
onEvent("medShoot", "click", function(){
  healthLabel();
  if (mediumList[(randomNumber(0,mediumList.length-1))]<=3) {
  setText("medLabel", "enemy hit!");
  medEnemyHealth = medEnemyHealth-25;
  if (medEnemyHealth <= 0){
    hideElement,"image2";
    setScreen("Hard");
    hideElement("su57");
    healAll();
  }
  } else {
    setText("medLabel","enemy attacked you!");
    playerHealth = playerHealth-25;
    if (playerHealth <= 0){
     healAll();
     clearHealthLabel();
     setText("medLabel", " ");
     setScreen("mainMenu");
    }
  }
});
onEvent("hardShoot","click", function(){
  healthLabel();
if (hardList[(randomNumber(0,hardList.length-1))]<=2) {
  setText("hardLabel", "enemy hit!");
  hardEnemyHealth = hardEnemyHealth-25;
  if (hardEnemyHealth <= 0){
    hideElement("su35");
    showElement("su57");
    hardEnemyHealth2 = hardEnemyHealth2-25;
  }
  if (hardEnemyHealth2 <= 0){
      hideElement("su57");
      setScreen("Boss");
      healAll();
  }
} else {
  setText("hardLabel", "enemy attacked you!");
  playerHealth = playerHealth-25;
  if (playerHealth <= 0){
  healAll();
  clearHealthLabel();
  setText("hardLabel", " ");
  setScreen("mainMenu");
  }
}
});
onEvent("bossShoot", "click", function( ) {
  healthLabel();
  if (bossList[(randomNumber(0,bossList.length-1))]==1) {
  setText("bossLabel","enemy hit!");
  bossHealth = bossHealth-50;
  if (bossHealth <= 0){
    hideElement,"adfx01";
    setScreen("trueWin");
    healAll();
    }
  } else {
    setText("bossLabel", "enemy attacked you!");
    playerHealth = playerHealth-25;
    if (playerHealth <= 0){
     healAll();
     clearHealthLabel();
     setText("bossLabel", " ");
     setScreen("mainMenu");
    }
  }
});
//onEvents for the missle buttons
onEvent("easyMissle", "click", function(){
  healthLabel();
  if (easyList[(randomNumber(0,easyList.length-1))]<=5) {
  setText("easyLabel", "missle hit!");
    easyEnemyHealth = easyEnemyHealth-25;
    if (easyEnemyHealth <= 0){
    hideElement,"mig29";
    setScreen("Medium");
    healAll();
    }
  } else {
    setText("easyLabel","enemy used flares!");
    playerHealth = playerHealth-10;
    if (playerHealth <= 0){
    healAll();
    clearHealthLabel();
    setText("easyLabel", " ");
    setScreen("mainMenu");
  }
}});
onEvent("medMissle", "click", function(){
  healthLabel();
  if (mediumList[(randomNumber(0,mediumList.length-1))]<=4) {
  setText("medLabel", "missle hit!");
  medEnemyHealth = medEnemyHealth-25;
    if (getText("medEnemyHealthLabel") <= 0){
    hideElement,"mig31";
    setScreen("Medium");
    healAll();
    }
  } else {
    setText("medLabel","enemy used flares!");
      playerHealth = playerHealth-10;
    if (playerHealth <= 0){
    healAll();
    clearHealthLabel();
    setText("medLabel", " ");
    setScreen("mainMenu");
  }
}});
onEvent("hardMissle", "click", function(){
  healthLabel();
  if (hardList[(randomNumber(0,hardList.length-1))]<=3) {
  setText("hardLabel", "missle hit!");
    hardEnemyHealth = hardEnemyHealth-25;
    if (hardEnemyHealth <= 0){
    hideElement,"su35";
    showElement("su57");
    hardEnemyHealth2 = hardEnemyHealth2-25;
  }
  if (hardEnemyHealth2 <= 0){
      hideElement("su57");
      healAll();
      setScreen("Boss");
  }
  } else {
    setText("hardLabel", "enemy used flares!");
      playerHealth = playerHealth-10;
      if (playerHealth <= 0){
      healAll();
      clearHealthLabel();
      setText("hardLabel", " ");
      setScreen("mainMenu");
  }
}});
onEvent("bossMissle", "click", function(){
  healthLabel();
  if (bossList[(randomNumber(0,bossList.length-1))]==1) {
    setText("bossLabel", "missle hit!");
    bossHealth = bossHealth-25;
    if (bossHealth <= 0){
      hideElement,"adfx01";
      healAll();
      setScreen("trueWin");
    }
  } else {
    setText("bossLabel", "enemy used flares!");
    playerHealth = playerHealth-25;
    if (playerHealth <= 0){
      healAll();
      clearHealthLabel();
      setText("bossLabel", " ");
      setScreen("mainMenu");
    }
  }
});
//onEvents for the difficulty selection and playing again
onEvent("easyButton", "click", function( ) {
  setScreen("Easy");
  showElement("mig29");
});
onEvent("mediumButton", "click", function( ) {
  setScreen("Medium");
  showElement("mig31");
});
onEvent("hardButton", "click", function( ) {
  setScreen("Hard");
  showElement("su35");
  hideElement("su57");
});
onEvent("homeButton","click", function(){
  setScreen("mainMenu");
});
onEvent("button1","click",function(){
  open("https://globe.airplanes.live/");
});
onEvent("goToBossButton","click",function(){
  setScreen("Boss");
});
onEvent("homeButton2","click",function(){
  setScreen("mainMenu");
});
//heal all function
function healAll() {
  playerHealth = 1050;
  easyEnemyHealth = 100;
  medEnemyHealth = 150;
  hardEnemyHealth = 200;
}
//Health label function
function healthLabel() {
  setText("easyPlayerHealthLabel", "" + playerHealth);
  setText("medPlayerHealthLabel", "" + playerHealth);
  setText("hardPlayerHealthLabel", "" + playerHealth);
  setText("bossPlayerHealthLabel", "" + playerHealth);
  setText("easyEnemyHealthLabel", "" + easyEnemyHealth);
  setText("medEnemyHealthLabel", "" + medEnemyHealth);
  setText("bossHealthLabel", "" + bossHealth);
  if(hardEnemyHealth<=0){
    setText("hardEnemyHealthLabel", "" + hardEnemyHealth2);
  }else{
    setText("hardEnemyHealthLabel", "" + hardEnemyHealth);
  }
  
}
function clearHealthLabel() {
  setText("easyPlayerHealthLabel", " ");
  setText("medPlayerHealthLabel", " ");
  setText("hardPlayerHealthLabel", " ");
  setText("bossPlayerHealthLabel", " ");
  setText("easyEnemyHealthLabel", " ");
  setText("medEnemyHealthLabel", " ");
  setText("hardEnemyHealthLabel", " ");
  setText("bossHealthLabel", " ");
}

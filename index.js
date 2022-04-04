function scuberGreetingForFeet(rideFeet){
  // Write your code here!
  let result
  if(rideFeet <= 400) {
    result = 'This one is on me!';
  }else if(rideFeet > 400 && rideFeet <= 2000) {
    result = 'That will be twenty bucks.';
  }else if(rideFeet > 2000 && rideFeet <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  }else if(rideFeet > 2500) {
    result = 'No can do.';
  }

  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  let result = (city == 'NYC') ? 'Ok, sounds good.' : 'No go.';
  

  return result
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let result
  switch(result) {
    case tip == 'generous':
      console.log('Thank you so much.');
  }
}
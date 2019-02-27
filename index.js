function theTruth() {return true}
function sayHey() {return 'Hey!'}
function sayHeyFriend(friend) {
  return `Hey, ${friend}!`
}
function favoriteIceCream(cream) {
  return `I love ${cream}`
}
function shouting(text) {
  return text.toUpperCase() ;
}
function roundDown(number) {
  var whole = parseInt(`${number}`, 10 ) ;
  var bigger ;
  var smaller ;
  var final ;
  // (whole > number)? bigger = whole ; smaller = number : bigger = whole ; smaller = number ;
  if (whole > number) {final = whole - 1}
  else {final = whole}
  return final ;
}

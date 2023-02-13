document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

if( day == "Saturday" || day == "Sunday"){
  alert("It's the Weekend!")
}
else if( day == "Tuesday" || day == "Thursday"){
  alert("We're chilling with Leon on Stream!")
}
else{
  alert("It's a boring day :(")
}

}

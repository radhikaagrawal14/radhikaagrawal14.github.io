var changed = false; 


function toggleClass() {
  if(changed)
  {
    document.getElementById("card").className = "card";
  }
  else
  {
    document.getElementById("card").className = "card flipped";
  }
  changed=!changed;
}
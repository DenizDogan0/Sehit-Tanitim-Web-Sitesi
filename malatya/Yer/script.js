function toggleAccordion(element) {
  var content = element.nextElementSibling; 
  var parent = element.parentElement; 

  if (content.style.maxHeight) {
    content.style.maxHeight = null; 
    parent.classList.remove('active'); 
  } else {
    content.style.maxHeight = content.scrollHeight + "px"; 
    parent.classList.add('active'); 
  }
}




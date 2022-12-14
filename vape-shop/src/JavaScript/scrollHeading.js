document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () =>{
    let scrollTop = window.scrollY;
    try {
      if (scrollTop >= 20){
        document.getElementById("heading").classList.add("scroll");
      } else{
        document.getElementById("heading").classList.remove("scroll");
      }
    } catch (err) {}

  });
});
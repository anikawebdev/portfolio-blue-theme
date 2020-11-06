document.addEventListener("DOMContentLoaded", function() {
    console.log("document is ready");
  
    /*
     * Flickity
     */
  
    // add carousel js
    let elem = document.querySelector(".main-carousel");
    let flkty = new Flickity(elem, {
      // options
      cellAlign: "center",
      contain: true,
      wrapAround: true,
      groupCells: 1
    });
  
    /*
     * Email Validation
     */
  
    // check email input
  }); // end of doc ready
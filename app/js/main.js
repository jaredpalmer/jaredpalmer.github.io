$(function() {
    $('.photoset-grid-basic').photosetGrid({
      // Set the gutter between columns and rows
      gutter: '5px',
      // Manually set the grid layout
      // Wrap the images in links
      highresLinks: false,
      // Asign a common rel attribute
      rel: 'print-gallery',

      onInit: function(){},
      onComplete: function(){
          // Show the grid after it renders
          $('.photoset-grid-basic').css({
              'visibility': 'visible'
         });
         
         $('.photoset-grid-basic a').fluidbox();
      }
    });
});

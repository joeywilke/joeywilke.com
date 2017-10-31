// ------------------------------------ //
// Variables
// -------------------------------------//

$.featherlight.defaults.closeOnClick = 'anywhere';

$('.more').readmore({
  speed: 75,
  lessLink: '<a href="#">Read less</a>',
  collapsedHeight : 80,
});

// ------------------------------------ //
// Stuffs
// -------------------------------------//
$(document).ready(function(){
  // initPage();
  scrollToTop();
  externalLinks();
  projectFilter();
});


// ------------------------------------ //
// Initialize Page
// -------------------------------------//

// var initPage = function(){
//   // stickyHeader();
//   scrollToTop();
//   loadFilter();
//   // externalLinks();
//   // projectFilter();
//   $('.heroImg').imagefill(); 
// };



// ------------------------------------------------------------ //
// Functions
// ------------------------------------------------------------ //



// ------------------------------------ //
// Add target="_blank" to all external links
// -------------------------------------//
var externalLinks = function(){
  $('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if (!a.test(this.href)) {
      $(this).attr("target","_blank");
   }
  });
};




var projectFilter = function(){

  $('#projFilter div').click(function() {
    // fetch the class of the clicked item
    var ourClass = $(this).attr("data-filter");

    // reset the active class on all the buttons
    $('#projFilter div').removeClass('active');
    // update the active state on our clicked button
    $(this).addClass('active');

    if(ourClass == 'all') {
      // show all our items
      $('#projects').children('li.project').addClass('highlight');
    }
    else {
      // hide all elements that don't share ourClass
      $('#projects').children('li').removeClass('highlight');
      // show all elements that do share ourClass
      $('#projects').children('li.' + ourClass).addClass('highlight');
    }
    return false;
  });

  // var $buttons = $('.filter'),
  //   $container = $('#projects'),
  //   $items = $container.find('.project');

  // $buttons.on('click', function(){
  //   var $button = $(this),
  //     filterSelector = $button.attr('data-filter');

  //   $button
  //     .addClass('active')
  //     .siblings()
  //     .removeClass('active');

  //   $items
  //     .removeClass('show')
  //     .filter(filterSelector)
  //     .addClass('show');
  // });
};


// ------------------------------------ //
// Scroll to top of page
// -------------------------------------//
var scrollToTop = function(){
  $('#scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 400);
    return false;
  });
};


// ------------------------------------ //
// Remove hash from URL
// -------------------------------------//
var removeHash = function(){
    // Remove the # from the hash, as different browsers may or may not include it
    // var hash = location.hash.replace('#','');

    // if(hash != ''){
    //     // Show the hash if it's set
    //     alert(hash);

    //     // Clear the hash in the URL
    //     location.hash = '';
    // }
    history.pushState("", document.title, window.location.pathname + window.location.search);
};

// ------------------------------------ //
// Mix It Up Initialize
// -------------------------------------//
var loadFilter = function(){

    // check if there is a url hash, and if so,
    // save it as a variable and prepend a '.' to the start - e.g. '.blue'
    // else, set variable as the default "all"
    var filterOnLoad = window.location.hash ? +(window.location.hash).replace('#','') : 'all';

    removeHash();


};



// ------------------------------------------------------------ //
// Smooth State Initialize
// ------------------------------------------------------------ //
// $(function(){
//   'use strict';
//   var $page = $('#main'),
//       options = {
//         prefetch: true,
//         cacheLength: 2,
//         onStart: {
//           duration: 350, // Duration of our animation
//           render: function ($container) {
//             // Add your CSS animation reversing class
//             $container.addClass('is-exiting');
//             // Restart your animation
//             smoothState.restartCSSAnimations();
//             // Unbind mixitup to prevent double binding
//             // $('#projList').mixItUp('destroy');
//           }
//         },
//         onReady: {
//           duration: 0,
//           render: function ($container, $newContent) {
//             // Remove your CSS animation reversing class
//             $container.removeClass('is-exiting');
//             // Inject the new content
//             $container.html($newContent);
//             // Smooth scroll to top link 
//           }
//         },
//         onAfter: function($container, $newContent) {
//            picturefill();
//            externalLinks();
//            picturefill();
//            loadFilter();
//            projectFilter();
//         }
//       },
//       smoothState = $page.smoothState(options).data('smoothState');
// })(jQuery);



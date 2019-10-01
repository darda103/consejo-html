// data filter
$(document).ready(function(){
    var containerEl = document.querySelector('.item');
    var mixer = mixitup(containerEl);
})
// active button 
$(document).on('click', 'button', function(){
	$(this).addClass('active').siblings().removeClass('active')
})
// image pop up
$(document).ready(function(){
	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': false,
      'disableScrolling': true,
      'showImageNumberLabel': false
    })
})
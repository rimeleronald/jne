function openGallery(evt, galleryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("gallery-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(galleryName).style.display = "block";
}
$(function() {
	$("#defaultOpen").click();
})

$(document).ready(function() {

    $(window).on('resize', function() {
        $('.gallerysub-sub').height( $('.gallerysub-sub').width() );
    }).trigger('resize');


    $(window).on('resize', function() {
        $('.subnews-eventbox-subimg2-container').height( $('.subnews-eventbox-subimg2-container').width() );
    }).trigger('resize');



    $(window).on('resize', function() {
        $('.subnews-eventbox-subimg1-container').height( $('.subnews-eventbox-subimg1-container').width() );
    }).trigger('resize');

    //lightbox image click
    $('.lb-container').on('click', function(event) {
    	event.preventDefault();
    	var container = $(this);
    	var img = $(container.children('.lb-image')[0]).attr('src');
    	window.open(img, '_blank');
    });

});

lightbox.option({
    'resizeDuration': 0,
   	'wrapAround': true,
  	'showImageNumberLabel': false,
  	'fitImagesInViewport': true,
  	'alwaysShowNavOnTouchDevices': true
})


$(function() {
	$('.carousel').carousel({
  interval: 7000
});

	$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});

	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); 

});

 jQuery(function() {

  $('#employee_table').DataTable();
  $('#projects_history_table').dataTable();
  $('#team_members_table').dataTable();

 });

 $(document).ready(function(){

  var date_input=$('.datePicker');
  var options={
    format: 'dd-mm-yyyy',
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);

  $.uploadPreview({
    input_field: "#image-upload",
    preview_box: "#image-preview",
    label_field: "#image-label"
  });

  $("#image-upload").on("click", function() {
    var backgroundImage = $('#image-preview').css('background-image');
    var imageName = backgroundImage.replace('url(','').replace(')','').replace(/\"/gi, "").split('/').pop();
    $('#imagepreview').attr('src', '/'+imageName);
    $('#editProfilePopUp').modal('show');
  });

});
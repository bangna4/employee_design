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

	  $('#employee_table').DataTable();

  });


// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap
$(document).ready(function() {
	var instr_counter = 0;
	var genre_counter = 0;
	var seeking_counter = 0;


	$('#edit_profile').click(function() {
		var name = $('#name').text();
		var city = $('#city').text();
		var email = $('#email').text();
		var bio = $('#bio').text();
		var id = $('#user_id').val();
		var token = $('#token').val();
		var inband = $('#inband_value').val();
		$('#name').html('<input type="text" value="'+name+'"">');
		$('#city').html('<input type="text" value="'+city+'"">');
		$('#email').html('<input type="text" value="'+email+'"">');
		$('#bio').html('<textarea type="text">'+bio+'</textarea>');
		//Set the default value of the radio buttons depending on the user value
		
		if(inband == 'true')
			$('#inband').html('In Band? <input type="radio" name="inband" value=true>Yes<input type="radio" name="inband" value=false>No')
		$('#bottom').append("<input type='submit'>");
		$('#bottom').html("<form action='../users/"+id+"' method='post'><input type='hidden' name='user[name]' value='"+name+"'><input type='hidden' name='user[city]' value='"+city+"'><input type='hidden' name='user[email]' value='"+email+"'><input type='hidden' name='user[bio]' value='"+bio+"'><input type='hidden' name='authenticity_token' value="+token+"><input type='submit'></form>");
	});

	$(document).on('click', '.instr_options li a', function(){
		instr_counter++;
		$('.register_form').append('<input type="hidden" name="instruments[]" id="instrument'+instr_counter+'">');
		$('#instrument'+instr_counter).val($(this).text());
		$('#instrument_results').append($(this).text() + " ");

	});

	$(document).on('click', '.seeking_options li a', function(){
		seeking_counter++;
		$('.register_form').append('<input type="hidden" name="seeking[]" id="seeking'+seeking_counter+'">');
		$('#seeking'+seeking_counter).val($(this).text());
		$('#seeking_results').append($(this).text() + " ");
	});

	$(document).on('click', '.genre_options a', function(){
		genre_counter++;
		$('.register_form').append('<input type="hidden" name="genres[]" id="genre'+genre_counter+'">');
		$('#genre'+genre_counter).val($(this).text());
		$('#genre_results').append($(this).text() + " ");
	});

	$("#main > div:gt(0)").hide();
	setInterval(function() { 
	  $('#main > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#main');
	},  3000);
});

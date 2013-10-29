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

	$(document).on('click', '.instr_options li a', function(){
		instr_counter++;
		$('.register_form').append('<input type="hidden" name="instruments[]" id="instrument'+instr_counter+'">');
		$('#instrument'+instr_counter).val($(this).text());
		$('#instrument_results').append($(this).text() + " ");

	});

	$(document).on('click', '.genre_options a', function(){
		genre_counter++;
		$('.register_form').append('<input type="hidden" name="genres[]" id="genre'+genre_counter+'">');
		$('#genre'+genre_counter).val($(this).text());
		$('#genre_results').append($(this).text() + " ");

	});
});

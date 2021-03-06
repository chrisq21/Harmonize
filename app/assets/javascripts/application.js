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

function loadInstruments(from) {
	changed_div = '';
	drop_down_id = '';
	var top = 0;
	var left = 0

//drop downs on profile page
	if(from =='instruments') {
		changed_div = '#instruments_pop_up';
		drop_down_id = 'instr_drop_down';
		$('#genres_pop_up').hide();
		$('#seeking_pop_up').hide();
		top = 0;
		left = 250;
	}
	else if(from == 'seeking') {
		changed_div = '#seeking_pop_up';
		drop_down_id = 'seeking_drop_down';
		$('#instruments_pop_up').hide();
		$('#genres_pop_up').hide();
		top = 25;
		left = 0;

//drop down on home page		
	} else if(from == 'instr_search') {
		changed_div = '#instr_search_pop_up';
		drop_down_id = 'instr_search_options';
		top = 0;
		left = 50;
	} else if(from == 'genre_search') {
		changed_div = '#genre_search_pop_up';
		drop_down_id = 'genre_search_options';
		top = 0;
		left = 400;
	}

//drop down for profile genre	
	else {
		//ADD GENRE POP UP
		top = 25;
		left = 150;
		$('#instruments_pop_up').hide();
		$('#seeking_pop_up').hide();
		changed_div = '#genres_pop_up';
		drop_down_id = 'genres_drop_down';
	}
	if(from == 'genres' || from == 'genre_search') {
		html ='';
		html+='<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style="display: inline-block; position: absolute; left: '+left+'px; top: '+top+'px;  margin-bottom: 5px; *width: 180px;">';
			html+='<li class="dropdown-submenu '+drop_down_id+'">';
				html+='<a data-remote="true" tabindex="-1" href="#">Rock</a>';
				html+='<ul class="dropdown-menu">';
					html+='<li><a data-remote="true" tabindex="-1" href="#">Metal</a></li>';
					html+='<li class="genres_drop_down"><a data-remote="true" href="#">Alternative</a></li>';
					html+='<li class="genres_drop_down"><a data-remote="true" href="#">Post Rock</a></li>';
					html+='<li class="genres_drop_down"><a data-remote="true" href="#">Classic Rock</a></li>';
					html+='<li class="genres_drop_down"><a data-remote="true" href="#">Punk</a></li>';
					html+='<li class="genres_drop_down"><a data-remote="true" href="#">Indie</a></li>';
				html+='</ul>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Blues</a>	';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Electronic</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Country</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Folk</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Celtic</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Soul</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">R&B</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Hip Hop</a>';
				html+='</li>';
			html+='</ul>';
			html+='<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style="display: inline-block; position: absolute; left: '+(left - 160) +'px; top: '+top+'px; margin-bottom: 5px; *width: 180px;">';
				if(from == 'genre_search') {
					html+='<li class="dropdown-submenu '+drop_down_id+'">';
						html+='<a data-remote="true" tabindex="-1" href="#">Any Genre</a>	';
					html+='</li>';
				}
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Funk</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Rap</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Pop</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Covers</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Reggae</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Jazz</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Ska</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Latin</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu '+drop_down_id+'">';
					html+='<a data-remote="true" tabindex="-1" href="#">Bluegrass</a>';
				html+='</li>';
			html+='</ul>';
	} else {
		html = '';
		html+='<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style="display: inline; position: absolute; top: '+top+'px; left: '+left+'px; margin-bottom: 5px; *width: 180px; z-index: 2000">';
			if(from == 'instr_search') {
				html +='<li class="dropdown-submenu">';
					html += '<li><a data-remote="true" id="any_instr" tabindex="-1" href="#">All Musicians</a></li>';
				html +='</li>';
			}
			html += '<li class="dropdown-submenu">';
				html += '<a data-remote="true" tabindex="-1" href="#">Guitarist</a>';
				html += '<ul class="dropdown-menu '+drop_down_id+'">';
					html += '<li><a data-remote="true" tabindex="-1" href="#">Acoustic Guitarist</a></li>';
					html += '<li class="option"><a data-remote="true" href="#">Banjoist</a></li>';
					html += '<li><a data-remote="true" href="#">Bassist</a></li>';
					html += '<li><a data-remote="true" href="#">Lead Guitarist</a></li>';
					html += '<li><a data-remote="true" href="#">Rhythm Guitarist</a></li>';
				html += '</ul>';
			html += '</li>';
			html += '<li class="dropdown-submenu '+drop_down_id+'">';
				html += '<a data-remote="true" tabindex="-1" href="#">Drummer</a>';
				html += '<ul class="dropdown-menu">';
					html += '<li><a data-remote="true" href="#">African Drummer</a></li>';
					html += '<li><a data-remote="true" href="#">Drum Set</a></li>';
					html += '<li><a data-remote="true" href="#">miscellaneous</a></li>';
				html += '</ul>';
			html += '</li>';
			html += '<li class="dropdown-submenu '+drop_down_id+'">';
				html += '<a data-remote="true" tabindex="-1" href="#">Keyboarist</a>';
				html += '<ul class="dropdown-menu">';
					html += '<li><a data-remote="true" tabindex="-1" href="#">Electric Keyboarist</a></li>';
					html += '<li><a data-remote="true" href="#">Organist</a></li>';
					html += '<li><a data-remote="true" href="#">Pianoist</a></li>';
					html += '<li><a data-remote="true" href="#">Percussionist</a></li>';
					html += '<li><a data-remote="true" href="#">Synth</a></li>';
				html += '</ul>';
			html += '</li>';
			html += '<li class="dropdown-submenu '+drop_down_id+'">';
				html += '<a data-remote="true" tabindex="-1" href="#">Vocalist</a>';
				html += '<ul class="dropdown-menu">';
					html += '<li><a data-remote="true" tabindex="-1" href="#">Beat Boxer</a></li>';
					html += '<li><a data-remote="true" href="#">Rapper</a></li>';
					html += '<li><a data-remote="true" href="#">Singer</a></li>';
				html += '</ul>';
			html += '</li>';
		html += '</ul>';
	}

	$(changed_div).html(html);
	$(changed_div).show();
}

$(document).ready(function() {
	


	var instr_counter = 0;
	var genre_counter = 0;
	var seeking_counter = 0;

	var instr_update_counter = 0;
	var genre_update_counter = 0;
	var seeking_update_counter = 0;
	var exp_counter = 0;
	var link_counter = 0;

	$(document).click(function() {
		$('#genres_pop_up').hide();
		$('#instruments_pop_up').hide();
		$('#seeking_pop_up').hide();
		$('#genre_search_pop_up').hide();
		$('#instr_search_pop_up').hide();
		// $('#city_field').hide();
	});

	$('#genre_search_pop_up').mouseleave(function() {
		$(this).hide();
	});

	$('#instr_search_pop_up').mouseleave(function() {
		$(this).hide();
	});

	$('#genres_pop_up').mouseleave(function() {
		$(this).hide();
	});

	$('#instruments_pop_up').mouseleave(function() {
		$(this).hide();
	});

	$('#seeking_pop_up').mouseleave(function() {
		$(this).hide();
	});

	$('#city_field').mouseleave(function() {
		if($(this).val() != '') {
			$('#city_search').text($(this).val());
			
		}
		$(this).hide();
	});



	$('#update_profile').hide();
	$('#city_field').hide();

	$('#edit_profile').click(function() {
		$(this).hide();
		$('#update_profile').show();
		var name = $('#name').text();
		var city = $('#city').text();
		var email = $('#email').text();
		var bio = $('#bio').text();
		var inband = $('#inband_value').val();
		var current_band = $('#current_band_value').text();
		$('#name').html('<input id="name_val" type="text" value="'+name+'"">');
		$('#city').html('<input id="city_val" type="text" value="'+city+'"">');
		$('#email').html('<input id="email_val" type="text" value="'+email+'"">');
		$('#bio').html('<textarea id="bio_val" type="text">'+bio+'</textarea>');
		$('#main_instruments').append('<a data-remote = true id="add_instrument"> + Add An Instrument</a>');
		$('#seeking').append('<a data-remote = true id="add_seeking"> + Add An Instrument</a>');
		$('#genres').append('<a data-remote = true id="add_genre"> + Add A Genre</a>');
		$('#links').append('<a data-remote = true id="add_link"> + Add A Link</a>');
		$('.experience').append('<a data-remote=true class="add_experience">+ Add Experience </a>');
		//Set the default value of the radio buttons depending on the user value
		if(inband == 'true')
			$('#inband').html('In Band? <input id="inband_true_val" type="radio" name="inband" value=true checked="checked">Yes<input id="inband_false_val" type="radio" name="inband" value=false>No');
		else 
			$('#inband').html('In Band? <input id="inband_val" type="radio" name="inband" value=true>Yes<input type="radio" name="inband" value=false checked="checked">No');
		$('#current_band_value').html('<input id="current_band_val" type="text" value="'+current_band+'"">');
		var id = $('#user_id').val();
		html = '';
		html += "<form action='../users/"+id+"' method='post' id='update_form'>";
		html += "</form>";
		$('#bottom').html(html);
	});
	//Edit Profile Links
	$(document).on('click', '#add_instrument', function() {
		loadInstruments('instruments');
	});	

	$(document).on('click', '#add_seeking', function() {
		loadInstruments('seeking');
	});	

	$(document).on('click', '#add_genre', function() {
		loadInstruments('genres');
	});	

	$(document).on('click', '#add_link', function() {
		link_counter++;
		$("#profile_bottom").append('<br>');
		$("#profile_bottom").append('<input type="text" id="title_val'+link_counter+'" placeholder="Link Description">');
		$("#profile_bottom").append('<input type="text" id="link_val'+link_counter+'" value="https://" placeholder="URL">');
		$('#update_form').append('<input type="hidden" name="link[title][]" id="title'+link_counter+'">');
		$('#update_form').append('<input type="hidden" name="link[url][]" id="link'+link_counter+'">');
	});	

	$(document).on('click', '#update_profile', function() {
 		var inband = $('input:radio[name=inband]:checked').val();
		$('#edit_profile').show();
		$(this).hide();
		var html = '';
		var name = $('#name_val').val();
		var city = $('#city_val').val();
		var email = $('#email_val').val();
		var bio = $('#bio_val').val();
		
		var token = $('#token').val();
		var current_band = $('#current_band_val').val();
		
		html += "<input type='hidden' id='instrument'></input>";
		html += "<input type='hidden' id='seeking'></input>";
		html += "<input type='hidden' id='genre'></input>";
		html += "<input type='hidden' name='user[name]' value='"+name+"'>";
		html += "<input type='hidden' name='user[city]' value='"+city+"'>";
		html += "<input type='hidden' name='user[email]' value='"+email+"'>";
		html += "<input type='hidden' name='user[bio]' value='"+bio+"'>";
		html += "<input type='hidden' name='user[inband]' value='"+inband+"'>";
		html += "<input type='hidden' name='user[current_band]' value='"+current_band+"'>";
		html += "<input type='hidden' name='authenticity_token' value="+token+">";
		$('#update_form').append(html);

		for(var i = 1; i <= exp_counter; i++) {
			$('#experience'+i).val($('#exp_val'+i).val());
		}

		for(var i = 1; i <= link_counter; i++) {
			$('#link'+i).val($('#link_val'+i).val());
			$('#title'+i).val($('#title_val'+i).val());
		}
		
		//Create A Hidden Form to be submitted 		
		$('#update_form').submit();
	});
	//Registraion Options
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

//main images
	$("#main > div:gt(0)").hide();
	setInterval(function() { 
	  $('#main > div:first')
	    .fadeOut(2000)
	    .next()
	    .fadeIn(2000)
	    .end()
	    .appendTo('#main');
	},  4000);

	//Update Options

	$(document).on('click', '.instr_drop_down li a', function(){
		// alert($(this).text());
		$('#instruments_pop_up').hide();
		$('#instruments_label').append(' '+$(this).text());
		$('#instr_experience').append('<h4>'+$(this).text()+'</h4>');
		instr_update_counter++;
		$('#update_form').append('<input value ="'+$(this).text()+'" type="hidden" name="instruments[]" id="instrument'+instr_update_counter+'">');
		// $('#instrument'+instr_counter).val($(this).text());
		// $('#instrument_results').append($(this).text() + " ");

	});

	$(document).on('click', '.seeking_drop_down li a', function(){
		$('#seeking_pop_up').hide();
		$('#seeking_label').append(' '+$(this).text());

		seeking_update_counter++;
		$('#update_form').append('<input id="seeking'+seeking_update_counter+'" value="'+$(this).text()+'" type="hidden" name="seeking[]" ">');
		// $('#instrument'+instr_counter).val($(this).text());
		// $('#instrument_results').append($(this).text() + " ");

	});

	$(document).on('click', '.genres_drop_down a', function(){
		$('#genres_pop_up').hide();
		$('#genres_label').append(' '+$(this).text());
		genre_update_counter++;
		$('#update_form').append('<input id="genre'+genre_update_counter+'" value="'+$(this).text()+'" type="hidden" name="genre[]" ">');
		// $('#instrument'+instr_counter).val($(this).text());
		// $('#instrument_results').append($(this).text() + " ");
	});

	//Edit Experience
	$(document).on('click', '.add_experience', function() {
		exp_counter++;
		instrument = $(this).parent().attr('data-instr');
		id = $(this).parent().attr('data-id');
		$('#exp'+id).append('<input id=exp_val'+exp_counter+' style="display: block;" type="text">');
		$('#update_form').append('<input type="hidden" name="experience['+instrument+ '][]" id=experience'+exp_counter+' style="display: block;" type="text">');
	});

	//HOME PAGE SEARCH FIELDS

	$('#instrument_search').hover(function() {
		$('#city_field').hide();
		loadInstruments('instr_search');
		$('#genre_search_pop_up').hide();
	});

	$('#genre_search').hover(function() {
		$('#city_field').hide();
		loadInstruments('genre_search');
		$('#instr_search_pop_up').hide();
	});

	$('#city_search').hover(function() {
		$('#genre_search_pop_up').hide();
		$('#instr_search_pop_up').hide();
		$('#city_field').show();
		
	});

	$(document).on('click', '.instr_search_options li a', function(){
		$('#instr_search_pop_up').hide();
		$('#instrument_search').text($(this).text());
	});

	//Any Instrument link
	$(document).on('click', '#any_instr', function(){
		$('#city_field').hide();
		$('#instr_search_pop_up').hide();
		$('#instrument_search').text($(this).text());
	});


	$(document).on('click', '.genre_search_options a', function(){
		$('#genre_search_pop_up').hide();
		$('#genre_search').text($(this).text());
	});

	$('#search_button').click(function(){
		$('#search_instrument_val').val($('#instrument_search').text());
		$('#search_genre_val').val($('#genre_search').text());
		$('#search_city_val').val($('#city_field').val());		
		$('#search_form').submit();
	});

	$('.reply').click(function() {
		$('#message_to').val($(this).siblings('.message_to_val').val());
		$('#label').text($(this).siblings('.label_val').val());
		// $('#message_to_val').val() + " " + $('#label_val').val()
	});	

	$("#search_button").mouseenter(function(){
		$("button").css("color","black");
		$("button").css("background-color","gray");
	});

	$("#search_button").mouseleave(function(){
		$("button").css("color","white");
		$("button").css("background-color","black");
	});
});


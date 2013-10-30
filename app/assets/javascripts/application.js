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
	var left = 0;

	if(from =='instruments') {
		changed_div = '#instruments_pop_up';
		drop_down_id = 'instr_drop_down';
		$('#genres_pop_up').hide();
		$('#seeking_pop_up').hide();
		top = 120;
		left = 500;
	}
	else if(from == 'seeking') {
		changed_div = '#seeking_pop_up';
		drop_down_id = 'seeking_drop_down';
		$('#instruments_pop_up').hide();
		$('#genres_pop_up').hide();
		top = 230;
		left = 320;
	}
	else {
		//ADD GENRE POP UP
		$('#instruments_pop_up').hide();
		$('#seeking_pop_up').hide();
		changed_div = '#genres_pop_up';
		drop_down_id = 'genres_drop_down';
	}
	if(from == 'genres') {
		html ='';
		html+='<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style="display: inline-block; position: absolute; left: 460px; top: 250px;  margin-bottom: 5px; *width: 180px;">';
				html+='<li class="dropdown-submenu">';
					html+='<a tabindex="-1" href="#">Rock</a>';
					html+='<ul class="dropdown-menu">';
						html+='<li><a tabindex="-1" href="#">Metal</a></li>';
						html+='<li class="genres_drop_down"><a href="#">Alternative</a></li>';
						html+='<li class="genres_drop_down"><a href="#">Post Rock</a></li>';
						html+='<li class="genres_drop_down"><a href="#">Classic Rock</a></li>';
						html+='<li class="genres_drop_down"><a href="#">Punk</a></li>';
						html+='<li class="genres_drop_down"><a href="#">Indie</a></li>';
					html+='</ul>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Blues</a>	';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Electronic</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Country</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Folk</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Celtic</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Soul</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">R&B</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Hip Hop</a>';
				html+='</li>';
			html+='</ul>';
			html+='<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style="display: inline-block; position: absolute; left: 300px; top: 250px; margin-bottom: 5px; *width: 180px;">';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Funk</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Rap</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Pop</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Covers</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Reggae</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Jazz</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Ska</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Latin</a>';
				html+='</li>';
				html+='<li class="dropdown-submenu genres_drop_down">';
					html+='<a tabindex="-1" href="#">Bluegrass</a>';
				html+='</li>';
			html+='</ul>';
	} else {
		html = '';
		html+='<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style="display: inline; position: absolute; top: '+top+'px; left: '+left+'px; margin-bottom: 5px; *width: 180px; z-index: 2000">';
			html += '<li class="dropdown-submenu">';
				html += '<a tabindex="-1" href="#">Guitar</a>';
				html += '<ul class="dropdown-menu '+drop_down_id+'">';
					html += '<li><a tabindex="-1" href="#">Acoustic</a></li>';
					html += '<li class="option"><a href="#">Banjo</a></li>';
					html += '<li><a href="#">Bass</a></li>';
					html += '<li><a href="#">Lead Guitar</a></li>';
					html += '<li><a href="#">Rhythm Guitar</a></li>';
				html += '</ul>';
			html += '</li>';
			html += '<li class="dropdown-submenu '+drop_down_id+'">';
				html += '<a tabindex="-1" href="#">Drums</a>';
				html += '<ul class="dropdown-menu">';
					html += '<li><a href="#">African Drums</a></li>';
					html += '<li><a href="#">Drum Set</a></li>';
					html += '<li><a href="#">miscellaneous</a></li>';
				html += '</ul>';
			html += '</li>';
			html += '<li class="dropdown-submenu '+drop_down_id+'">';
				html += '<a tabindex="-1" href="#">Keyboard</a>';
				html += '<ul class="dropdown-menu">';
					html += '<li><a tabindex="-1" href="#">Electric Keyboard</a></li>';
					html += '<li><a href="#">Organ</a></li>';
					html += '<li><a href="#">Piano</a></li>';
					html += '<li><a href="#">Percussive</a></li>';
					html += '<li><a href="#">Synth</a></li>';
				html += '</ul>';
			html += '</li>';
			html += '<li class="dropdown-submenu '+drop_down_id+'">';
				html += '<a tabindex="-1" href="#">Vocals</a>';
				html += '<ul class="dropdown-menu">';
					html += '<li><a tabindex="-1" href="#">Beat Boxer</a></li>';
					html += '<li><a href="#">Rapper</a></li>';
					html += '<li><a href="#">Singer</a></li>';
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
	$('#update_profile').hide();

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
		$('#main_instruments').append('<a data-remote = true id="add_instrument">+ Add An Instrument</a>');
		$('#seeking').append('<a data-remote = true id="add_seeking">+ Add An Instrument</a>');
		$('#genres').append('<a data-remote = true id="add_genre">+ Add A Genre</a>');
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

	$(document).on('click', '#add_instrument', function() {
		loadInstruments('instruments');
	});	

	$(document).on('click', '#add_seeking', function() {
		loadInstruments('seeking');
	});	

	$(document).on('click', '#add_genre', function() {
		loadInstruments('genres');
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

	//Update Options

	$(document).on('click', '.instr_drop_down li a', function(){
		$('#instruments_pop_up').hide();
		$('#instruments_label').append(' '+$(this).text());
		$('#instr_experience').append('<h4>'+$(this).text()+'</h4>');
		instr_update_counter++;
		$('#update_form').append('<input value ='+$(this).text()+' type="hidden" name="instruments[]" id="instrument'+instr_update_counter+'">');
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
});


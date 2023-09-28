<?php

/*
Plugin Name: bbcrm
Description: Enqueues neccessary BBCRM files for integration with any wordpress site
Author: Akiva Ranells
Version: serverapi1 for wp5.2 and above
*/

add_action( 'wp_footer', 'mycustom_wp_footer' );



function bbcrm_add_js_to_wordpress() {
	$js_api_path = '//api1.verticacrm.com/bbcrm-assets/js-noconflict';
	wp_register_script('galleria.classic.min', $js_api_path.'/galleria.classic.min.js', array('jquery') );
	wp_register_script('galleria-1.4.2.min', $js_api_path.'/galleria-1.4.2.min.js', array('jquery') );
	
	wp_register_script("download-files", "https://cdnjs.cloudflare.com/ajax/libs/downloadjs/1.4.7/download.min.js", array('jquery') );
    wp_register_script("jsignature", "https://cdnjs.cloudflare.com/ajax/libs/jSignature/2.1.2/jSignature.min.noconflict.js", array('jquery') );
	
	wp_register_script('bbcrm-constants', $js_api_path.'/bbcrm-constants.js', array('jquery') );
	wp_register_script('bbcrm-buyer-profile', $js_api_path.'/bbcrm-buyer-profile.js', array('jquery') );
	wp_register_script('bbcrm-contact-form', $js_api_path.'/bbcrm-contact-form.js', array('jquery') );
	wp_register_script('bbcrm-library', 'https://crm.autocenter-sales.com/templates/js/bbcrm-library.js', array('jquery') );
	wp_register_script('bbcrm-listing', $js_api_path.'/bbcrm-listing.js', array('jquery') );
	
	//wp_register_script('bbcrm-main', $js_api_path.'/bbcrm-main.js', array('jquery') );
	wp_register_script('bbcrm-main', $js_api_path.'/bbcrm-main.js', array('jquery') );
	wp_register_script('bbcrm-password-reset', $js_api_path.'/bbcrm-password-reset.js', array('jquery') );
	wp_register_script('bbcrm-search-tool', $js_api_path.'/bbcrm-search-tool.js', array('jquery') );


	wp_enqueue_script('galleria-1.4.2.min');	
	wp_enqueue_script('galleria.classic.min');
	//wp_enqueue_script('galleria-1.4.2.min');
	wp_enqueue_script('download-files');
	wp_enqueue_script('jsignature');
	
	wp_enqueue_script('bbcrm-constants');
	wp_enqueue_script('bbcrm-main');
	wp_enqueue_script('bbcrm-buyer-profile');
	wp_enqueue_script('bbcrm-contact-form');
	wp_enqueue_script('bbcrm-library');
	wp_enqueue_script('bbcrm-listing');
	//wp_enqueue_script('bbcrm-main');
	wp_enqueue_script('bbcrm-password-reset');
	wp_enqueue_script('bbcrm-search-tool');
	
}
add_action('wp_enqueue_scripts', 'bbcrm_add_js_to_wordpress');

function bbcrm_add_stylesheet_to_wordpress() {
	$css_api_path = '//api1.verticacrm.com/bbcrm-assets/css';
	wp_register_style('bbcrm_stylesheet', $css_api_path."/style.css");
	wp_register_style('galleria.classic', $css_api_path."/galleria.classic.css");
	wp_enqueue_style('bbcrm_stylesheet');
	wp_enqueue_style('galleria.classic');
}
add_action( 'wp_enqueue_scripts', 'bbcrm_add_stylesheet_to_wordpress' );  

function add_bootstrap_and_fa(){
	wp_register_style('bootstrap_css', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css');
	wp_register_script('popper_js', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js');
	wp_register_script('bootstrap_js', 'https://stackpath.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js');
	wp_register_style('font_awesome', 'https://use.fontawesome.com/89e58b105e.css');
	wp_enqueue_style("bootstrap_css");
	wp_enqueue_script("popper_js");
	wp_enqueue_script("bootstrap_js");
	wp_enqueue_style('font_awesome');
}
add_action('wp_enqueue_scripts', 'add_bootstrap_and_fa');

 
function mycustom_wp_footer() {
?>
<?php
}
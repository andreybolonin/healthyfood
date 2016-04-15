<?php
/**
 * Template Name: Lp
 *
 * This is the template that displays full width page without sidebar
 *
 * @package dazzling
 */

if ( have_posts() ) : while( have_posts() ) : the_post();
     the_content();
endwhile; endif;


<?php

/**
 * Picture Tag
 * @author    Joey Wilke
 * @link      http://joeywilke.com
 * @return    HTML string
 * @version   0.0.1
 */

kirbytext::$tags['picture'] = array (

	'attr' => array (
        'number',
        'name',
		'class',
		'caption',
		'alt',
	),

	'html' => function ($tag) {

		// Place attributes in variables
		$name      = $tag->attr('picture');
        $number    = $tag->attr('number');
		$class     = $tag->attr('class');
		$caption   = $tag->attr('caption');
		$alt       = $tag->attr('alt');
		$image     = $tag->page()->image($name);

    // Settings. You could change this if needed for your project. 
    $MQuery = '(max-width: 751px)';
    $LQuery = '(min-width: 752px)';
    $MWidth = '750';
    $LWidth = '1500';
    $MImg = thumb($image, array('width' => $MWidth ))->url();
    $LImg = thumb($image, array('width' => $LWidth))->url();
    $OImg = $image;


    $buffer= "";
    // Starting figure
    $buffer .= '<figure';
    if ($class) { $buffer .= ' class="' . $class . '"'; }
    $buffer .= '>' . "\n";

    // Starting the href
    $buffer .= '<a href="#" data-featherlight="' . $LImg . '">' . "\n";

    // Starting picture
    $buffer .= '<picture';
    if ($class) { $buffer .= ' class="' . $class . '__picture"'; }
    $buffer .= '>' . "\n";

    // HACK: support for IE9
    $buffer .= '<!--[if IE 9]><video style="display: none;"><![endif]-->' . "\n";

    // M
    $buffer .= '<source srcset="' . $MImg . '" media="' . $MQuery . '">' . "\n";


    // L
    $buffer .= '<source srcset="' . $LImg . '" media="' . $LQuery . '">' . "\n";


    // HACK: support for IE9
    $buffer .= '<!--[if IE 9]></video><![endif]-->' . "\n";

    // Use image without modifiers as fall back.
    $buffer .= '<img';
    if ($class) { $buffer .= ' class="' . $class . '__image"'; }
      $buffer .= ' srcset="' . $MImg . '"';

    // Optional alt text
    if ($alt) { $buffer .= ' alt="' . $alt . '"'; }

    // Ending image
    $buffer .= '>' . "\n";

    // Ending picture
    $buffer .= '</picture>' . "\n";

    // Ending the href
    $buffer .= '</a>' . "\n";

    // Optional figure caption
    if ($caption) {
      $buffer .= '<figcaption';
      if ($class) { $buffer .= ' class="' . $class . '__caption"'; };
      $buffer .= '>';
      if ($number) { $buffer .= ' <span class="figNum">' . $number . '.</span>'; };
      $buffer .= $caption . '</figcaption>' . "\n";
    }

    // Ending figure
    $buffer .= '</figure>' . "\n";


    // Output buffer
    return $buffer;
  }
);

?>
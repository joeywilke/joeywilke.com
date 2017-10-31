<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
        <meta name="description" content="<?php echo $site->description()->html() ?>">
        <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="<?php echo url('assets/images/apple-touch-icon.png') ?>">
        <!-- Place favicon.ico in the root directory -->

        <?php echo css('assets/css/style.css'); ?>
        <?php echo js('assets/js/vendor/modernizr-2.8.3.min.js'); ?>
        
        <!-- Typekit -->
        <script src="//use.typekit.net/cre2jtc.js"></script>
        <script>try{Typekit.load();}catch(e){}</script>

        <!-- Socicon -->
        <link href="https://file.myfontastic.com/n6vo44Re5QaWo8oCKShBs7/icons.css" rel="stylesheet">

    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        
        <!-- <div class="wrap m-scene" id="main"> -->

        <header role="banner">
        <div class="wrap">
            <div class="inner m-header scene_element">
            <div class="logowrap">
              <a class="logo" href="<?php echo url() ?>">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-349 82 152 152" xml:space="preserve"><style type="text/css">
                    .st0{fill:none;/*stroke:#FFFFFF*/;stroke-width:3;stroke-miterlimit:10;}
                    .st1{fill:#FFFFFF;}
                </style><circle class="st0" cx="-273" cy="158" r="72"/><path class="st1" d="M-313.9 185.4c-4.7 0-9-1.6-11.6-3.2l0.7-3.4c3.4 2.1 7.1 3.5 11 3.5 7.6 0 11.7-4.8 11.7-13.8v-35.2h3.4v35.4C-298.6 179-303.4 185.4-313.9 185.4z"/><path class="st1" d="M-271.1 184.6h-3.2l-14.6-51.3h3.5l12.9 46 14-46h4.3l14.3 46 12.1-46h3.6l-14.2 51.3h-3.2l-14.7-47.6L-271.1 184.6z"/></svg>
              </a>
            </div>
            <nav class="links">
                <?php snippet('menu') ?>
            </nav>
            <!-- <div class="blurb"><?php echo $site->blurb()->html() ?></div> -->
            <!-- <div class="topAnchor"><a id="scrollup" href="#">top</a></div> -->
            </div>  <!-- /inner -->
            </div> <!-- wrap -->
        </header>


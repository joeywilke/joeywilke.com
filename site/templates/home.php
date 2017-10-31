<?php snippet('header') ?>

<main class="main m-page scene_element scene_element--fadein" role="main">
  <article>
    <?php if($cover = $page->image($page->cover())) :?>
      <div class="heroImg" style="background-image: url('<?php echo $cover->url() ?>');"></div>
    <?php endif ?>
    <div class="wrap">
    <section class="home">

    <div class="mainCol">
    <?php if($joeypic = $site->image($site->joeypic())) :?>
      <div class="aboutPic"><img src='<?php echo $joeypic->url() ?>'></div>
    <?php endif ?>
      <?php echo $page->text()->kirbytext() ?><a class="aboutLink" href="about">Read More.</a>
    </div>

    </section>


  </article>
  </div>
</main>

<?php snippet('projects') ?>

<?php snippet('footer') ?>
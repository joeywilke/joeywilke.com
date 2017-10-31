<?php snippet('header') ?>
<main class="main m-page scene_element scene_element--fadein" role="main">
  <article>
    <?php if($cover = $page->image($page->cover())) :?>
      <div class="heroImg" style="background-image: url('<?php echo $cover->url() ?>');"></div>
    <?php endif ?>
    <div class="wrap">
    <section class="colophon">
    <div class="mainCol">
      <h1 class="pageTitle"><?php echo $page->title()->html() ?></h1>
        <?php echo $page->text()->kirbytext() ?>
    </div>
    </section>

  </article>
  </div>
</main>

<!-- <?php snippet('projects') ?> -->

<?php snippet('footer') ?>
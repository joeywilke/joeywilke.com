<?php snippet('header') ?>

<main class="main m-page scene_element scene_element--fadein" role="main">
  <article>

  <section class="about">

    <div class="rightCol">
      <?php echo $page->text()->kirbytext() ?>

    </div>
    </section>

    <?php snippet('projects') ?>

    

  </article>
</main>

<?php snippet('footer') ?>
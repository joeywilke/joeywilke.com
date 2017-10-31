<?php snippet('header') ?>
<main class="main m-page scene_element scene_element--fadein" role="main">
  <article>
    <?php if($cover = $page->image($page->cover())) :?>
      <div class="heroImg" style="background-image: url('<?php echo $cover->url() ?>');"></div>
    <?php endif ?>
    <div class="wrap">
    <section class="project">
    <div class="mainCol">
      <div class="projIntro">
      <h1 class="workTitle"><?php echo $page->title()->html() ?></h1>
      <div class="workMeta">
        <ul>
          <li id="workRoles" class="taggroup">
            <?php $tags = str::split($page->tags());
            foreach( $tags as $tag): ?>
              <div class="filter " data-filter="<?php echo tagslug($tag) ?>"><?php echo html($tag) ?></div>
              <?php endforeach ?>
          </li>
          <?php $collaborators = $page->collaborators()->yaml();
          foreach($collaborators as $collaborator): ?>
            <li><?php echo $collaborator['role'] ?> - <a href="<?php echo $collaborator['url'] ?>"><?php echo $collaborator['name'] ?></a></li>
          <?php endforeach ?>
        </ul>
      </div> <!-- meta -->
      </div> <!-- projIntro -->
      <div class="projBody">
        <?php echo $page->text()->kirbytext() ?>
      </div> <!-- projBody -->
    </div>
    </section>

  </article>
  </div>
</main>

<?php snippet('projects') ?>

<?php snippet('footer') ?>
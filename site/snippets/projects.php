<section id="projList">

<div class="wrap">

<div id="projFilter" class="taggroup">
    Filter projects by:
    <div class="filter active" data-filter="all">Show All</div>
    <?php $tags = $site->page('projects')->children()->visible()->pluck('tags', ',', true);
    foreach($tags as $tag):?>
    <div class="filter " data-filter="<?php echo tagslug($tag) ?>"><?php echo html($tag) ?></div>
    <?php endforeach ?>
  </div>

  <ul id="projects">
    <?php foreach($site->page('projects')->children()->visible() as $project): ?>
      <li class="project highlight<?php $tags = str::split($project->tags()); foreach($tags as $tag){ echo " " . tagslug($tag); }?>">
        <a href="<?php echo $project->url() ?>" <?php if ($project->url() == $page->url()) echo 'class="active"';  ?>>
          <?php if($cover = $project->image($project->cover())) : ?>
            <figure><picture><img src="<?php echo thumb($cover, array('width' => 600, 'height' => 400, 'crop' => true))->url(); ?>" alt="<?php echo $project->title()->html() ?>"></picture>
            <figcaption>
            <h3><?php echo $project->title()->html() ?></h3>
            <div class="projInfo">
              <div class="projSummary"><?php echo $project->summary()->html() ?></div>
              <div class="projRoles">
                <?php foreach($project->tags()->split(',') as $tag): ?>
                  <?php echo $tag ?>
                  <?php endforeach ?>
              </div>
            </div>
            </figcaption></figure>
          <?php endif ?>
        </a>
      </li>
    <?php endforeach ?>
  </ul>

  </div>

</section>

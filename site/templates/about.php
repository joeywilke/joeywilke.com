<?php snippet('header') ?>
<main class="main m-page scene_element scene_element--fadein" role="main">
  <article>

    <?php if($cover = $page->image($page->cover())) :?>
      <div class="heroImg" style="background-image: url('<?php echo $cover->url() ?>');"></div>
    <?php endif ?>

    <div class="wrap">

    <section class="about">
    <div class="mainCol">
    <span class="intro"><?php if($joeypic = $site->image($site->joeypic())) :?>
      <div class="aboutPic"><img src='<?php echo $joeypic->url() ?>'></div>
    <?php endif ?>
    <?php echo $page->blurb()->kirbytext() ?>
    </span>
    </div>

    <div class="aboutWrapper">
    <div class="mainCol">

    <h2>Work Experience</h2>
    <?php $history = $page->history()->yaml();
        foreach($history as $job): ?>
      <div class="job">
        <h3><?php echo $job['company'] ?></h3> 
        <span class="jobtitle"><?php echo $job['jobtitle'] ?></span>
        <span class="jobdate"><?php echo date('M Y', strtotime($job['datefrom'])) ?> - <?php if(isset($job['current'])): ?>Current<?php else: ?><?php echo date('M Y', strtotime($job['dateto'])) ?><?php endif ?></span>
        <div class="jobdescription more"><?php echo kirbytext($job['description']) ?></div>
        </div>
        <?php endforeach ?>

        <h2>Education</h2>
        <?php $education = $page->education()->yaml();
            foreach($education as $edu): ?>
        <div class="edu">
        <h3 class="edutitle"><?php echo $edu['institution'] ?></h3>
        <span class="edudegree"><?php echo $edu['degree'] ?></span> <span class="edudate"><?php echo date('Y', strtotime($edu['yearfrom'])) ?> - <?php echo date('Y', strtotime($edu['yearto'])) ?></span>
        <span class="educlasses"><?php echo $edu['classes'] ?></span>
        </div>
        <?php endforeach ?>
    </div>
    <div class="sideCol">
    <h2>Tools & Technologies</h2>
    <ul class="skills">
    <?php $skills = $page->skills()->yaml();
        foreach($skills as $skill): ?>
        <li div class="skill ace<?php echo $skill['proficiency'] ?>">
        <span class="dots">
        <span class="skilldot dot1"></span>
        <span class="skilldot dot2"></span>
        <span class="skilldot dot3"></span>
        <span class="skilldot dot4"></span>
        <span class="skilldot dot5"></span>
        </span>
        <span class="skilltitle"><?php echo $skill['skill'] ?></span></li>
        <?php endforeach ?>
        </ul>
        <div class="skilllabels">
          <span class="label5">Highly Proficient</span>
          <span class="label3">Comfortable</span>
          <span class="label1">Basic Proficiency</span>
        </div>

      <h2>A Bit More</h2>
      <span class="bio"><?php echo $page->bio()->kirbytext() ?></span>
    </div>
    </div> <!-- aboutwrapper -->



    </div> <!-- wrap -->

  </article>
</main>

<?php snippet('footer') ?>
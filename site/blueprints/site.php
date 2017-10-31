<?php if(!defined('KIRBY')) exit ?>

title: Site
pages: default
fields:
  title:
    label: Title
    type:  text
  author:
    label: Author
    type:  text
  joeypic:
    label: Image of Moi
    type: select
    options: images
  blurb:
    label: Blurb
    type: textarea
  description:
    label: Description
    type:  textarea
  keywords:
    label: Keywords
    type:  tags
  colophon:
    label: Colophon
    type:  textarea
  social:
    label: Social links (use socicon classes)
    type:  textarea
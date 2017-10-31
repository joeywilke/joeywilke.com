<?php if(!defined('KIRBY')) exit ?>

title: Colophon
pages: true
files: true
fields:
  title:
    label: Title
    type:  text
  cover:
    label: Cover Image
    type: select
    options: images
  text:
    label: Text
    type:  textarea
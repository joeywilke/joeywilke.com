<?php if(!defined('KIRBY')) exit ?>

title: Error
pages: false
files: false
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
    size:  large
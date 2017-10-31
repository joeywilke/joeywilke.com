<?php if(!defined('KIRBY')) exit ?>

title: Project
pages: false
files:
  sortable: true
fields:
  title:
    label: Title
    type:  text
  summary:
    label: Brief Summary For Proj Filter
    type:  text
  cover:
    label: Cover Image
    type: select
    options: images
  text:
    label: Text
    type:  textarea
  line:
    type: line
  tags:
    label: Tags
    type:  tags
    index: all
  collaborators:
    label: Collaborators
    type: structure
    entry: >
      {{name}} | {{role}} | {{url}}
    fields:
      name:
        label: Name
        type: text
      role:
        label: Role
        type: text
      url:
        label: URL
        type: url

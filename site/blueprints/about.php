title: About page
pages: true
files: true
fields:
  title:
    label: Title
    type: title
  cover:
    label: Cover Image
    type: select
    options: images
  blurb:
    label: About Blurb 
    type: textarea
  line:
    type: line
  headline:
    label: Resume Headline
    type: textarea
  history:
    label: Employment History
    type: structure
    style: table
    entry: >
      {{company}} - {{jobtitle}}<br />
      {{datefrom}} - {{dateto}} - {{current}}<br />
      {{description}}
    fields:
      company:
        label: Company Name
        type: text
      jobtitle:
        label: Job Title
        type: text
      datefrom:
        label: Job Start Date
        type: date
        format: MM YYYY
      dateto:
        label: Job End Date
        type: date
        format: MM YYYY
      current:
        label: Current
        type: checkbox
        text: Current Job?
      description:
        label: Job Description
        type: textarea
  skills:
    label: Skills
    type: structure
    entry: >
      {{skill}} - 
      {{proficiency}}
    fields:
      skill:
        label: Skill
        type: text
      proficiency:
          label: Proficiency
          type: select
          options:
            1: 1 - Basic Proficiency
            2: 2
            3: 3 - Comfortable
            4: 4
            5: 5 - Highly Proficient
  education:
    label: Education
    type: structure
    entry: >
      {{institution}}<br />
      {{degree}}<br />
      {{yearfrom}} - {{yearto}}<br />
      {{classes}}
    fields:
      institution:
        label: Institution
        type: text
      degree:
        label: Degree
        type: text
      yearfrom:
        label: Year From
        type: date
        format: YYYY
      yearto:
        label: Year To
        type: date
        format: YYYY
      classes:
        label: Classes Taken
        type: textarea
  bio:
    label: Personal Blurb
    type: textarea

# frontend-project-lvl2

[![Build Status](https://travis-ci.org/cxkorol/frontend-project-lvl2.svg?branch=master)](https://travis-ci.org/cxkorol/frontend-project-lvl2) [![Maintainability](https://api.codeclimate.com/v1/badges/e9a55f6525f9c985445a/maintainability)](https://codeclimate.com/github/cxkorol/frontend-project-lvl2/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/e9a55f6525f9c985445a/test_coverage)](https://codeclimate.com/github/cxkorol/frontend-project-lvl2/test_coverage)

### Description

The utility for finding differences in configuration files.

Support: json, yaml, ini

### Install 

CLI: `npm install -g gendiff-korol`
Module: `npm install --save gendiff-korol`

### Use

CLI: `gendiff-korol --help`
Module: 
    import gendiff from "gendiff-korol;
    gendiff(pathToFile1, pathToFile2, format)

format: 'tree' is default, 'plain', 'json'

### Details

<details>
    <summary>1. Tree:</summary> 
    <br>
    <a href="https://asciinema.org/a/273258" target="_blank"><img src="https://asciinema.org/a/273258.svg" /></a>
</details>

<details>
    <summary>2. Plain:</summary> 
    <br>
    <a href="https://asciinema.org/a/273261" target="_blank"><img src="https://asciinema.org/a/273261.svg" /></a>
</details>

<details>
    <summary>3. JSON:</summary> 
    <br>
    <a href="https://asciinema.org/a/273264" target="_blank"><img src="https://asciinema.org/a/273264.svg" /></a>
</details>
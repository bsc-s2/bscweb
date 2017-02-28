---
layout: post
title: 技术
---

<div class="col-xs-6 mar-b-20 ">
    <img src="{{ site.baseurl }}public/image/technology/technology-01.jpg">
</div>
<div class="col-xs-6 mar-b-20">
    <img src="{{ site.baseurl }}public/image/technology/technology-02.jpg">
</div>
<div class="technology">
    <div class="col-sm-6 col-xs-12 mar-b-20 technology-6">
        <img src="{{ site.baseurl }}public/image/technology/technology-03.png">
    </div>
    <div class="col-sm-6 col-xs-12 mar-b-20 technology-6">
        <img src="{{ site.baseurl }}public/image/technology/technology-04.png">
    </div>
    {% assign technologys = site.data.technology %}
    {% assign myOffset = 0 %}
    {% for i in (0..3) %}
    <div class="row">
    {% for ts in technologys offset:myOffset limit:3 %}
    <div class="col-sm-4 col-xs-12 mar-b-20">
        <img class="img-full" src="{{ site.baseurl }}public/image/technology/{{ts.imgName}}">
    </div>
    {% if forloop.last%}
    {% assign myOffset = ts.index1 %}
    {% endif %}
    {% endfor %} 
    </div> 
    {% endfor %}
</div>
<div class="clean"></div>

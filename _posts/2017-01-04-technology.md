---
layout: post
title: 技术
---

<div class="clearfix mar-b-80-sm">
    <div class="col-xs-6 mar-b-20 ">
        <img src="{{ site.baseurl }}public/image/technology/technology-01.jpg">
    </div>
    <div class="col-xs-6 mar-b-20">
        <img src="{{ site.baseurl }}public/image/technology/technology-02.jpg">
    </div>
</div>
<div class="clearfix technology mar-b-80-sm">
    <div class="col-sm-6 col-xs-12 mar-b-20 technology-6">
        <img src="{{ site.baseurl }}public/image/technology/technology-03.png">
    </div>
    <div class="col-sm-6 col-xs-12 mar-b-20 technology-6">
        <img src="{{ site.baseurl }}public/image/technology/technology-04.png">
    </div>
    {% assign technologys = site.data.technology %}
    <div class="col-sm-4 col-xs-12">
        {% for ts in technologys %}
        {% if ts.col == 1%}
        <div class="mar-b-20">
            <img class="img-full" src="{{ site.baseurl }}public/image/technology/{{ts.imgName}}">
        </div>
        {% endif %}
        {% endfor %}
    </div>
    <div class="col-sm-4 col-xs-12">
        {% for ts in technologys %}
        {% if ts.col == 2%}
        <div class="mar-b-20">
            <img class="img-full" src="{{ site.baseurl }}public/image/technology/{{ts.imgName}}">
        </div>
        {% endif %}
        {% endfor %}
    </div>
    <div class="col-sm-4 col-xs-12">
        {% for ts in technologys %}
        {% if ts.col == 3%}
        <div class="mar-b-20">
            <img class="img-full" src="{{ site.baseurl }}public/image/technology/{{ts.imgName}}">
        </div>
        {% endif %}
        {% endfor %}
    </div>
</div>
<div class="clean"></div>

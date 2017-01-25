#!/bin/sh

jekyll b -s . -d zh-release \
    && git checkout release \
    && mv zh-release zh \
    && git add zh \
    && git commit -m 'update zh'


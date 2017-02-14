#!/bin/sh

jekyll b -s . -d en-release \
    && git checkout release \
    && mv en-release en \
    && git add en \
    && git commit -m 'update en'


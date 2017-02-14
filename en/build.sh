#!/bin/sh

jekyll b -s . -d en-release \
    && git checkout release \
    && rm -rf en \
    && mv en-release en \
    && git add en \
    && git commit -m 'update en'


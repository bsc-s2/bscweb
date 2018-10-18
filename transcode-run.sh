#!/bin/bash

# THIS SCRIPT CONVERTS EVERY MP4 (IN THE CURRENT FOLDER AND SUBFOLDER) TO A MULTI-BITRATE VIDEO IN MP4-DASH
# For each file "videoname.mp4" it creates a folder "dash_videoname" containing a dash manifest file "stream.mpd" and subfolders containing video segments.

# Validation tool:
# http://dashif.org/conformance.html

# Documentation:
# https://tdngan.wordpress.com/2016/11/17/how-to-encode-multi-bitrate-videos-in-mpeg-dash-for-mse-based-media-players/

# Remember to add the following mime-types (uncommented) to .htaccess:
# AddType video/mp4 m4s
# AddType application/dash+xml mpd

# DASH-264 JavaScript Reference Client
# https://github.com/Dash-Industry-Forum/dash.js
# https://github.com/Dash-Industry-Forum/dash.js/wiki

MYDIR=$(dirname $(readlink -f ${BASH_SOURCE[0]}))
SAVEDIR=$(pwd)

# Check programs
if [ -z "$(which ffmpeg)" ]; then
    echo "Error: ffmpeg is not installed"
    exit 1
fi

if [ -z "$(which MP4Box)" ]; then
    echo "Error: MP4Box is not installed"
    exit 1
fi

cd "$MYDIR"

TARGET_FILES=$(find ./ -type f -name "*.mp4")
for f in $TARGET_FILES
do
  f=$(basename "$f") # fullname of the file
  f="${f%.*}" # name without extension

  if [ ! -d "dash_${f}" ]; then
    echo "Converting \"$f\" to multi-bitrate video in MPEG-DASH"

    ffmpeg -y -i "${f}.mp4" -c:a copy -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 2300k -vf "scale=-2:900" -f mp4 -pass 1 -y /dev/null
    ffmpeg -y -i "${f}.mp4" -c:a copy -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 2300k -vf "scale=-2:900" -f mp4 -pass 2 "${f}_2300.mp4"

    ffmpeg -y -i "${f}.mp4" -c:a copy -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 1500k -vf "scale=-2:720" -f mp4 -pass 1 -y /dev/null
    ffmpeg -y -i "${f}.mp4" -c:a copy -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 1500k -vf "scale=-2:720" -f mp4 -pass 2 "${f}_1500.mp4"

    ffmpeg -y -i "${f}.mp4" -c:a copy -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 800k -vf "scale=-2:540" -f mp4 -pass 1 -y /dev/null
    ffmpeg -y -i "${f}.mp4" -c:a copy -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 800k -vf "scale=-2:540" -f mp4 -pass 2 "${f}_800.mp4"

    ffmpeg -y -i "${f}.mp4" -c:a copy -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 400k -vf "scale=-2:360" -f mp4 -pass 1 -y /dev/null
    ffmpeg -y -i "${f}.mp4" -c:a copy -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 400k -vf "scale=-2:360" -f mp4 -pass 2 "${f}_400.mp4"

    rm -f ffmpeg*log*

    MP4Box -dash 2000 -rap -frag-rap -profile onDemand "${f}_2300.mp4" "${f}_1500.mp4" "${f}_800.mp4" "${f}_400.mp4" -out "${f}_MP4.mpd"

    rm  "${f}_2300.mp4" "${f}_1500.mp4" "${f}_800.mp4" "${f}_400.mp4"

    fi

done

cd "$SAVEDIR"

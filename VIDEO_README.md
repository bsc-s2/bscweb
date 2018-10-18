#### 视频更换操作步骤（仅建议体积大时使用）：

1. 将需要更换的视频下载到本地(此处假设下载到项目根目录)
2. 运行脚本 sh transcode-run.sh （需要安装 ffmpeg、MP4Box,可使用 brew install ffmpeg、brew install MP4Box 进行安装）
3. 将生成的文件上传到市场部存储的 website/ 文件夹下即可
4. 更换 .mpd 文件 URL

```
PS：视频需要MP4格式（可直接修改后缀名或者使用 ffmpeg 进行转码）
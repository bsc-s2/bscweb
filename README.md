# Baishancloud Official Website

测试地址: http://172.18.2.32
官网项目，基于Jekyll进行开发。

## 项目结构

```
- _data            // 格式化好的数据。例如该目录下有news文件，可以通过site.data.news获取news文件的内容
  - customers      // 首页客户
  - index-product  // 首页产品
  - navbar         // 导航条
  - news           // 新闻
- _includes        // 类似一个个组件，用{% include learn-more.html %}将组件插入页面中
  - bottom         // 底部
  - head           // 头部
  - learn-more     // 了解更多（表单）
  - navbar         // 导航条
- _layouts         // 布局，模板
  - default        // 默认模板
- _site            // 一旦Jekyll完成转换，就会将生成的页面放在这里（默认）
- index                      // 首页
- tech                       // 产品技术
  - atd                      // 产品技术-ATD
  - cdn                      // 产品技术-CDN
  - cwn                      // 产品技术-CWN
  - fengchao                 // 产品技术-蜂巢
- solution                   // 解决方案
  - index
  - aviation-safety          // 解决方案-航司安全
  - corporate-digitization   // 解决方案-企业数字化转型
  - game-safety              // 解决方案-游戏安全
  - government-security      // 解决方案-政府安全
  - information-security     // 解决方案-资讯信息安全
  - internet-banking         // 解决方案-互联网金融安全
  - new-government-affairs   // 解决方案-新型政务数据共享交换
  - online-education         // 解决方案-在线教育
- news                       // 新闻动态
  - index
- more                       // 更多
  - index
- public
  - css
  - fonts
  - image
  - js
```

## 开发

```bash
npm install            # warn`版本不兼容` 请忽略 
npm run build          # 启用webpack将js、css代码打包压缩到 /dist/ 下

$ jekyll serve         # 访问 http://127.0.0.1:4000/ 
```

## 部署测试
测试分支位于 github/release
保证本地有 release 分支，并已更新到最新版本
```bash
$ sh build-test.sh
$ git checkout release && git push
$ ssh root@172.18.2.32
$ cd /usr/local/dashboard/web/dashboard && git pull
```

## 部署测试
由于线上机器无法科学上网，拉取 github 代码缓慢，线上分支位于 [coding](https://coding.net/u/adwerrd/p/bscweb/git/tree/release-v2) 
保证本地有 release-v2 分支，并已更新到最新版本
```bash
$ sh build-release.sh
$ git checkout release-v2 && git push
$ git push
```

服务器自动检测代码更新，每隔10分钟刷新一次缓存，如果重要更新或者bugfix 可以联系 cdn 同学帮忙刷新缓存，防止出现版本不同步的情况
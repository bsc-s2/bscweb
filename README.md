# Baishancloud Official Website

测试地址: http://172.18.2.32
官网项目，基于Jekyll进行开发。

## 项目结构

```
- _data // 格式化好的数据。例如该目录下有news文件，可以通过site.data.news获取news文件的内容
  - customers  // 客户
  - news // 新闻
- _includes // 类似一个个组件，用{% include learn-more.html %}将组件插入页面中
  - bottom // 底部
  - head // 头部
  - learn-more // 了解更多（表单）
  - navbar-home // 首页的导航条
  - navbar-more // 更多的导航条
  - navbar-news // 新闻动态的导航条
  - navbar-product // 产品技术的导航条
  - navbar-solution // 解决方案的导航条
- _layouts // 布局，模板
  - default // 默认模板
- _posts // 一个个页面
  - 2018-04-08-more
  - 2018-04-08-news
  - 2018-04-08-solution-互联网金融
  - 2018-04-08-solution-企业数字化转型
  - 2018-04-08-solution-在线教育
  - 2018-04-08-solution-政府安全
  - 2018-04-08-solution-新型政务数据共享交换
  - 2018-04-08-solution-游戏行业
  - 2018-04-08-solution-航空安全
  - 2018-04-08-solution-资讯信息安全
  - 2018-04-08-solution
  - 2018-04-08-technology-atd
  - 2018-04-08-technology-cdn-x
  - 2018-04-08-technology-cwn-x
  - 2018-04-08-technology-fengchao
- _site // 一旦Jekyll完成转换，就会将生成的页面放在这里（默认）
- public
  - css
  - fonts
  - image
  - js
```

## 开发

```bash
$ jekyll serve         # 访问 http://127.0.0.1:4000/
```

## 部署测试

```bash
$ ssh root@172.18.2.32
$ cd /usr/local/dashboard/web/dashboard && git pull
```
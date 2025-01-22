var posts=["2024/02/14/hexo与Typora插入图片的解决方法/","2024/02/24/Transformer经典论文阅读后综述/","2024/03/13/如何快速让个人博客被搜索引擎收录/","2024/03/07/虚拟定位完成校园跑/","2024/02/14/Git教程/","2024/05/10/视频异常检测领域论文综述/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
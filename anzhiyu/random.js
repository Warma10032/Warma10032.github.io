var posts=["2024/02/14/Git教程/","2024/10/04/OpenGL学习笔记/","2024/02/24/Transformer经典论文阅读后综述/","2025/01/17/【ML-BTC复现】多标记学习领域算法复现（多标签二叉分类树）/","2024/02/14/hexo与Typora插入图片的解决方法/","2025/01/24/【S2VT复现】使用S2VT完成视频描述任务的复现记录/","2025/01/24/【SEU-OS-Lab1】东南大学操作系统专题实践一教程/","2025/01/24/【SEU-OS-Lab2】东南大学操作系统专题实践二教程/","2025/01/24/【SEU-OS-Lab3】东南大学操作系统专题实践三教程/","2024/03/13/如何快速让个人博客被搜索引擎收录/","2024/03/07/虚拟定位完成校园跑/","2024/05/10/视频异常检测领域论文综述/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
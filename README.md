# ArcherGame
施工中。。。（前言里都是一些感慨balabala，可跳过）  
  
# 前言  
&nbsp;&nbsp;&nbsp;&nbsp;学生时代有段时间一直活跃在M游戏，BBS贴吧也活跃，试过帖子上集合贴（版主有爱），还在一次每月竞拍拿到了心仪的布偶公仔（现在还在老家）  
&nbsp;&nbsp;&nbsp;&nbsp;一直很敬仰那些热爱M游戏，并且制作出方便玩家查阅、搭配的工具的玩家。  
&nbsp;&nbsp;&nbsp;&nbsp;偶然看到了在用的开源工具的源码，用的.NET（大概是08年，个人对原作者了解很少，而且TA很低调，也不把源码git，no license declare，后来听说是几个人合作的工程，软件署名的原作者是发布人）  
&nbsp;&nbsp;&nbsp;&nbsp;学校教过编程语言，偶尔在晚上花一两小时去浏览，顺带了解游戏的部件分类。  
&nbsp;&nbsp;&nbsp;&nbsp;某一天，游戏更新，客户端里character文件里面部分元素出现指针（索引）偏差，原来的工具没有做适应，影响到正常使用了。出于莫名的使命感，发现问题后天天看源码，不懂模块和语法使用，就抽时间看C#相关的书（微软大法好）  
&nbsp;&nbsp;&nbsp;&nbsp;这个工具的源码量并不少。摸鱼一个月都在盲探，进度艰难。后来改变了策略，打开程序本体，用组件的方法分离，在纸上电脑上不断去梳理组件彼此的关系。  
&nbsp;&nbsp;&nbsp;&nbsp;三个月过去，合着对客户端和工具的理解，总算摸到了足够多的关键点（摸鱼这么久居然原作者没反应。。空档期里小伙伴都很着急）  
&nbsp;&nbsp;&nbsp;&nbsp;我的把握在于，源码里没有对新的400系列的目录读取。我当作简单的BUG修复处理。其实原来的编码结构其实算不上高明（后来原作者连带重构后的源码一并交给别人上传到群里）  
&nbsp;&nbsp;&nbsp;&nbsp;那年8月中旬的时候，决心调试了三天三夜（2点怕影响室友就合上电脑），调试完成后笑的很欣慰（后来因为忽视颜色区域又发布了一遍）  
&nbsp;&nbsp;&nbsp;&nbsp;步入社会的今天，我估摸着用有余的时间，用M游戏的素材，加之我的简易想法，一点点把这个简单的游戏弄完备，已祭奠我童时的回忆。    

  
# 计划
用原生JS编写一个射箭小游戏  
难点：物理效果，碰撞反馈  
设计图：还在纸上emmm  
  
第一阶段先把主场景各个元素配布，最简单的是静态（0帧）场景，相当于Default状态。  
然后，想办法动起来（BUG满天飞？）  
没经验不代表做不到，少走弯路不代表不走路。不过百度看到的资料还是挺膈人的，估计要啃生英语（苦笑）  
  
# 进度
<2018-9-29>  
考虑到物理实现，特效向MorghSVG，完备性直接上Egret，两者都需要些时间去学习。（看着Vue的要求挺多的，教程上小步快跑ing）  
<2018-10-06>  
参考不同风格开源游戏项目。考虑到移动端的使用，确定目标线性运动而非随机分布。  
<2018-10-08>  
有幸认识FreeCodeCamp，发现不少新玩法。  

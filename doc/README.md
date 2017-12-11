CSS3扁平化博客<br>
课程介绍<br>
1 理解网页布局结构<br>
2 掌握网页布局基本步骤<br>
3 掌握博客类网页的布局思想<br>
4.掌握网页组件重用思想<br>
5.掌握博客也常用组件的布局方法<br>
6.掌握文章内容页的布局方法<br>
<br>
js使用严格模式：<br>
'use strict'<br>
<br>
<br>
文件格式<html></html> (文件的开头与结尾)<br>
主题<title></title> (放在文件的开头)<br>
文头区段<head></head> (描述文件的信息)<br>
内文区段<body></body> (放此文件的内容)<br>
<!-- 标题<h?></h> (?=1~6,改变标题字的大小) --><br>
标题对齐<h align=right,left,center></h><br>
字加大<big></big><br>
字变小<small></small><br>
粗体字<b></b><br>
斜体字<i></i><br>
底线字<u></u><br>
上标字<sup></sup><br>
下标字<sub></sub><br>
居中<center></center><br>
居左<left> </left><br>
居右<right> </right><br>
基本字体大小<basefont size> (取值范围从1到7，默认值为3)<br>
改变字体大小<font size=?></font>(?=1~7)<br>
字体颜色<font color=#rrggbb></font> (RGB色码)<br>
<br>
<section> 标签<br>
定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。<br>
<section> 标签是 HTML 5 中的新标签。<br>
<br>
<nav> 标签定义导航链接的部分。<br>
HTML 4.01 与 HTML 5 之间的差异<br>
<nav> 标签是 HTML 5 中的新标签。<br>
提示和注释<br>
提示：如果文档中有“前后”按钮，则应该把它放到 <nav> 元素中。<br>
HTML5中的新元素标签<nav>用来将具有导航性质的链接划分在一起，使代码结构在语义化方面更加准确，<br>
	同时对于屏幕阅读器等设备的支持也更好。<br>
一直以来，我们习惯于使用形如<!-- <div id="nav">或<ul id="nav"> --><br>这样的代码来写页面的导航；在HTML5中，我们可以直接将导航链接列表放到<nav>标签中<br>
nav元素是一个可以用来作为页面导航的链接组；其中的导航元素链接到其他页面或当前页面的其他部分。并不是所有的链接组都要被放进<nav><br>元素；例如，在页脚中通常会有一组链接，包括服务条款、首页、版权声明等；这时使用<footer>元素是最恰当的，而不需要<nav>元素。<br>
一个页面中可以拥有多个<nav>元素，作为页面整体或不同部分的导航；<br>

<br>
reset.css重置样式，去除所有的样式包括标题的字体大小<br>
normalize.css常规化样式，在默认的HTML元素样式上提供了跨浏览器的高度一致性。相比于传统的CSS <br>reset，Normalize.css是一种现代的、为HTML5准备的优质替代方案<br>

Lorem+tab键生成英文乱码<br>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo iste, alias, quibusdam soluta aliquam maxime modi reiciendis <br>ut excepturi, aperiam fuga hic! Nam illum saepe officia repudiandae explicabo. Libero, consectetur.<br>

用ul和li为例，直接在li中加display-inline和float：right，那么第一个元素反而会跑到最右边的，因为浮动是重第一个开始的，而用ul家float：<br>right就不会出现这个问题<br>
理解文档流的概念 是一个重点的内容 实际上文档的模型默认的都是一种流模型<br>





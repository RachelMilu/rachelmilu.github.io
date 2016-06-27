# 前端“动手”指南

## 前言

本文的目标读者是非前端从业人员。

本文的期望是使本文的目标读者在遇到一些基础的前端的问题时能尝试自己去搜索和解决问题。

笔者将以通俗的语言解释一些基础的前端知识，因此本文可能有诸多不严谨的地方，如有误导的地方请大家指正。

本指南的信息基本来自互联网，大多数来自下面三个网站：
[w3school](http://www.w3school.com.cn/) | [菜鸟教程](http://www.runoob.com/) |  [MDN](https://developer.mozilla.org/zh-CN/)   


### 重要的事
前端的知识点很多，有很多细节，有很多要记的东西，短时间内不可能都掌握。

这篇文章给了你一些基础知识的解释和链接，如果你遇到搞不定的问题又希望自己解决的话，可以查查前端的关键字，再到搜索引擎搜索。

如果你需要更多现成的类似bootstrap、JQ、Angular 之类的现成的、拿来就用的东西，直接查询他们的官方文档是个不错的办法。

本文里加上的链接里都是类似参考手册的页面，建议点一点瞄一瞄。

## 基础知识
我知道你现在可能急于用angular或者react或者任何一个热门的框架写前端页面，但是我还是建议你花一点时间了解一下html，css和js。

### [html简介](http://www.runoob.com/html/html-tutorial.html)
* HTML（超文本标记语言: HyperText Markup Language）是用来描述网页的一种语言。
* HTML 使用标记标签来描述网页：`<标签>内容</标签>`。在日常的表述中，"HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思.
* 标签里面可以设置属性，如：`<标签 属性名="属性值">内容</标签>`， [查看更多html全局属性](http://www.runoob.com/tags/ref-standardattributes.html)

#### 简单的总结
* 笔者最常使用的标签是`<div></div>`。除了一个完整的html文档必须的html、head、body元素以外，页面上的一切元素，在你还没有[找到最适合的语义化标签](http://www.w3school.com.cn/tags/index.asp)之前，你都可以使用div标签。
* 将会换行的元素和不换行的元素加以区分。由于div元素默认换行，如果你不想页面上的元素换行，你可以使用span标签和i标签。    
* 记住一些常用的标签以及掌握他们各自的特点。比如段落文字用p标签，图片使用img标签，超链接使用a标签，列表使用ul和li标签，下拉选择使用select和option标签，表单则常常使用form，input和button标签、些标签又有哪些常用属性配合使用会在接下去的项目中提高开发效率、减少维护成本。
    
* html5。了解了html之后，看一眼[html5的介绍](http://www.w3school.com.cn/html5/index.asp)你就会知道，html5就是在html的基础上新增、废弃了一些标签。


### [css简介](http://www.w3school.com.cn/css/css_syntax.asp)
* 记住HTML标签用来定义文档内容。css用来表示如何显示html。
* css的基本语法就是```` 选择器 {属性：属性值；}````。在html上使用id属性和class属性的标签，可以使用对应的id选择器，类选择器和标签选择器
* css的属性有：[CSS 参考手册](http://www.w3school.com.cn/cssref/index.asp)
* css的选择器有优先级（专业叫法叫“特殊性”），因此你想要覆盖别人的样式时，优先级（特殊性）就要比人家高。    
> `内联样式，id，类/属性，元素/伪元素 `不是十进制，完全按左到右比较。    
> 重要声明（！important）比上面特殊性都高，放置在最后，即分号前面。    

#### 简单的总结
下面这一行表示在html文件中引入一个css文件。

````
<link rel="stylesheet" href="css/directive.css"> 
````

下面的代码表示在html文件的<style></style>标签之间写css。

````
<div id="myDiv" class="my-div">demo</div>

<style>//文档内样式
div {
    color: red;
}
#myDiv {
    font-size: 14px;
}
.my-div {
    background: #fff;
}
</style>
````

下面的代码表示在html的标签里直接书写css，建议不到万不得已别这么写css。

````
<div style="color:red;font-size:14px;background:#fff;">demo</div> //行内样式
````


我们一般使用class选择器、id选择器和标签选择器在css文件中书写，尽量避免在html的标签中使用style属性写css，也要避免使用！import，因为如果你这么做了，到后来你会发现到处都是！import，样式难以维护。

下面列出的这些很重要，如果读了很多帖子还是不能让你完全明白的话，建议你买一本css的教程看一下，这里推荐《css权威指南》。    
[盒（框）模型参考文档2](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)    
[定位](http://www.w3school.com.cn/css/css_positioning.asp)    
[浮动](https://developer.mozilla.org/zh-CN/docs/CSS/float)     
[居中](https://mp.weixin.qq.com/s?__biz=MzA4NjE3MDg4OQ==&mid=2650963411&idx=1&sn=9faf0aa8e5d7824ac43ad846653ec345&from=singlemessage)    
[css3](http://www.w3school.com.cn/cssref/index.asp)，了解了css之后，再来看css3，你会发现css3就是又比css多了一些强大的属性。    



### [js](http://www.w3school.com.cn/jsref/index.asp)
js包括核心（ECMAscript）和文档对象（DOM）和浏览器对象（BOM）。

#### ECMAscript
ECMAscript规定了这门语言的语法、类型、语句、关键字、保留字、操作符和对象等。

#### [DOM](http://www.w3school.com.cn/htmldom/dom_methods.asp)
开发人员可以通过DOM来对页面结构进行增删改查。
* [所有的html DOM 方法/属性](http://www.w3school.com.cn/jsref/dom_obj_all.asp)
下面列出一些常见的方法：

````
一些常用的 HTML DOM 方法：
方法	描述
getElementById()	返回带有指定 ID 的元素。
getElementsByTagName()	返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。
getElementsByClassName()	返回包含带有指定类名的所有元素的节点列表。
appendChild()	把新的子节点添加到指定节点。
removeChild()	删除子节点。
replaceChild()	替换子节点。
insertBefore()	在指定的子节点前面插入新的子节点。
createAttribute()	创建属性节点。
createElement()	创建元素节点。
createTextNode()	创建文本节点。
getAttribute()	返回指定的属性值。
setAttribute()	把指定属性设置或修改为指定的值。

一些常用的 HTML DOM 属性：    
innerHTML - 节点（元素）的文本值
parentNode - 节点（元素）的父节点
childNodes - 节点（元素）的子节点
attributes - 节点（元素）的属性节点

````


#### [BOM](http://www.w3school.com.cn/jsref/dom_obj_window.asp)
Browser对象包括 Window、Navigator、Screen、History、Location这些对象，可以利用这些对象查看浏览器的相关信息和进行浏览器相关的操作。

## 浏览器相关知识
### [调试之打断点](http://han.guokai.blog.163.com/blog/static/136718271201321402514114/) 
笔者喜欢用`debugger;`在js中打断点；

### 网络请求
在chrome的开发者工具中选择“Network”来查看请求情况。
### console
chrome自带的console里可以直接跑js语句，所以有些函数的测试直接可以在console里面测试。

## 常用框架介绍
### jQuery
* [选择器](http://www.w3school.com.cn/jquery/jquery_ref_selectors.asp)

````
$('.class')
$('#id')
$('div')
$().find()
````

* [事件委托（事件代理）](http://www.ituring.com.cn/article/467)

````
$(elems).on(events, selector, data, fn);
$(elems).off(events, selector, fn);
如果指定selector，则为事件委托；否则，就是常规绑定。
````
* [ajax:post/get/jsonp](http://www.w3school.com.cn/jquery/jquery_ref_ajax.asp)

### [Angular](http://www.angularjs.cn/T008)
* [核心概览](http://www.angularjs.cn/A00q#scope)
* [作用域](http://www.angularjs.cn/A00y)

### [Bootstrap](http://v3.bootcss.com/)
* 看一下“全局css样式”和“组件”基本可以找到常用的样式。
* 如果要使用“javascript插件”一栏定义的插件，记得导入特定的js文件，通常可以在bootstrap目录下的js目录里面可以找到。

## 注意插件积累，最好区分PC端和移动端
### AdminLTE
* 基于bootstrap3的开源面板主题插件，支持响应式、可复用、通用组件
* [git](https://github.com/almasaeed2010/AdminLTE)
* [demo](https://www.almsaeedstudio.com/themes/AdminLTE/pages/tables/data.html)
* [DOC](https://www.almsaeedstudio.com/themes/AdminLTE/documentation/index.html)

### highcharts
* 绘制图表的angular插件
* [git address](https://github.com/pablojim/highcharts-ng) , [英文 DOC](http://api.highcharts.com/highcharts#Chart), 
* [中文教程](http://www.runoob.com/highcharts/highcharts-tutorial.html)    
类似的还有echart.js和chart.js

### 取范围的时间控件，适合后台系统
* git 地址: https://github.com/dangrossman/bootstrap-daterangepicker/
* DOC: http://www.daterangepicker.com/#usage

### 列表分页组件dataTable，适合后台系统
使用dataTable来进行前端分页：
 
* git 地址: https://github.com/DataTables/DataTables
* DOC: https://datatables.net/examples/data_sources/index.html

### font awesome
字体图标使用font-awesome

* [git 地址](https://github.com/FortAwesome/Font-Awesome)
* [DOC](http://fontawesome.io/)
* [中文](http://www.bootcss.com/p/font-awesome/)

### 字体图标素材
http://www.iconfont.cn/search?q=arrow

## 反馈
如果您看完了本文，期待您能给一些反馈，使本文档不断完善和带来更多的帮助。感谢！

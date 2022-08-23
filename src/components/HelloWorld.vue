<template>
<img src="../../public/assets/pwa/android-chrome-512x512.png" alt="logo" id="logo" />
<p style="white-space: pre;"> </p>
<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent">下载</button>

<router-link to="/login"><button class="mdui-btn mdui-btn-raised mdui-ripple"> 前往Web端</button>
</router-link>
<br>
<div id="intro">我们是一家<div id="penshuijiroufan" class="rgb">
    <span>高情商</span>
</div>的聊天软件</div>
</template>

<style>
#intro{
    font-size: 60px;
    position: absolute;
}
#penshuijiroufan{
    color: #07a6f1
}
#logo{
    width: 200px;
    height: 200px;
}
.rgb{
color:rgb(0, 156, 255);
transition: 0.5s;
animation:change 10s linear 0s infinite;
}
@keyframes change{
0% {
color: #A66CFF;
}
25% {
color: #9C9EFE;
}
50% {
color: #AFB4FF;
}
75% {
color: #B1E1FF;
}
100% {
color: #A66CFF;
}
}
</style>

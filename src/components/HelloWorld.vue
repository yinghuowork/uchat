<template>
<img src="../../public/assets/pwa/android-chrome-512x512.png" alt="logo" id="logo" />
<p style="white-space: pre;"> </p>
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
color: #A8D8EA;
}
25% {
color: #AA96DA;
}
50% {
color: #FCBAD3;
}
75% {
color: #FCBAD3;
}
100% {
color: #A8D8EA;
}
}
</style>

<template>
<header class="appbar mdui-appbar mdui-appbar-fixed">
  <div class="mdui-toolbar mdui-color-theme">
    <span
      class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
      mdui-drawer="{target: '#drawer', swipe: true}"
    >
      <i class="mdui-icon material-icons">menu</i>
    </span>
    <a href="./" class="mdui-typo-headline mdui-hidden-xs">Uchat</a>
  </div>
</header>
<div class="mdui-drawer mdui-drawer-close" id="drawer">
  <ul class="mdui-list">
    <router-link to="/">
    <li class="mdui-list-item mdui-ripple">
      <i class="mdui-list-item-icon mdui-icon material-icons">folder</i>
      <div class="mdui-list-item-content">首页</div>
    </li>
    </router-link>
    <router-link to="about">
    <li class="mdui-list-item mdui-ripple">
      <i class="mdui-list-item-icon mdui-icon material-icons">account_circle</i>
      <div class="mdui-list-item-content">关于</div>
    </li>
    </router-link>
  </ul>
</div></template>

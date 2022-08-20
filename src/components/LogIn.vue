<template>
<button class="mdui-btn mdui-ripple mdui-color-theme-accent"
 mdui-dialog="{target: '#exampleDialog', history: false, modal: true}">登录</button>

<div class="mdui-dialog login-interface" id="exampleDialog">
    <button class="mdui-btn mdui-btn-icon" mdui-dialog-close>
        <i class="mdui-icon material-icons">close</i></button>
    <div class="mdui-dialog-title mdui-color-indigo">登录</div>
    <form id="login-form">
        <div class="mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label" placeholder="" for="1" @ignore="a11y">用户名或邮箱</label>
            <input class="mdui-textfield-input" required />
            <div class="mdui-textfield-error">账号不能为空</div>
        </div>
        <div class="mdui-textfield mdui-textfield-floating-label">
            <label class="mdui-textfield-label" placeholder="" for="2" @ignore="a11y">密码</label>
            <input class="mdui-textfield-input" type="password" required />
            <div class="mdui-textfield-error">密码不能为空</div>
        </div>
        <div class="actions">
            <button class="mdui-btn mdui-ripple more-options" type="button"
            mdui-menu="{target: '#mc-login-menu', position: 'top', covered: true}">
                更多选项
                <i class="mdui-icon material-icons mdui-text-color-theme-icon">arrow_drop_down</i>
            </button>
            <ul class="mdui-menu" id="mc-login-menu">
                <li class="mdui-menu-item"><a class="mdui-ripple">忘记密码</a></li>
                <li class="mdui-menu-item"><a class="mdui-ripple">创建新账号</a></li>
            </ul>
            <div class="divider"></div>
            <button type="submit" class="mdui-btn mdui-btn-raised mdui-color-blue">登录</button>
        </div>
    </form>
</div>
</template>

<style>
.login-interface {
    max-width: 448px;
    overflow-y: auto;
}
.login-interface > [mdui-dialog-close] {
    position: absolute;
    top: 4px;
    left: 4px;
    display: block;
    color: white;
}
.login-interface > .mdui-dialog-title {
    margin-bottom: 24px;
    padding: 146px 40px 28px;
}
.login-interface > form {
    padding: 0 40px 62px;
}
.login-interface .actions {
    margin-top: 24px;
    display: flex;
}
.login-interface .actions > .divider {
    flex: 1 1;
}
.login-interface .actions > .more-options {
    margin-left: -16px;
}
@media (max-width: 599.9px) {
    .login-interface {
        position: fixed!important;
        top: 0!important;
        right: 0!important;
        bottom: 0!important;
        left: 0!important;
        width: 100%!important;
        max-width: none!important;
        height: 100%!important;
        max-height: none!important;
        margin: 0!important;
        border-radius: 0!important;
    }
    .login-interface > [mdui-dialog-close] {
        top: 10px;
        left: 8px;
    }
    .login-interface > .mdui-dialog-title {
        padding: 10px 16px 10px 52px;
        line-height: 36px;
    }
    .login-interface > form {
        padding: 0 24px 24px;
    }
    .login-interface .actions {
        margin-top: 14px;
    }
}
</style>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/assets/js/login.js';
    document.body.appendChild(script);
  },
};
</script>

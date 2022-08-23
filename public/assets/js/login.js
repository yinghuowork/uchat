document.getElementById('login-form').addEventListener('submit', event => {
    event.preventDefault();
    mdui.snackbar('没有用的，不会真的登录的');
    mdui.snackbar('error: 后端出现错误');
});
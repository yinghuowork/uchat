/**
 * 前端注意了，这个API是后端给你们的
 * 用于注册账户，下面的参数注释看好了，不要用错
 */

 function registered(Server,Port,User,Pwd,Tel)
 {
     /**
      * 参数说明
      * Server: 注册的服务器对象，需要加 http 或者 https
      * Port: 注册的服务器端口
      * User: 注册的用户名
      * Pwd: 注册的密码
      */
     //判断是否存在非法字符
     var keyword = [
         "%","!","#","$","^","*","(",")","-","+",
         "~",",",".","?","`","P","Q","R","S","T",
         "U","V","W","X","Y","&","\\","/"," "
     ];
     for (i = 0 ; i < keyword.length ; i++)
     {
         if (User.indexOf(keyword[i]) != -1)
         {
             alert("用户名中含有非法字符:"+keyword[i]);
             return "用户名中含有非法字符";
         }
         if (Pwd.indexOf(keyword[i]) != -1)
         {
             alert("密码中含有非法字符:"+keyword[i]);
             return "密码中含有非法字符";
         }
         if (Tel.indexOf(keyword[i]) != -1)
         {
             alert("电话中含有非法字符:"+keyword[i]);
             return "电话中含有非法字符";
         }
     }
     //判断是否存在中文
     var reg = /[\u4E00-\u9FA5]/g;
     if (reg.test(User))
     {
         alert("用户名中含有中文");
         return "用户名中含有中文";
     }
     if (reg.test(Pwd))
     {
         alert("密码中含有中文");
         return "密码中含有中文";
     }
     if (reg.test(Tel))
     {
         alert("电话中含有中文");
         return "电话中含有中文";
     }
     //判断是否为空
     if (User == ""||Pwd == ""||Tel == ""){
         alert("用户名、密码、电话不能为空");
         return "用户名、密码、电话不能为空";
     }else{
         var PWD_User=Add_PWD(User);
         var PWD_Pwd=Add_PWD(Pwd);
         var PWD_Tel=Add_PWD(Tel);
         //使用GET方法
         var url=Server+":"+Port+"/?User="+PWD_User+"&Pwd="+PWD_Pwd+"&&"+"Tel="+PWD_Tel+"&&&";
         window.location.href=url;
         return true;
     }
 }
 function Add_PWD(value)
 {
     var keyword=[
         "a","b","c","d","e","f","g","h","i","j",
         "k","l","m","n","o","0","1","2","3","4",
         "5","6","7","8","9"
     ];
     var TargetWord=[
         "%","!","#","$","^","*","(",")","-","+",
         "~",",",".","?","`","P","Q","R","S","T",
         "U","V","W","X","Y"
     ];
     for (var i = 0; i < keyword.length; i++) {
         value=value.replace(keyword[i],TargetWord[i]);
     }
     return value;
 }
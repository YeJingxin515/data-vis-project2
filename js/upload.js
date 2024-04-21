function showLoading() {
    // 显示背景板和加载框
    document.getElementById('overlay').style.display = 'flex';

    // 三秒后隐藏加载框
    setTimeout(function() {
        document.getElementById('overlay').style.display = 'none';
    }, 3000);

    // 延时刷新页面
    setTimeout(function() {
        location.reload(); // 刷新页面
    }, 3000); // 3000 毫秒后刷新页面（3 秒）
}

function add(){
    showLoading()
}
// 每次登录进入系统时弹一次提示（同一标签页内刷新不再弹，重新登录后再次弹出）
try {
    if (!sessionStorage.getItem('fafu_alert_shown')) {
        alert(decodeURIComponent(atob('JUU2JUFEJUE0JUU0JUJDJTk4JUU1JThDJTk2JUU4JTg0JTlBJUU2JTlDJUFDJUU0JUI4JUJBJUU4JUE3JUEzJUU1JTg2JUIzJUU1JUE0JUE3JUU1JUE0JTlBJUU2JTk1JUIwJUU4JUFFJUJFJUU1JUE0JTg3JUU2JTk3JUEwJUU2JUIzJTk1JUU2JUFEJUEzJUU1JUI4JUI4JUU5JTgwJTg5JUU0JUJEJTkzJUU4JTgyJUIyJUU4JUFGJUJFJUU4JTgwJThDJUU3JTk0JTlG')));
        sessionStorage.setItem('fafu_alert_shown', '1');
    }
} catch (e) {
    // 忽略 sessionStorage 不可用的情况
}

// 调整选课列表高度（等待页面元素出现后生效）
setInterval(() => {
    const iframe = document.getElementById('iframeautoheight');
    if (!iframe) return;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDoc) return;
    const list = iframeDoc.querySelector('#ListBox2');
    if (list) list.style.height = '75%';
}, 500);

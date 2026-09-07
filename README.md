# 农林大教务系统优化扩展

将「农林大教务系统优化小脚本」封装成的浏览器扩展（Manifest V3）。
**无需安装油猴 / Tampermonkey 等脚本管理器**，直接在浏览器中以扩展形式运行。

## 功能

- 每次登录教务系统时弹出一次提示
- 自动将选课列表（`#ListBox2`）高度调整为 75%，方便小屏设备正常选课

## 支持站点

- `http://jsxyjwgl.fafu.edu.cn/*`
- `http://jwgl.fafu.edu.cn/*`

## 一键下载

- **[⬇ 下载扩展压缩包 v0.0.1](./dist/fafu-jw-extension-v0.0.1.zip)**：解压后文件夹内直接就是 `manifest.json`，即装即用
- 或点击仓库右上角绿色 **Code → Download ZIP** 下载完整源码（含本文档）

> 两种 zip 任选其一；若浏览器把 zip 识别为风险文件，忽略提示保留即可（本扩展仅修改页面样式与提示，无任何网络请求）。

## 安装方法（Chrome / Edge）

1. 下载上方 ZIP 并**解压**（源码包需进入内层 `fafu-jw-extension-main` 文件夹）
2. 打开浏览器地址栏输入 `chrome://extensions`（Edge 输入 `edge://extensions`）
3. 打开右上角 **开发者模式** 开关
4. 点击 **加载已解压的扩展程序**
5. 选择包含 `manifest.json` 的那一层文件夹
6. 完成！重新访问教务系统即可生效

> 提示：本地加载的扩展浏览器重启后仍保留；若被浏览器停用，重新开启开发者模式再加载一次即可。后续要更新时，在 `chrome://extensions` 点击扩展卡片上的 **刷新** 图标并重新加载页面。

## 目录结构

```
fafu-jw-extension/
├── manifest.json          # 扩展清单（MV3 配置）
├── content.js             # 注入脚本（弹窗提示 + 调整列表高度）
├── README.md              # 本说明
└── dist/
    └── fafu-jw-extension-v0.0.1.zip  # 一键下载的安装包（manifest + content.js）
```

## 更新方法

- **方式一**：下载最新 `dist` 压缩包，覆盖解压目录后，在 `chrome://extensions` 点击扩展卡片上的 **刷新** 图标并刷新教务页面
- **方式二**：克隆仓库后本地修改并 `git pull` 更新

## 常见问题

**Q：弹窗为什么只出现一次？**
A：每个登录会话（同一标签页）只弹一次，刷新不会重复弹出；关闭标签页后再次登录会重新弹出。

**Q：想再次看到提示弹窗怎么办？**
A：在教务网站按 `F12` → Application → 左侧 Session Storage 中删除键 `fafu_alert_shown`，再刷新即可。

**Q：为什么不能直接双击 .crx 安装？**
A：Chrome 33+ 出于安全考虑只允许安装来自 Chrome 应用商店的扩展。个人分发请使用「加载已解压的扩展程序」方式。

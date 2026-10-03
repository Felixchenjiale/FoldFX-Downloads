# FoldFX Direct

FoldFX 根据支持的 MacBook 机盖角度，让桌面呈现投影与渐变毛玻璃效果。

本仓库仅用于分发安装包、校验文件和独立静态下载页；不包含应用研发源码、内部资料、dSYM 或用户数据。

## 下载

- [FoldFX Direct 0.1.0（4）安装包](https://github.com/Felixchenjiale/FoldFX-Downloads/releases/download/direct-v0.1.0-build4/FoldFX-Direct-0.1.0-4-notarized.zip)
- [发布说明与网页部署包](https://github.com/Felixchenjiale/FoldFX-Downloads/releases/tag/direct-v0.1.0-build4)
- [SHA256SUMS](https://github.com/Felixchenjiale/FoldFX-Downloads/releases/download/direct-v0.1.0-build4/SHA256SUMS)

安装包为 arm64，最低部署配置为 macOS 15。唯一实机验证环境为 Apple M5 / macOS 27；其他机型、其他系统和干净用户首装仍未验证。自动机盖输入取决于硬件支持，未检测到支持的传感器时可使用手动或演示输入。Intel Mac 不支持此包。

Developer ID 签名、Apple 公证及票据验证通过；公证不是 App Store 审核，也不代表全机型兼容认证。Direct 官网版与沙盒版的身份、数据和产物独立，当前未上架 App Store。

## 安装与使用

1. 下载并解压，将 `FoldFX Direct.app` 移入“应用程序”。已有版本请先正常退出，保留旧版和个人数据备份后再升级。
2. 打开应用，按系统提示授予屏幕录制权限；必要时在系统设置中开启对应权限，再重新打开应用。不要关闭 Gatekeeper 或删除隔离标记来绕过安全检查。
3. 选择内置屏，使用“自动跟随机盖”输入并开始效果。未检测到传感器时先使用手动或演示输入。
4. 按 Esc 或从菜单栏停止效果可以恢复桌面。登录窗口、锁屏和系统安全界面不施加效果。

SHA-256：

```
40b20696b34150b2bb7acc4925b96b24baf157928b0f302b01b1901ec2579e62
```

将安装包和 SHA256SUMS 放在同一目录，可运行 `shasum -a 256 -c SHA256SUMS` 校验下载内容。

## 静态下载页

页面源文件位于 `website/foldfx/`。无需 Node、构建命令或后端；复制整个 `foldfx` 目录即可部署到网站子目录。样式、脚本和图片使用相对路径，安装包链接指向本次 GitHub Release 的精确版本，不会自动跳到后续未经验证版本。

默认目标路径为 `https://chenxiaoyue.com/foldfx/`，网站部署由站点负责人执行。本仓库不修改现有主页、不设置 DNS、不创建 GitHub Pages 或其他托管账户。

详细步骤见 [网站部署说明](website/DEPLOY.md)。页面配图是生成的效果意象，不是实际屏幕截图；页面不使用第三方统计、外部字体或跟踪脚本。

GitHub 自动生成的 Source code 附件仅含下载页与说明，不是应用源码或安装包；安装请使用上面的精确 ZIP 链接。

## 隐私与反馈

屏幕画面只在本机内存处理，不保存、不上传。应用不会自动上传报告或自动更新。

遇到问题时，可从“诊断与恢复…”主动导出故障报告，说明版本、系统、机型、复现步骤和现象。公开反馈前检查内容，勿上传密码、个人信息、屏幕截图或私密文件；报告含运行状态和有界事件，并非完整系统崩溃堆栈。

[提交反馈](https://github.com/Felixchenjiale/FoldFX-Downloads/issues)

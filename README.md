# FoldFX Direct

FoldFX 根据支持的 MacBook 机盖角度，让桌面呈现投影与渐变毛玻璃效果。

本仓库仅用于分发安装包、校验文件和独立静态下载页；不包含应用研发源码、内部资料、dSYM 或用户数据。

## 下载

- [FoldFX Direct 0.1.0（8）DMG 安装包](https://github.com/Felixchenjiale/FoldFX-Downloads/releases/download/direct-v0.1.0-build8/FoldFX-Direct-0.1.0-8.dmg)
- [ZIP 备用安装包](https://github.com/Felixchenjiale/FoldFX-Downloads/releases/download/direct-v0.1.0-build8/FoldFX-Direct-0.1.0-8-notarized.zip)
- [新版发布说明](https://github.com/Felixchenjiale/FoldFX-Downloads/releases/tag/direct-v0.1.0-build8)
- [DMG-SHA256SUMS](https://github.com/Felixchenjiale/FoldFX-Downloads/releases/download/direct-v0.1.0-build8/DMG-SHA256SUMS)
- [历史 0.1.0（4）与网页部署包](https://github.com/Felixchenjiale/FoldFX-Downloads/releases/tag/direct-v0.1.0-build4)

本次修正图标宽灰框，并在开盖自动恢复时主动隐藏控制台；本机图标和控制台隐藏已获确认。投影、模糊及鼠标参数不变。快速合盖约1秒再开盖仍有偶发效果未恢复反馈，此问题未修复；不将本轮视为全套效果回归通过。应用不自动升级。

安装包为 arm64，最低部署配置为 macOS 15。唯一实机验证环境为 Apple M5 / macOS 27；其他机型、其他系统和干净用户首装仍未验证。自动机盖输入取决于硬件支持，未检测到支持的传感器时可使用手动或演示输入。Intel Mac 不支持此包。

Developer ID 签名、Apple 公证及票据验证通过；公证不是 App Store 审核，也不代表全机型兼容认证。Direct 官网版与沙盒版的身份、数据和产物独立，当前未上架 App Store。

## 安装与使用

1. 下载并双击DMG，将 `FoldFX Direct.app` 拖到窗口内的 `Applications` 文件夹。复制完成后推出磁盘映像，再从“应用程序”打开；不要直接从DMG内运行。若选备用ZIP，则解压后移入“应用程序”。已有版本请先正常退出，保留旧版和个人数据备份后再升级。
2. 打开应用，按系统提示授予屏幕录制权限；必要时在系统设置中开启对应权限，再重新打开应用。不要关闭 Gatekeeper 或删除隔离标记来绕过安全检查。
3. 选择内置屏，使用“自动跟随机盖”输入并开始效果。未检测到传感器时先使用手动或演示输入。
4. 按 Esc 或从菜单栏停止效果可以恢复桌面。登录窗口、锁屏和系统安全界面不施加效果。

DMG SHA-256：

```
be771ee084c3cbc2194a551883e7b252b250dd6fb2f16c02791c532631cd4f81
```

将DMG与DMG-SHA256SUMS放在同一目录，可运行 `shasum -a 256 -c DMG-SHA256SUMS` 校验下载内容。新版备用ZIP使用同一新版Release中的SHA256SUMS，摘要为 `aa1701b8c76667e424d977c9bc66a39ff266a9e2f2bb525881799bea42c6bc8f`。DMG包含同一个已公证build8应用，封装时没有重新构建或重新签名应用；DMG容器另行Developer ID签名、公证并附票据。不要混用build4校验文件。

## 静态下载页

页面源文件位于 `website/foldfx/`。网站内容本轮保持不变，现有页面和网页部署包仍指向历史build4，不会自动切换到本次build8；请从上方新版链接下载。网站内容讨论后再安排页面更新。无需 Node、构建命令或后端；复制整个 `foldfx` 目录即可部署到网站子目录，样式、脚本和图片使用相对路径。

默认目标路径为 `https://chenxiaoyue.com/foldfx/`，网站部署由站点负责人执行。本仓库不修改现有主页、不设置 DNS、不创建 GitHub Pages 或其他托管账户。

最近的历史部署包为 `FoldFX-Web-Page-0.1.0-4-dmg-r1.zip`，校验文件为 `WEB-DMG-SHA256SUMS`，位于build4 Release；本次没有生成build8网页包。详细步骤见 [网站部署说明](website/DEPLOY.md)。页面配图是生成的效果意象，不是实际屏幕截图；页面不使用第三方统计、外部字体或跟踪脚本。

GitHub 自动生成的 Source code 附件仅含下载页与说明，不是应用源码或安装包；安装请使用上面的具名DMG或备用ZIP。原direct-v0.1.0-build4源码tag不改；DMG网页修订另保留web-v0.1.0-build4-dmg-r1 tag。

## 隐私与反馈

屏幕画面只在本机内存处理，不保存、不上传。应用不会自动上传报告或自动更新。

遇到问题时，可从“诊断与恢复…”主动导出故障报告，说明版本、系统、机型、复现步骤和现象。公开反馈前检查内容，勿上传密码、个人信息、屏幕截图或私密文件；报告含运行状态和有界事件，并非完整系统崩溃堆栈。

[提交反馈](https://github.com/Felixchenjiale/FoldFX-Downloads/issues)

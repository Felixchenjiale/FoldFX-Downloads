'use strict';

const verification = document.getElementById('verification');
document.getElementById('show-verification').addEventListener('click', () => {
  verification.open = true;
});

if (window.location.hash === '#verification') verification.open = true;
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#verification') verification.open = true;
});

document.getElementById('copy-checksum').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  const value = document.getElementById('checksum').textContent.trim();
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(value);
    status.textContent = '已复制';
  } catch {
    status.textContent = '无法自动复制，请手动选择上方校验值';
  }
});

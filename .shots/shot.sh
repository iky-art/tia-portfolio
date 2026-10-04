#!/data/data/com.termux/files/usr/bin/bash
# Screenshot halaman dari container Ubuntu (chromium hanya ada di sana).
# Dijalankan sebagai script file agar tidak memicu masalah quoting/flag CLI.
CHROME=/root/.cache/ms-playwright/chromium-1243/chrome-linux-arm64/chrome
OUT=/site/.shots
mkdir -p "$OUT"
"$CHROME" \
  --headless \
  --no-sandbox \
  --disable-gpu \
  --disable-dev-shm-usage \
  --hide-scrollbars \
  --force-device-scale-factor=1 \
  --window-size="$1","$2" \
  --virtual-time-budget=5000 \
  --screenshot="$OUT/$3" \
  "$4" 2>&1 | tail -5
ls -la "$OUT/$3"

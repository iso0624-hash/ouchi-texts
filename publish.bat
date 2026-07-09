@echo off
setlocal EnableExtensions EnableDelayedExpansion
pushd "%~dp0"
if "%~1"=="" (
  echo ERROR: commit message is required.
  popd
  exit /b 1
)
set "MSG=%~1"
for /f "delims=" %%B in ('git branch --show-current') do set "BRANCH=%%B"
if errorlevel 1 (
  popd
  exit /b %errorlevel%
)
echo Branch: !BRANCH!
git status
if errorlevel 1 (
  popd
  exit /b %errorlevel%
)
git add .
if errorlevel 1 (
  popd
  exit /b %errorlevel%
)
git status --short
if errorlevel 1 (
  popd
  exit /b %errorlevel%
)
git diff --cached --quiet
if not errorlevel 1 (
  echo 変更なし
  popd
  exit /b 0
)
git commit -m "%MSG%"
if errorlevel 1 (
  popd
  exit /b %errorlevel%
)
git push
if errorlevel 1 (
  popd
  exit /b %errorlevel%
)
popd
exit /b 0
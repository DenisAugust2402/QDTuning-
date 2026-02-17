@echo off
copy "%~dp0..\..\..\.cursor\projects\c-Users-crtkt-OneDrive-CRS\assets\c__Users_crtkt_AppData_Roaming_Cursor_User_workspaceStorage_56717fe2d2121134c2902efb0fb4dd4d_images_image-39189979-f626-49f3-836c-d494f4cf3cee.png" "%~dp0images\logo.png" /Y
if %errorlevel% equ 0 (echo Logo copied successfully!) else (echo Copy failed. Please copy the logo manually to images\logo.png)
pause

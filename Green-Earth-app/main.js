const { app, BrowserWindow } = require('electron')
function createWindow () {
  const win = new BrowserWindow({
    title: "Carbon Footprint",
    width: 350,
    height: 600,
    icon: null,
    frame: false 
  })
  win.removeMenu(true);
  win.loadFile('index.html');
  win.setSkipTaskbar(true);
  win.setResizable(false);
 
}
app.on('ready',createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
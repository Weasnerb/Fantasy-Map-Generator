const { BrowserWindow } = require('electron');

exports.getAboutWindow = function (newWindow) {
  if (newWindow) {
    newWindow.focus();
    return;
  }

  newWindow = new BrowserWindow({
    height: 400,
    width: 400,
    title: 'About',
    resizable: false,
    minimizable: false,
    fullscreenable: false,
  });

  newWindow.loadURL(`file://${__dirname.slice(0, __dirname.length - 2)}/about.html`);
  console.log(__dirname);
  newWindow.on('closed', () => { newWindow = null; });
};

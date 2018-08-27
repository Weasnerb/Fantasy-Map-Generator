const { dialog } = require('electron');
const { getAboutWindow } = require('./aboutWindow');

exports.getTemplate = function (mainWindow, getNewWindow) {
  return [{
    label: 'File',
    submenu: [{
      label: 'New Map',
      click: () => {
        mainWindow.webContents.executeJavaScript('document.getElementById(\'randomMap\').click();', true);
      },
    }, {
      type: 'separator',
    }, {
      label: 'Save as',
      submenu: [{
        label: 'PNG',
        click: () => {
          mainWindow.webContents.executeJavaScript('document.getElementById(\'savePNG\').click();', true);
        },
      }, {
        label: 'SVG',
        click: () => {
          mainWindow.webContents.executeJavaScript('document.getElementById(\'saveSVG\').click();', true);
        },
      }, {
        label: 'Map',
        click: () => {
          mainWindow.webContents.executeJavaScript('document.getElementById(\'saveMap\').click();', true);
        },
      }],
    }, {
      label: 'Load File',
      click: () => {
        mainWindow.webContents.executeJavaScript('document.getElementById(\'mapToLoad\').click();', true);
      },
    }],
  }, {
    label: 'Edit',
    submenu: [{
      label: 'Reset Zoom',
      click: () => {
        mainWindow.webContents.executeJavaScript('document.getElementById(\'zoomReset\').click();', true);
      },
    }],
  }, {
    label: 'Help',
    submenu: [{
      label: 'About',
      click: () => {
        // dialog.showMessageBox({ message: 'I am About', buttons: ['OK'] });
        getNewWindow();
      },
    }],
  }];
};

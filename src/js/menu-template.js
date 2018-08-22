const { dialog } = require('electron');


exports.getTemplate = function (win) {
  return [{
    label: 'File',
    submenu: [{
      label: 'Save as',
      submenu: [{
        label: 'PNG',
        click: () => {
          win.webContents.executeJavaScript('script.saveAsImage(\'png\');');
        },
      }, {
        label: 'SVG',
        click: () => {
          win.webContents.executeJavaScript('script.saveAsImage(\'svg\');');
        },
      }, {
        label: 'Map',
        click: () => {
          win.webContents.executeJavaScript('script.saveMap();');
        },
      }],
    }, {
      label: 'Load File',
      click: () => {
        // win.webContents.executeJavaScript('script.loadFile();');
        // win.webContents.executeJavaScript('script.loadMap();', (result) => {
        //   console.log(result);
        // });
        // console.log('Loadbtn clicked');
        // $('mapToLoad').click();
        win.webContents.executeJavaScript('console.log(\'HiHI\'); var ele = document.getElementById(\'mapToLoad\'); console.log(ele); ele.click(); console.log(\'HiHI\');', true);
      },
    }],
  }, {
    label: 'Help',
    submenu: [{
      label: 'About',
      click: () => {
        dialog.showMessageBox({ message: 'I am About', buttons: ['OK'] });
      },
    }],
  }];
};

const { dialog } = require('electron');
const fs = require('fs');

const content = 'I am content';

exports.template = [{
  label: 'File',
  submenu: [{
    label: 'Save as',
    submenu: [{
      label: 'PNG',
      click: () => {
                // console.log('Saved as PNG');
        dialog.showSaveDialog(
                    { filters: [{ name: 'text', extensions: 'txt' }] }, (fileName) => {
                      if (fileName === undefined) return;
                      fs.writeFile(fileName, content.demoContent, (err) => {
                        if (err) {
                          alert(`An error ocurred creating the file ${err.message}`);
                        }
                      });
                      dialog.showMessageBox({ message: `The file saved to - ${fileName}`,
                        buttons: ['Okay'] });
                      console.log(fileName);
                    });
      },
    }, {
      label: 'SVG',
      click: () => {},
    }, {
      label: 'Map',
      click: () => {},
    }],
  }, {
    label: 'Load File',
    submenu: [{
      label: 'MAP',
      click: () => {},
    }],
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

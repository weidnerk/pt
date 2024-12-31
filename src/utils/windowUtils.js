export function createNewWindow(title, order) {
  try {
    const newWindow = window.open('about:blank', '_blank');
    
    if (newWindow === null) {
      console.warn('Popup was blocked. Please allow popups for this site.');
      alert('Please allow popups to view the detailed information.');
      return;
    }
    
    if (newWindow?.document) {
      newWindow.document.open();
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${title}</title>
            <style>
              body { 
                font-family: Arial, sans-serif; 
                padding: 20px;
                margin: 0;
                line-height: 1.6;
              }
              .order-text {
                font-size: 24px;
                color: #333;
                margin: 0 0 30px 0;
                padding: 20px;
                background: #f5f5f5;
                border-radius: 8px;
              }
              h1 {
                color: #333;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="order-text">${order}</div>
            <h1>${title}</h1>
          </body>
        </html>
      `);
      newWindow.document.close();
    }
  } catch (error) {
    console.error('Error opening new window:', error);
    alert('Unable to open new window. Please check your browser settings.');
  }
}
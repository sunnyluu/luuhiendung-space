/**
 * SERVER XEM THỬ NỘI BỘ (LOCAL PREVIEW SERVER)
 * Chạy bằng Node.js tiêu chuẩn, không cần cài đặt thêm thư viện nào.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/index.html';
  }

  const filePath = path.join(__dirname, decodeURIComponent(reqUrl));
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`404: Không tìm thấy tập tin ${reqUrl}`);
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`500: Lỗi máy chủ (${err.code})`);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  Lưu Hiển Dũng Space - Đang chạy máy chủ xem thử:`);
  console.log(`  -> Địa chỉ xem trang: http://localhost:${PORT}`);
  console.log(`  -> Nhấn Ctrl + C để dừng máy chủ khi hoàn tất.`);
  console.log(`======================================================\n`);
});

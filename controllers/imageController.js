import fs from "fs";
import path from "path";
import busboy from "busboy";
import { dirname } from "path";
import { fileURLToPath, URL } from "url";
import { randomFillSync } from "crypto";

const random = (() => {
  const buf = Buffer.alloc(16);
  return () => randomFillSync(buf).toString('hex');
})();

export const imageUpload = (req, res) => {
  req.pipe(req.busboy);
  let fileAttached = false;
  let filePathSavedTo = '';
  req.busboy.on('file', (name, file, info) => {
    fileAttached = true;
    const saveTo = path.join(process.cwd(), '/public/imgUploads', `your-upload-${random()}`);
    filePathSavedTo = saveTo;
    file.pipe(fs.createWriteStream(saveTo));
  });

  req.busboy.on('error', function (error) {
    return res.status(500).json({ status: 'error', message: 'something went wrong!' });
  });

  req.busboy.on('close', () => {
    if (fileAttached) {
      return res.status(200).json({ status: 'success', pathImg: filePathSavedTo });
    } else {
      return res.status(400).json({ status: 'error', message: 'File not attached' });
    }
  });
}
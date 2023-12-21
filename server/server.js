import express from 'express';
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/generateQR', (req, res) => {
    const url = req.query.url;

    const qr_svg = qr.image(url);
    const qrImageName = `qr-code-${Date.now()}.png`;
    const qrImagePath = `public/${qrImageName}`;

    qr_svg.pipe(fs.createWriteStream(qrImagePath));

    fs.writeFile("public/URL.txt", url, (err) => { 
        if (err) 
          console.log(err); 
    });

    res.json({ imageUrl: qrImagePath });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});













/* import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
    message: "Type in Your URL :", 
    name: "URL",
},])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-img.png'));

    fs.writeFile("URL.txt", url, (err) => { 
        if (err) 
          console.log(err); 
    });
  
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  */
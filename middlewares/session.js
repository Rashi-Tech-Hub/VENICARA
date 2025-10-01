const session = require('express-session');
const MongoStore = require('connect-mongo');

const commonCookieOptions = {
  maxAge: 1000 * 60 * 60 * 24, // 1 day
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',        // prevents duplicate handling & CSRF-friendly
  // domain: 'venicara.shop' // force single domain
};

const adminSession = session({
  name: 'admin.sid',
  secret: process.env.ADMIN_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: 'adminSessions'
  }),
<<<<<<< HEAD
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, 
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  }
=======
  cookie: commonCookieOptions
>>>>>>> 5945d062aad777bd8e545fc90e7f54d34751c4d1
});

const userSession = session({
  name: 'user.sid',
  secret: process.env.USER_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: 'userSessions'
  }),
<<<<<<< HEAD
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  }
=======
  cookie: commonCookieOptions
>>>>>>> 5945d062aad777bd8e545fc90e7f54d34751c4d1
});


function sessionConfig(app) {
  app.set('trust proxy', 1);

  app.use('/admin', adminSession);
  app.use(userSession);
}

module.exports = sessionConfig;

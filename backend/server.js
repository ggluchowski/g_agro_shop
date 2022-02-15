const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const productsRoutes = require('./routes/products.routes');
const agreementsRoutes = require('./routes/agreements.routes');
const deliverysRoutes = require('./routes/deliverys.routes');
const paymentMethodsRoutes = require('./routes/paymentMethods.routes');
const contactsRoutes = require('./routes/contacts.routes');
const orderedProductsRoutes = require('./routes/orderedProducts.routes');
const orderRoutes = require('./routes/orders.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', agreementsRoutes);
app.use('/api', deliverysRoutes);
app.use('/api', paymentMethodsRoutes);
app.use('/api', contactsRoutes);
app.use('/api', orderedProductsRoutes);
app.use('/api', orderRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ products: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
// connects backend code with the database
// polaczenie z DB za pomoca Mongoose z podzialem na tryby servera
const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';
const user = process.env.userName;
const password = process.env.userPassword;

if (NODE_ENV === 'production') dbUri = 'mongodb+srv://' + user + ':' + password + '@ggcluster.3bhz4.mongodb.net/Agroshop?retryWrites=true&w=majority';
else if (NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/agroShopDBtest';
else dbUri = 'mongodb://localhost:27017/agroShopDB';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});

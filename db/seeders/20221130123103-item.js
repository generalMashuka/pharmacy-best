const bcrypt = require('bcrypt');

const {
  User,
  Product,
  // BasketProduct,
  // FavoriteProduct,
} = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    const users = await User.bulkCreate([
      {
        name: 'Oleg',
        email: '1@1.ru',
        password: await bcrypt.hash('12345678', 10),
      },
      {
        name: 'Alex',
        email: '2@2.ru',
        password: await bcrypt.hash('12345678', 10),
      },
    ]);
    const products = await Product.bulkCreate([
      {
        name: 'Анальгин',
        full_price: 100,
        sale_price: 99,
        img: 'https://static1.asna.ru/imgprx/kjNqEjbBsCfuSbfqfSOJXHPUY8D3K6IPlPPzg9kes_g/rs:fit:324:324:1/g:no/aHR0cHM6Ly9pbWdzLmFzbmEucnUvaWJsb2NrL2JhNy9iYTc0NjBhZDViNjJiOGQ4ZDcyNTJiM2I4OTlhNTc5NS82MGZiYTQxOGRmZjFiNjc3ZjAwZDUxNTViMmMwODMxNC5qcGc.jpg',
      },
      {
        name: 'Морфин',
        full_price: 1000,
        sale_price: 998,
        img: 'https://api.ratengoods.com/api/v0.10/image/9924413/?width=1200&height=1200',
      },
      {
        name: 'Лидокаин',
        full_price: 558,
        sale_price: 520,
        img: 'https://cdn.eapteka.ru/upload/offer_photo/441/87/1_de12a720c32ae88376f6f382218e30cf.png?t=1626378045&_cvc=1669378583',
      },
      {
        name: 'Компливит',
        full_price: 225,
        sale_price: 200,
        img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/2727100.jpg',
      },
      {
        name: 'Гептрал',
        full_price: 723,
        sale_price: 661,
        img: 'https://avatars.mds.yandex.net/get-mpic/5288781/img_id1341367640459116123.jpeg/orig',
      },
      {
        name: 'Полиоксидолий',
        full_price: 1558,
        sale_price: 1520,
        img: 'https://farmani.ru/upload/iblock/d9e/ttas7ki1x7hrmlz8o9tzbnk2iysoulsk.jpg',
      },
      {
        name: 'Полиоксидолий',
        full_price: 2281,
        sale_price: 1999,
        img: 'https://фото.монастырёв.рф/s/gi/prod/00/00/22/60/19/simbikort-turbuhaler-600x600.JPG',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

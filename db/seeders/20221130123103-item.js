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
        description:
          'Анальгин неселективно блокирует циклооксигеназу и снижает образование простагландинов из арахидоновой кислоты, препятствует проведению болевых экстра- и проприоцептивных импульсов. Анальгин обладает слабо выраженным противовоспалительным эффектом, обусловливающим малое влияние на водно-солевой обмен (задержка натрия и воды) и слизистую оболочку ЖКТ. Оказывает спазмолитическое действие на гладкую мускулатуру мочевых и желчных путей. Действие развивается через 20-40 минут после приема внутрь.',
        img: 'https://static1.asna.ru/imgprx/kjNqEjbBsCfuSbfqfSOJXHPUY8D3K6IPlPPzg9kes_g/rs:fit:324:324:1/g:no/aHR0cHM6Ly9pbWdzLmFzbmEucnUvaWJsb2NrL2JhNy9iYTc0NjBhZDViNjJiOGQ4ZDcyNTJiM2I4OTlhNTc5NS82MGZiYTQxOGRmZjFiNjc3ZjAwZDUxNTViMmMwODMxNC5qcGc.jpg',
      },
      {
        name: 'Морфин',
        full_price: 1000,
        sale_price: 998,
        img: 'https://www.endopharm.ru/upload/iblock/cb7/cb79330bbdd9bd8f5f445d4fcfbcda6e.png',

      },
      {
        name: 'Лидокаин',
        full_price: 558,
        sale_price: 520,
        description:
          'Лидокаин является короткодействующим местным анестетиком амидного типа. В основе его механизма действия лежит уменьшение проницаемости мембраны нейрона для ионов натрия. В результате лого снижается скорость деполяризации н повышается порог возбуждения, приводя к обратимому местному онемению. Лидокаин применяют в целях достижения проводниковой анестезии в различных участках тела и контроля аритмий. Обладает быстрым началом действия (около одной минуты после внутривенного введения и пятнадцати минут после внутримышечного), быстро распространяется в окружающие ткани. Действие продолжается 10-20 минут и около 60-90 минут после внутривенного и внутримышечного введения соответственно.',
        img: 'https://cdn.eapteka.ru/upload/offer_photo/441/87/1_de12a720c32ae88376f6f382218e30cf.png?t=1626378045&_cvc=1669378583',
      },
      {
        name: 'Компливит',
        full_price: 225,
        sale_price: 200,
        description:
          'Комбинированный препарат, содержащий комплекс витаминов и минералов, являющихся важными факторами метаболических процессов.  Витаминно-минеральный комплекс разработан для восполнения физиологической потребности в витаминах и минеральных веществах и сбалансирован с учетом суточной потребности.  Совместимость компонентов в 1 таблетке обеспечена специальной для витаминных препаратов технологией производства.',
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
        name: 'Симбикорт',
        full_price: 2281,
        sale_price: 1999,
        img: 'https://фото.монастырёв.рф/s/gi/prod/00/00/22/60/19/simbikort-turbuhaler-600x600.JPG',
      },
      {
        name: 'Аскорбинка',
        full_price: 22,
        sale_price: 21,
        img: 'https://uteka.ru/media/1024/1/5f/15fabb6c7568818e8ec49ed9957539c5.jpg',
      },
      {
        name: 'Фенотропил',
        full_price: 1788,
        sale_price: 1255,
        img: 'https://images.apteka.ru/original_1ce0d5e4-9552-4ad0-a430-097cf092ddd3.jpeg',
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

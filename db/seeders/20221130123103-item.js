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
        free_week: false,
        next_free_week: false,
        description:
          'Анальгин неселективно блокирует циклооксигеназу и снижает образование простагландинов из арахидоновой кислоты, препятствует проведению болевых экстра- и проприоцептивных импульсов. Анальгин обладает слабо выраженным противовоспалительным эффектом, обусловливающим малое влияние на водно-солевой обмен (задержка натрия и воды) и слизистую оболочку ЖКТ. Оказывает спазмолитическое действие на гладкую мускулатуру мочевых и желчных путей. Действие развивается через 20-40 минут после приема внутрь.',
        img: 'https://static1.asna.ru/imgprx/kjNqEjbBsCfuSbfqfSOJXHPUY8D3K6IPlPPzg9kes_g/rs:fit:324:324:1/g:no/aHR0cHM6Ly9pbWdzLmFzbmEucnUvaWJsb2NrL2JhNy9iYTc0NjBhZDViNjJiOGQ4ZDcyNTJiM2I4OTlhNTc5NS82MGZiYTQxOGRmZjFiNjc3ZjAwZDUxNTViMmMwODMxNC5qcGc.jpg',
      },
      {
        name: 'Морфин',
        full_price: 1000,
        sale_price: 998,
        free_week: true,
        next_free_week: true,

        img: 'https://www.endopharm.ru/upload/iblock/cb7/cb79330bbdd9bd8f5f445d4fcfbcda6e.png',
      },
      {
        name: 'Морфин (promo)',
        full_price: 1000,
        sale_price: 0,
        free_week: false,
        description:
         'Морфин является основным представителем группы наркотических анальгетиков, отличается сильным болеутоляющим действием. Оказывает противошоковое действие при травмах и тормозящее влияние на условные рефлексы, понижает суммационную способность ЦНС, усиливает действие наркотических, снотворных и местноанестизирующих средств. Понижает возбудимость кашлевого центра.',
        id: 99,


        img: 'https://www.endopharm.ru/upload/iblock/cb7/cb79330bbdd9bd8f5f445d4fcfbcda6e.png',
      },
      {
        name: 'Лидокаин',
        full_price: 558,
        sale_price: 520,
        free_week: false,
        next_free_week: false,
        description:
          'Лидокаин является короткодействующим местным анестетиком амидного типа. В основе его механизма действия лежит уменьшение проницаемости мембраны нейрона для ионов натрия. В результате лого снижается скорость деполяризации н повышается порог возбуждения, приводя к обратимому местному онемению. Лидокаин применяют в целях достижения проводниковой анестезии в различных участках тела и контроля аритмий. Обладает быстрым началом действия (около одной минуты после внутривенного введения и пятнадцати минут после внутримышечного), быстро распространяется в окружающие ткани. Действие продолжается 10-20 минут и около 60-90 минут после внутривенного и внутримышечного введения соответственно.',
        img: 'https://cdn.eapteka.ru/upload/offer_photo/441/87/1_de12a720c32ae88376f6f382218e30cf.png?t=1626378045&_cvc=1669378583',
      },
      {
        name: 'Компливит',
        full_price: 225,
        sale_price: 200,
        free_week: false,
        next_free_week: true,
        description:
          'Комбинированный препарат, содержащий комплекс витаминов и минералов, являющихся важными факторами метаболических процессов.  Витаминно-минеральный комплекс разработан для восполнения физиологической потребности в витаминах и минеральных веществах и сбалансирован с учетом суточной потребности.  Совместимость компонентов в 1 таблетке обеспечена специальной для витаминных препаратов технологией производства.',
        img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/2727100.jpg',
      },
      {
        name: 'Гептрал',
        full_price: 723,
        sale_price: 661,
        free_week: false,
        next_free_week: true,
        description:
          'Гептрал — гепатопротекторное средство, предназначено для восстановления и очищения печени. Обладает антидепрессивной активностью. Относится к фармакологической группе «Прочие препараты для желудочно-кишечного тракта и обмена веществ, аминокислоты и их производные».',
        img: 'https://avatars.mds.yandex.net/get-mpic/5288781/img_id1341367640459116123.jpeg/orig',
      },
      {
        name: 'Полиоксидоний',
        full_price: 1558,
        sale_price: 1520,
        free_week: false,
        next_free_week: false,
        description:
          'Полиоксидоний® способствует активации клеточного иммунитета и стимуляции выработки собственных интерферонов, увеличивая резистентность организма в отношении вирусов и бактерий1. Полиоксидоний® может помогать организму бороться с вирусом сейчас и не заболеть в сезон простуд.',
        img: 'https://farmani.ru/upload/iblock/d9e/ttas7ki1x7hrmlz8o9tzbnk2iysoulsk.jpg',
      },
      {
        name: 'Симбикорт',
        full_price: 2281,
        sale_price: 1999,
        free_week: false,
        next_free_week: false,
        description:
          'Симбикорт® содержит будесонид и формотерол, которые имеют разные механизмы действия и проявляют аддитивный эффект в отношении снижения частоты обострений бронхиальной астмы. Особые свойства будесонида и формотерола дают возможность использовать их комбинацию для купирования приступов/симптомов с противовоспалительным действием, или как поддерживающую терапию бронхиальной астмы.',
        img: 'https://фото.монастырёв.рф/s/gi/prod/00/00/22/60/19/simbikort-turbuhaler-600x600.JPG',
      },
      {
        name: 'Аскорбинка',
        full_price: 22,
        sale_price: 21,
        free_week: false,
        next_free_week: true,
        description:
          'Обладает выраженными антиоксидантными свойствами. Регулирует транспорт H+ во многих биохимических реакциях, улучшает использование глюкозы в цикле трикарбоновых кислот, участвует в образовании тетрагидрофолиевой кислоты и регенерации тканей, синтезе стероидных гормонов, коллагена, проколлагена, карнитина, гидроксилировании серотонина.',
        img: 'https://uteka.ru/media/1024/1/5f/15fabb6c7568818e8ec49ed9957539c5.jpg',
      },
      {
        name: 'Фенотропил',
        full_price: 1788,
        sale_price: 1255,
        free_week: false,
        next_free_week: false,
        description:
          'Фенотропил обладает выраженным антиамнестическим действием, оказывает прямое активирующее влияние на интегративную деятельность головного мозга, способствует консолидации памяти, улучшает концентрацию внимания и умственную деятельность, облегчает процесс обучения, повышает скорость передачи информации между полушариями головного мозга, повышает устойчивость тканей мозга к гипоксии и токсическим воздействиям, обладает противосудорожным действием и анксиолитической активностью, регулирует процессы активации и торможения ЦНС, улучшает настроение.',
        img: 'https://images.apteka.ru/original_1ce0d5e4-9552-4ad0-a430-097cf092ddd3.jpeg',
      },
      {
        name: 'Мабелль',
        full_price: 3088,
        sale_price: 1555,
        free_week: true,
        next_free_week: false,
        description:
        'В качестве биологически активной добавки к пище – дополнительного источника изофлавонов и флаволигнанов.',
        img: 'https://cdn.eapteka.ru/upload/offer_photo/516/784/resized/450_450_1_cb8c177c8c6202b4df11c3a1d12a21da.png?t=1667233944&_cvc=1669900136',
      },
      {
        name: 'Пробиолог СРК',
        full_price: 1988,
        sale_price: 1255,
        free_week: true,
        next_free_week: false,
        description:
        'В качестве биологически активной добавки к пище - источника пробиотических микроорганизмов (лактобактерий) и молочнокислых микроорганизмов (Pediococcus acidilactici).',
        img: 'https://cdn.eapteka.ru/upload/offer_photo/345/229/resized/450_450_1_74234dfc58876a44c2f395bb86d60c7c.png?t=1668407911&_cvc=1669900136',
      },
      {
        name: 'Бепантен',
        full_price: 1788,
        sale_price: 1255,
        free_week: true,
        next_free_week: false,
        description:
          'Бепантен® Мазь – средство для профилактики и лечения опрелостей и пеленочного дерматита у малышей и трещин сосков у кормящей мамы. Инструкция по применению.',
        img: 'https://cdn.eapteka.ru/upload/offer_photo/217/876/1_1f53c12733c2292c0ee875ba6e81aae4.png?t=1653250559&_cvc=1669900136',
      },
      {
        name: 'Фенистил гель',
        full_price: 110,
        sale_price: 99,
        free_week: false,
        next_free_week: false,
        description:
          'Фенистил гель неселективно блокирует циклооксигеназу и снижает образование простагландинов из арахидоновой кислоты, препятствует проведению болевых экстра- и проприоцептивных импульсов. Анальгин обладает слабо выраженным противовоспалительным эффектом, обусловливающим малое влияние на водно-солевой обмен (задержка натрия и воды) и слизистую оболочку ЖКТ. Оказывает спазмолитическое действие на гладкую мускулатуру мочевых и желчных путей. Действие развивается через 20-40 минут после приема внутрь.',
        img: 'https://cdn.eapteka.ru/upload/offer_photo/104/830/1_96d2ebebccf30eeaa2b2de716b87b922.png?t=1662382090&_cvc=1669900136',
      },
      {
        name: 'Супрастинекс',
        full_price: 220,
        sale_price: 199,
        free_week: false,
        next_free_week: false,
        description:
          'Супрастинекс неселективно блокирует циклооксигеназу и снижает образование простагландинов из арахидоновой кислоты, препятствует проведению болевых экстра- и проприоцептивных импульсов. Анальгин обладает слабо выраженным противовоспалительным эффектом, обусловливающим малое влияние на водно-солевой обмен (задержка натрия и воды) и слизистую оболочку ЖКТ. Оказывает спазмолитическое действие на гладкую мускулатуру мочевых и желчных путей. Действие развивается через 20-40 минут после приема внутрь.',
        img: 'https://vseapteki.ru/cropping/thumbnails/101/1720/share_default/',
      },
      {
        name: 'Флуоксетин',
        full_price: 320,
        sale_price: 159,
        free_week: false,
        next_free_week: false,
        description:
          'Флуоксетин неселективно блокирует циклооксигеназу и снижает образование простагландинов из арахидоновой кислоты, препятствует проведению болевых экстра- и проприоцептивных импульсов. Анальгин обладает слабо выраженным противовоспалительным эффектом, обусловливающим малое влияние на водно-солевой обмен (задержка натрия и воды) и слизистую оболочку ЖКТ. Оказывает спазмолитическое действие на гладкую мускулатуру мочевых и желчных путей. Действие развивается через 20-40 минут после приема внутрь.',
        img: 'https://www.rigla.ru/media/catalog/product/cache/1e8ef93b9b4867ab9f3538dde2cb3b8a/2/5/2593-b-d-c-6-bdc6a24aa23673559d1143cb406333d5a9d5282f_2593.jpg',
      },
      {
        name: 'Аскорил',
        full_price: 220,
        sale_price: 199,
        free_week: false,
        next_free_week: false,
        description:
          'Аскорил неселективно блокирует циклооксигеназу и снижает образование простагландинов из арахидоновой кислоты, препятствует проведению болевых экстра- и проприоцептивных импульсов. Анальгин обладает слабо выраженным противовоспалительным эффектом, обусловливающим малое влияние на водно-солевой обмен (задержка натрия и воды) и слизистую оболочку ЖКТ. Оказывает спазмолитическое действие на гладкую мускулатуру мочевых и желчных путей. Действие развивается через 20-40 минут после приема внутрь.',
        img: 'https://pictures1.apteka-april.ru/products/612/800/96e8a4cf027a77360e2c187cb91eefcf.webp',
      },
      {
        name: 'Магнерот',
        full_price: 220,
        sale_price: 199,
        free_week: false,
        next_free_week: false,
        description:
          'Магнерот необходим в комплексном лечении и в качестве профилактики инфаркта миокарда, терапии стенокардии, хронической сердечной недостаточности, аритмий сердца, вызванных дефицитом магния, спастических состояний - боли и спазмы мышц (в том числе ангиоспазм), атеросклероза, артериите, нарушении липидного обмена.',
        img: 'https://cdn.eapteka.ru/upload/offer_photo/200/873/resized/450_450_1_90fc313c7c66d5b932417e539e17b78c.png?t=1638781396&_cvc=1669900136',
      },
      {
        name: 'Аквадетрим (Витамин Д3)',
        full_price: 490,
        sale_price: 200,
        free_week: false,
        next_free_week: false,
        description:
          'Витамин D3 является естественной формой витамина D, которая образуется у человека в коже под действием солнечных лучей. По сравнению с витамином D2 характеризуется на 25 % более высокой активностью.',
        img: 'https://cdn.eapteka.ru/upload/offer_photo/124/266/resized/450_450_1_dff3a1b08925caf254823f853ee27944.png?t=1630490470&_cvc=1669900136',
      },
      {
        name: 'ПРОфертил',
        full_price: 6490,
        sale_price: 5600,
        free_week: false,
        next_free_week: false,
        description:
          'Супрастинекс неселективно блокирует циклооксигеназу и снижает образование простагландинов из арахидоновой кислоты, препятствует проведению болевых экстра- и проприоцептивных импульсов. Анальгин обладает слабо выраженным противовоспалительным эффектом, обусловливающим малое влияние на водно-солевой обмен (задержка натрия и воды) и слизистую оболочку ЖКТ. Оказывает спазмолитическое действие на гладкую мускулатуру мочевых и желчных путей. Действие развивается через 20-40 минут после приема внутрь.',
        img: 'https://vseapteki.ru/cropping/thumbnails/101/1720/share_default/',
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

import {
  createProfilesForKids,
  devicePilePng,
  downloadGif,
  downloadForLaterPng,
  phonePng,
  tv,
} from "../../../src/assets/img";

import { videoDevicePile, videoTv } from "../../../src/assets/video";

const translation = {
  translation: {
    main: {
      title: "Фильмы, сериалы и многое другое без ограничений",
      subtitle: "Смотрите где угодно. Отменить подписку можно в любое время.",
      navbar: {
        login: "Войти",
      },
    },

    subscribe: {
      title:
        "Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.",
      placeholder: "Адрес электронной почты",
      button: "Начать смотреть",
    },
    articles: [
      {
        title: "Смотрите на телевизоре",
        subtitle:
          "Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.",
        png: tv,
        video: videoTv,
      },
      {
        title: "Загружайте сериалы для просмотра офлайн",
        subtitle:
          "Сохраняйте видео в избранном, и у вас всегда будет, что посмотреть.",
        png: phonePng,
        downloadBar: {
          title: "Очень странные дела",
          subtitle: "Идет загрузка...",
          png: downloadForLaterPng,
          gif: downloadGif,
        },
      },
      {
        title: "Смотрите где угодно",
        subtitle:
          "Смотрите фильмы и сериалы на телефоне, планшете, ноутбуке и телевизоре.",
        png: devicePilePng,
        video: videoDevicePile,
        customClassNameForVideo: "video-device-pile",
      },
      {
        title: "Создавайте профили для детей",
        subtitle:
          "Подарите детям мир приключений с их любимыми героями. Он создан специально для них и уже доступен с вашей подпиской.",
        png: createProfilesForKids,
      },
    ],
    faqData: {
      header: "Распространенные вопросы",
      content: [
        {
          title: "Что из себя представляет Netflix?",
          subTitle: [
            "Netflix — это стриминговый сервис, позволяющий смотреть разнообразные удостоенные наград фильмы, сериалы, аниме, документальные фильмы и многое другое на тысячах устройств с подключением к интернету.",

            "Вы можете смотреть сколько угодно и когда угодно без рекламы по фиксированной низкой цене за месяц. Вы всегда сможете найти что-нибудь новое — мы добавляем сериалы и фильмы каждую неделю!",
          ],
        },

        {
          title: "Сколько стоит Netflix?",
          subTitle: [
            "Смотрите Netflix на смартфоне, планшете, Smart TV, ноутбуке или телеприставке за единую фиксированную ежемесячную плату. Стоимость планов составляет от 7,99 EUR до 11,99 EUR в месяц. Никаких лишних расходов и обязательств.",
          ],
        },

        {
          title: "Где смотреть?",
          subTitle: [
            "Смотрите где угодно, когда угодно. Войдите в свой аккаунт Netflix и смотрите через интернет на сайте netflix.com на персональном компьютере или любом устройстве с подключением к интернету и приложением Netflix, включая телевизоры Smart TV, смартфоны, планшеты, плееры для потокового видео и игровые консоли.",

            "Также вы сможете загружать свои любимые сериалы через приложение для iOS, Android или Windows 10. Загружайте видео для просмотра в поездках без подключения к интернету. Возьмите с собой Netflix куда угодно.",
          ],
        },

        {
          title: "Как отменить подписку?",
          subTitle: [
            "Netflix — гибкий сервис. Никаких запутанных контрактов и обязательств. Вы можете легко отменить подписку на сайте в два клика. Никакой платы за отмену не взимается, открыть или закрыть аккаунт можно когда угодно.",
          ],
        },

        {
          title: "Что можно посмотреть на Netflix?",
          subTitle: [
            "Netflix предлагает огромную библиотеку полнометражных фильмов, документальных фильмов, сериалов, аниме, удостоенного наград оригинального контента Netflix и многое другое. Смотрите сколько угодно и когда угодно.",
          ],
        },

        {
          title: "Подходит ли контент Netflix для детей?",
          subTitle: [
            "В подписку включен пакет Netflix Kids, который обеспечивает родителям необходимый контроль, а детям возможность получать удовольствие от просмотра фильмов и сериалов для всей семьи в своем собственном пространстве.",

            "Для детских профилей используется родительский контроль с использованием PIN-кода, который позволяет указать рейтинг контента, который могут смотреть дети, и заблокировать определенные видео, которые вы не хотите, чтобы смотрели дети.",
          ],
        },

        {
          title: "Почему текст отображается на этом языке?",
          subTitle: ["Этот язык выбран в настройках вашего браузера."],
        },
      ],
    },
    footerData: {
      footerHeading: {
        title: "Есть вопросы? Свяжитесь с нами.",
        link: "https://help.netflix.com/contactus",
      },
      footerContent: [
        {
          title: "Распространенные вопросы",
          link: "https://help.netflix.com/support/412",
        },
        { title: "Центр поддержки", link: "https://media.netflix.com/" },
        { title: "Способы просмотра", link: "https://www.netflix.com/watch" },
        {
          title: "Настройки файлов cookie",
          link: "https://www.netflix.com/az-ru/#",
        },
        { title: "Проверка скорости", link: "https://fast.com/" },
        { title: "Центр поддержки", link: "https://help.netflix.com/" },
        { title: "Для инвесторов", link: "http://ir.netflix.com/" },
        {
          title: "Правила использования",
          link: "https://help.netflix.com/legal/termsofuse",
        },
        {
          title: "Корпоративная информация",
          link: "https://help.netflix.com/legal/corpinfo",
        },
        {
          title: "Юридические уведомления",
          link: "https://help.netflix.com/legal/notices",
        },
        { title: "Аккаунт", link: "https://www.netflix.com/youraccount" },
        { title: "Вакансии", link: "https://jobs.netflix.com/jobs" },
        {
          title: "Конфиденциальность",
          link: "https://help.netflix.com/legal/privacy",
        },
        {
          title: "Свяжитесь с нами",
          link: "https://help.netflix.com/contactus",
        },
        {
          title: "Только на Netflix",
          link: "https://www.netflix.com/az/browse/genre/839338",
        },
      ],
      copyrigth: "Netflix Азербайджан Создано Vusal Feyruz",
    },
  },
};

export default translation;

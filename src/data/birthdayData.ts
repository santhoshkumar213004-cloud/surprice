export type Memory = {
  image: string
  title: string
  date: string
  caption: string
}

export type TimelineItem = {
  date: string
  title: string
  description: string
  icon: string
  image?: string
}

export const birthdayData = {
  birthdayDate: '2026-10-20T00:00:00',
  // relationshipStartDate: '2024-01-01T00:00:00',

  intro: {
    eyebrow: 'A little secret, made just for you',
    title: 'Something Special Is Waiting For You ❤️',
    button: 'Open Your Surprise 💝',
  },

  hero: {
    kicker: 'For the one who makes ordinary days extraordinary',
    title: 'Happy Birthday, My Love ❤️',
    subtitle:
      'Today is more than a birthday. It is a celebration of the beautiful person who makes my world feel warmer, brighter, and more alive.',
  },

  memories: [
    { image: '/images/memory-01.svg', title: 'The Beginning', date: '12 June 2024', caption: 'Every beautiful story has a first page. This was ours.' },
    { image: '/images/memory-02.svg', title: 'That Smile', date: '28 July 2024', caption: 'A moment so simple, yet somehow impossible to forget.' },
    { image: '/images/memory-03.svg', title: 'Our Little Adventure', date: '03 October 2024', caption: 'The places mattered less than the person beside me.' },
    { image: '/images/memory-04.svg', title: 'A Thousand Laughs', date: '14 February 2025', caption: 'My favorite memories are the ones where we forgot the time.' },
    { image: '/images/memory-05.svg', title: 'Still Choosing You', date: '20 October 2025', caption: 'Another chapter, another reason to be grateful for you.' },
    { image: '/images/memory-06.svg', title: 'Forever Starts Here', date: 'Today', caption: 'And somehow, I still get butterflies when I think of us.' },
  ] satisfies Memory[],

  timeline: [

    {
      date: 'Oru Naal...',
      title: 'Namma First Time Pesunathu ❤️',
      description:
        'Oru naal ennoda Instagram hack aachu. Apothaan first time unta pesunen. Appo namma rendu perum yaaro yaaro va irunthom. Antha time la thaan un name enna nu therinjukitten, neeyum en name therinjukitta. Antha oru small conversation thaan namma story oda first step nu appo enakku theriyala.',
      icon: '❤️',
      image: '/images/memory-01.svg',
    },

    {
      date: 'Konjam Naal Kazhichu...',
      title: 'Yaaro Yaaro Va Irundha Namma ❤️',
      description:
        'Wrong contact nala namma pesama kooda poirukalam. Aana etho oru unarvu, un kooda pesanum nu thonuchu. Apdi nammalum pesinom. Konjam konjam ah nee enna pathi therinjukitta, naan unna pathi therinjukitten. Happy ah irunthalum, sad ah irunthalum, namakkulla ellathayum share panna start pannom.',
      icon: '✨',
      image: '/images/memory-02.svg',
    },

    {
      date: 'Days → Months',
      title: 'Friends Aana Namma 💕',
      description:
        'Days apdiye pochu... one month, two months nu once namma pesikittu irunthom. Eppa pesunalum first time pesuna athe bond, athe feeling irunthuchu. Un kooda pesumbothu en face la eppavume oru smile irukkum. En nu theriyala... aana un kooda pesurathu enakku romba pudichirunthuchu.',
      icon: '💕',
      image: '/images/memory-03.svg',
    },

    {
      date: 'Sila Months... Sila Years...',
      title: 'Friend → Best Friend ❤️',
      description:
        'Apdiye sila months pochu... sila years um aachu. Namma daily ah pesaama irunthalum, namakkulla iruntha bond mattum eppavume break aagala. Time pogapoga antha bond innum strong aagitte thaan pochu. Yaaro yaaro va irunthom... friends aanom... friends ah irunthom... apdiye best friends aanom.',
      icon: '🌹',
      image: '/images/memory-04.svg',
    },

    {
      date: 'The Moment I Realized...',
      title: 'Nee Enakku Venumnu Thonuchu ❤️',
      description:
        'Namma romba pesuna days la semma happiness irunthuchu. Un smile, un care, un childness, un character... ellame enakku romba pudichirunthuchu. Oru naal yosichen... nee en kooda life long varuviya nu. Appothaan enakku purinjuchu, nee enakku just oru friend illa... enakku romba mukkiyamaana oru person.',
      icon: '❤️',
      image: '/images/memory-05.svg',
    },

    {
      date: 'Oru Bayathoda...',
      title: 'Sollanum Nu Thairiyam Vandhuchu 💕',
      description:
        'Nee en life la venum nu oru strong feel vandhuchu. Aana solla romba bayama irunthuchu. Ithuvaraikkum iruntha friendship um bond um break aagidumo nu bayandhen. Irundhalum antha bayatha vida unna izhakka koodathu nu thonuchu. Oru naal thairiyama pesikalam nu sonnen.',
      icon: '🥹',
      image: '/images/memory-06.svg',
    },

    {
      date: 'That Beautiful Moment...',
      title: 'Nee Sonna Andha Varthai ❤️',
      description:
        'Naan en feelings ah sollumbothu enakku romba bayama irunthuchu. Nee thappa nenachukuva nu ninaichen. Athanala sorry um sonnen. Aana nee sonna oru vishayam — "Unna pudikama illa Santhosh..." Appo enakkulla vandha happiness ah words la sollave mudiyathu.',
      icon: '💗',
      image: '/images/memory-01.svg',
    },

    {
      date: 'Two Days...',
      title: 'Un Love Ah Therinjukitta Moment 💖',
      description:
        'Nee unakku time venum nu nee kekkave illa. Aana neeye eduthu kitta unakkulla iruntha feelings ah neeye rendu days la eduthu sonna. Appothaan enakku purinjuchu... first la enakku iruntha athe feel unakkum irunthurukku nu. Antha moment en life la marakka mudiyatha oru beautiful moment.',
      icon: '💖',
      image: '/images/memory-02.svg',
    },

    {
      date: 'Always...',
      title: 'Namma Story Innum Mudiyala ❤️',
      description:
        'Yaaro yaaro va start aana namma... friends aanom, best friends aanom, love ah maarinom. Namma life la neraya ups and downs irunthalum, namma share pannina antha azhagana memories mattum enakku eppavume special. En life la nee vandhathu oru coincidence ah irunthalum, unna meet pannathu enakku kidaicha oru beautiful gift.',
      icon: '💍',
      image: '/images/memory-04.svg',
    },

    {
      date: 'Inime Thaan...',
      title: 'Inime Thaan Namma Life Start Aaguthu ❤️',
      description:
        'Namma life la chinna chinna sanda neraya vandhirukku... aana atha vida happiness nerayave irukku. Inime namma innum strong ah irukanum. Oruvarai oruvar innum nalla purinjukanum. Evlo problems vandhalum namma rendu perum serndhu atha overcome pannanum. Namma relationship innum innum strong ah aaganum.',
      icon: '❤️',
      image: '/images/memory-05.svg',
    },

    {
      date: 'No Full Stop...',
      title: 'Namma Story Ku Full Stop Kedaiyathu ❤️',
      description:
        'Namma story start pannumbothu yaaro yaaro va irundhirukalam. Aana namma story ku eppothume full stop yaaralayum vaikka mudiyathu. Yaaru vandhalum, enna situation vandhalum, namma rendu perum serndhu antha problem ah break pannanum. Problem ah break pannuvom... namma story ah illa. ❤️',
      icon: '♾️',
      image: '/images/memory-01.svg',
    },

    {
      date: 'Whenever We Fight...',
      title: 'Kovam Irundhalum... Namma Marakka Koodathu ❤️',
      description:
        'Nammakulla oru problem vandha kovam irukalam... sanda kooda varalam. Aana antha kovathula namma pesina words ah mattum nenachu namma happiness ah marandhuda koodathu. Konjam calm aagi, namma serndhu siricha moments ah, namma share pannina memories ah, namma happy ah irundha days ah nenachu paaru. Appo namma problem evlo perusa irundhalum, atha vida namma love perusu nu puriyum.',
      icon: '🥹',
      image: '/images/memory-02.svg',
    },

    {
      date: 'This Is Not The End...',
      title: 'Namma Story Innum Thodarum ❤️',
      description:
        'Namma story stop aaganum nu irundhirundha, epayo stop aagirukkalam. Aana namma story athukaga eluthala. Namma life la innum neraya pages irukku... neraya memories create pannanum... neraya happiness share pannanum... neraya moments serndhu experience pannanum. Ithu varaikkum eluthunathu namma story oda oru part mattum thaan.',
      icon: '✨',
      image: '/images/memory-03.svg',
    },

    {
      date: 'Inime Ovvoru Naalum...',
      title: 'Pudhu Pudhu Memories ❤️',
      description:
        'Inime namma life oda ovvoru naalum oru pudhu page. Namma serndhu create panna pora memories thaan namma story oda next chapters. Sanda irundhalum sari, happiness irundhalum sari, namma rendu perum serndhu irundha pothum. Oruvarukku oruvar support ah irundhu, purinjukittu, namma life ah innum azhaga build pannanum.',
      icon: '✨',
      image: '/images/memory-05.svg',
    },

    {
      date: 'Forever...',
      title: 'Ithu Thodarum... Thodarnthute Irukkum ❤️',
      description:
        'Yaaro yaaro va start aana namma story, ivlo dhooram vandhirukku. Inime thaan namma life oda real story start aaguthu. Chinna chinna sanda varalam, kovam varalam, misunderstandings varalam... aana atha vida namma happiness um, namma memories um, namma bond um perusa irukanum. Oruvarai oruvar purinjukittu, support pannitu, evlo situation vandhalum serndhu overcome panni innum strong ah poganum. Namma story ku last nu oru word irukka koodathu. Oru naal namma first time pesunathu oru coincidence ah irundhirukalam... aana inime namma serndhu create panna pora ovvoru memory um namma choice. Ithu mudiyathu... Ithu stop aagathu... Ithu eppothum thodarum... thodarnthute irukkum... ❤️♾️',
      icon: '💍',
      image: '/images/memory-04.svg',
    },

  ] satisfies TimelineItem[],

  loveLetter: {
    title: 'My Mini Girl ku Oru Kaditham 💌',
    content: `En Perachagee ... ❤️,

My Dear Thanga Mayileyy… 🦚❤️
Innaiku unakku romba special-aana naal, maileyy… 🥹💖 Yenna, innaiku thaan nee indha azhagana ulagathukku vandha naal. Un entry day! 🎂✨
Wish you many more happy returns of the day, en thanga maileyy! ❤️🫂
Un life full-ah happiness-um, love-um, success-um nirainjirukkanum. Un azhagana sirippu eppavume un mugathula irukkanum. Nee aasai padura ellame unakku kidaikkanum. Un manasu kastapadura nerathula kooda, unna santhoshama paathukka neraya azhagana moments un life-la varanum. 🥹❤️
Nee en life-la evlo special nu ennaala vaarthaigalaala solla mudiyathu, maileyy. Aana innaiku un birthday-la oru vishayam mattum sollanum… Nee indha ulagathukku vandha indha naal, enakku kidaicha azhagana gift-ah unna ninaikka vechurukku. 💗🦚
Happy Birthday, My Thanga Mayileyy! 🎂💋❤️
Un Sant, unna romba romba nesikkiran… and unakaga epothume irupen Muhh🫂❤️♾️

Forever yours ❤️`,
  },

  reasons: [
    { title: 'Your Smile 😊', message: 'Because somehow one smile from you can change the entire mood of my day.' },
    { title: 'Your Kindness ❤️', message: 'The way you care about people says so much about the beautiful heart you have.' },
    { title: 'You Make Me Happy ✨', message: 'Even the most ordinary moments feel special when I get to share them with you.' },
    { title: 'Your Beautiful Heart 💕', message: 'Your heart is one of the places where I feel lucky to belong.' },
    { title: 'Simply Because You Are You ❤️', message: 'I do not need a reason. I love you because you are uniquely, wonderfully you.' },
  ],

  finalMessage: {
    title: 'Many Many Happy Returns of the Day, My Dear Thanga Mayileyy! 🎂❤️🥹',
    message: 'You are one of the most beautiful parts of my life.',
    ending: 'Forever With You ❤️',
  },
}
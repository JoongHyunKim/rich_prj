const imageMap = {
  0: "rws_00_fool.jpg",
  1: "rws_01_magician.jpg",
  2: "rws_02_high_priestess.jpg",
  3: "rws_03_empress.jpg",
  4: "rws_04_emperor.jpg",
  5: "rws_05_hierophant.jpg",
  6: "rws_06_lovers.jpg",
  7: "rws_07_chariot.jpg",
  8: "rws_08_strength.jpg",
  9: "rws_09_hermit.jpg",
  10: "rws_10_wheel_of_fortune.jpg",
  11: "rws_11_justice.jpg",
  12: "rws_12_hanged_man.jpg",
  13: "rws_13_death.jpg",
  14: "rws_14_temperance.jpg",
  15: "rws_15_devil.jpg",
  16: "rws_16_tower.jpg",
  17: "rws_17_star.jpg",
  18: "rws_18_moon.jpg",
  19: "rws_19_sun.jpg",
  20: "rws_20_judgement.jpg",
  21: "rws_21_world.jpg"
};

const enMap = {
  0: {
    keywords: ["Beginnings", "Freedom", "Potential"],
    light: "A fresh start calls for curiosity and a light heart.",
    shadow: "Watch for impulsive leaps without preparation."
  },
  1: {
    keywords: ["Focus", "Will", "Creation"],
    light: "Combine what you have and make it real.",
    shadow: "Beware of showmanship or overconfidence."
  },
  2: {
    keywords: ["Intuition", "Mystery", "Inner Voice"],
    light: "Quiet intuition already knows the answer.",
    shadow: "Don't let anxiety turn into over-interpretation."
  },
  3: {
    keywords: ["Abundance", "Care", "Growth"],
    light: "Nurturing now leads to steady growth.",
    shadow: "Avoid overprotecting or drifting into comfort."
  },
  4: {
    keywords: ["Order", "Stability", "Responsibility"],
    light: "Structure and accountability bring stability.",
    shadow: "Too much control can stiffen relationships."
  },
  5: {
    keywords: ["Tradition", "Learning", "Values"],
    light: "Trusted guidance and proven methods help.",
    shadow: "Don't miss new possibilities by clinging to rules."
  },
  6: {
    keywords: ["Choice", "Connection", "Harmony"],
    light: "Choosing in line with values brings alignment.",
    shadow: "Avoid delaying a key decision to keep the peace."
  },
  7: {
    keywords: ["Drive", "Willpower", "Victory"],
    light: "Clear goals and momentum move you forward.",
    shadow: "Don't lose direction by chasing speed alone."
  },
  8: {
    keywords: ["Courage", "Patience", "Compassion"],
    light: "Gentle persistence is real strength.",
    shadow: "Avoid suppressing emotions or pushing too hard."
  },
  9: {
    keywords: ["Reflection", "Wisdom", "Solitude"],
    light: "Pause and listen inward for clarity.",
    shadow: "Don't let solitude become isolation."
  },
  10: {
    keywords: ["Change", "Cycles", "Timing"],
    light: "The tide is turning; flexibility helps.",
    shadow: "Don't rely only on luck or fear the shift."
  },
  11: {
    keywords: ["Balance", "Truth", "Accountability"],
    light: "Honest choices pay off over time.",
    shadow: "Beware harsh judgment or self-blame."
  },
  12: {
    keywords: ["Perspective", "Pause", "Surrender"],
    light: "A pause reveals a new point of view.",
    shadow: "Avoid needless sacrifice or stagnation."
  },
  13: {
    keywords: ["Transition", "Endings", "Rebirth"],
    light: "An ending clears space for a new start.",
    shadow: "Resisting change prolongs stagnation."
  },
  14: {
    keywords: ["Balance", "Blending", "Healing"],
    light: "Mix and moderate to find the best outcome.",
    shadow: "Don't delay decisions in the name of balance."
  },
  15: {
    keywords: ["Attachment", "Temptation", "Dependence"],
    light: "Naming the desire opens a path to freedom.",
    shadow: "Guard against obsession narrowing your options."
  },
  16: {
    keywords: ["Breakthrough", "Shock", "Release"],
    light: "A sudden shake-up reveals what's true.",
    shadow: "Prepare safety nets for abrupt change."
  },
  17: {
    keywords: ["Hope", "Renewal", "Inspiration"],
    light: "Hope and renewal guide you forward.",
    shadow: "Anchor hope with practical steps."
  },
  18: {
    keywords: ["Uncertainty", "Instinct", "Illusion"],
    light: "Your instincts can guide through ambiguity.",
    shadow: "Don't let fear magnify into fantasy."
  },
  19: {
    keywords: ["Success", "Joy", "Clarity"],
    light: "Warmth and clarity lift your path.",
    shadow: "Don't miss details through over-optimism."
  },
  20: {
    keywords: ["Awakening", "Calling", "Evaluation"],
    light: "A wake-up call invites honest self-assessment.",
    shadow: "Don't stay stuck in the past."
  },
  21: {
    keywords: ["Completion", "Integration", "Achievement"],
    light: "Completion opens the next chapter.",
    shadow: "Perfectionism can delay the finish."
  }
};

export const deck = [
  {
    id: 0,
    name: "The Fool",
    nameKr: "바보",
    keywords: ["시작", "자유", "가능성"],
    light: "새로운 시작에 대한 가벼운 용기와 호기심이 필요합니다.",
    shadow: "준비가 부족한 충동이나 현실감각의 부족을 경계하세요."
  },
  {
    id: 1,
    name: "The Magician",
    nameKr: "마법사",
    keywords: ["집중", "의지", "창조"],
    light: "가진 자원을 묶어 현실로 만들어낼 순간입니다.",
    shadow: "겉치레에 집중하거나 과장된 자신감에 주의하세요."
  },
  {
    id: 2,
    name: "The High Priestess",
    nameKr: "여사제",
    keywords: ["직관", "비밀", "내면"],
    light: "조용한 내면의 신호가 정답을 알고 있습니다.",
    shadow: "불안으로 지나친 해석을 하거나 마음을 닫지 않게 조심하세요."
  },
  {
    id: 3,
    name: "The Empress",
    nameKr: "여황제",
    keywords: ["풍요", "돌봄", "성장"],
    light: "지금은 키우고 돌보면 성과가 커지는 시기입니다.",
    shadow: "과한 보호나 게으름으로 흐르지 않게 균형을 잡으세요."
  },
  {
    id: 4,
    name: "The Emperor",
    nameKr: "황제",
    keywords: ["질서", "안정", "책임"],
    light: "기준을 세우고 책임 있게 밀어붙이면 안정이 옵니다.",
    shadow: "통제 욕구가 강해지면 관계가 경직될 수 있습니다."
  },
  {
    id: 5,
    name: "The Hierophant",
    nameKr: "교황",
    keywords: ["전통", "배움", "가치"],
    light: "검증된 방식과 조언이 큰 힘이 될 때입니다.",
    shadow: "기존 규칙에 갇혀 새로운 가능성을 놓치지 않게 하세요."
  },
  {
    id: 6,
    name: "The Lovers",
    nameKr: "연인",
    keywords: ["선택", "연결", "조화"],
    light: "가치에 맞는 선택이 관계와 흐름을 정렬합니다.",
    shadow: "갈등을 피하려다 중요한 결정을 미루지 마세요."
  },
  {
    id: 7,
    name: "The Chariot",
    nameKr: "전차",
    keywords: ["추진", "의지", "승리"],
    light: "선명한 목표와 추진력이 결과를 앞당깁니다.",
    shadow: "속도에 취해 방향을 잃지 않게 체크하세요."
  },
  {
    id: 8,
    name: "Strength",
    nameKr: "힘",
    keywords: ["용기", "인내", "자비"],
    light: "강함은 부드럽게 다루는 인내에서 나옵니다.",
    shadow: "감정을 억누르거나 무리한 버티기는 피하세요."
  },
  {
    id: 9,
    name: "The Hermit",
    nameKr: "은둔자",
    keywords: ["성찰", "지혜", "고요"],
    light: "잠시 멈추어 스스로의 답을 찾을 때입니다.",
    shadow: "외로움이 고립으로 변하지 않게 연결을 유지하세요."
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    nameKr: "운명의 수레바퀴",
    keywords: ["변화", "흐름", "타이밍"],
    light: "흐름이 바뀌는 시기라 유연성이 필요합니다.",
    shadow: "우연에만 기대거나 불안정함에 휘둘리지 마세요."
  },
  {
    id: 11,
    name: "Justice",
    nameKr: "정의",
    keywords: ["균형", "진실", "책임"],
    light: "정직한 선택이 장기적으로 가장 유리합니다.",
    shadow: "지나친 판단이나 자기비난을 경계하세요."
  },
  {
    id: 12,
    name: "The Hanged Man",
    nameKr: "매달린 사람",
    keywords: ["관점", "멈춤", "수용"],
    light: "멈추는 선택이 새로운 관점을 열어줍니다.",
    shadow: "불필요한 희생으로 자신을 소모하지 않게 하세요."
  },
  {
    id: 13,
    name: "Death",
    nameKr: "죽음",
    keywords: ["전환", "마무리", "재시작"],
    light: "끝맺음이 새로운 시작을 준비합니다.",
    shadow: "변화를 미루면 정체가 길어질 수 있습니다."
  },
  {
    id: 14,
    name: "Temperance",
    nameKr: "절제",
    keywords: ["조율", "균형", "치유"],
    light: "천천히 섞고 조율하면 가장 좋은 합이 됩니다.",
    shadow: "균형을 맞춘다는 핑계로 결정을 늦추지 마세요."
  },
  {
    id: 15,
    name: "The Devil",
    nameKr: "악마",
    keywords: ["집착", "유혹", "의존"],
    light: "욕망을 인정하는 순간 해방의 실마리가 보입니다.",
    shadow: "집착이 선택지를 좁히지 않게 경계하세요."
  },
  {
    id: 16,
    name: "The Tower",
    nameKr: "탑",
    keywords: ["붕괴", "깨달음", "해방"],
    light: "깨져야 보이는 사실이 곧 방향을 바꿉니다.",
    shadow: "갑작스러운 변화에 대비해 안전망을 챙기세요."
  },
  {
    id: 17,
    name: "The Star",
    nameKr: "별",
    keywords: ["희망", "회복", "영감"],
    light: "회복과 희망이 다시 길을 비춥니다.",
    shadow: "희망을 현실적인 행동으로 연결하세요."
  },
  {
    id: 18,
    name: "The Moon",
    nameKr: "달",
    keywords: ["불확실", "직감", "환상"],
    light: "모호한 감정 속에서도 직감이 길을 찾습니다.",
    shadow: "불안이 과장된 상상을 만들지 않게 조심하세요."
  },
  {
    id: 19,
    name: "The Sun",
    nameKr: "태양",
    keywords: ["성공", "기쁨", "명료"],
    light: "명확한 기쁨과 자신감이 흐름을 밝힙니다.",
    shadow: "과도한 낙관으로 중요한 디테일을 놓치지 마세요."
  },
  {
    id: 20,
    name: "Judgement",
    nameKr: "심판",
    keywords: ["각성", "호출", "평가"],
    light: "결정의 순간이 다가오며 스스로의 기준이 필요합니다.",
    shadow: "과거에 매여 현재의 가능성을 닫지 않게 하세요."
  },
  {
    id: 21,
    name: "The World",
    nameKr: "세계",
    keywords: ["완성", "통합", "성취"],
    light: "완성과 통합이 이루어져 다음 단계로 넘어갑니다.",
    shadow: "완벽주의가 마무리를 늦추지 않게 하세요."
  }
].map((card) => ({
  ...card,
  image: "assets/cards/" + imageMap[card.id],
  keywordsEn: enMap[card.id]?.keywords,
  lightEn: enMap[card.id]?.light,
  shadowEn: enMap[card.id]?.shadow
}));

const openers = [
  "지금의 질문은 당신의 진짜 욕구를 비추고 있습니다.",
  "당신의 마음은 방향을 바꾸거나 정렬하려는 중입니다.",
  "조용히 들여다보면 이미 답이 보이는 순간입니다.",
  "지금은 속도를 조절하며 흐름을 읽을 때입니다.",
  "오늘의 에너지는 선택의 우선순위를 묻고 있습니다."
];

const anchors = [
  "핵심 키워드는 {keyword}입니다.",
  "당신의 중심에는 {keyword}가 놓여 있습니다.",
  "가장 중요한 실마리는 {keyword}에서 나옵니다.",
  "흐름을 바꾸는 단서는 {keyword}입니다."
];

const advices = [
  "{keyword}를 기준으로 작은 결정을 먼저 해보세요.",
  "오늘은 {keyword}를 지키는 선택이 장기적으로 유리합니다.",
  "결정 전에 {keyword}와 연결되는 사람과 대화해보세요.",
  "지금은 {keyword}의 균형을 다시 맞추는 타이밍입니다."
];

const actions = [
  "10분만 투자해 지금 상황을 메모로 정리해보세요.",
  "가장 부담이 적은 선택지를 1단계 실행해보세요.",
  "오늘 하나의 메시지를 보내 관계를 정리해보세요.",
  "미뤄둔 작은 일을 하나만 끝내보세요.",
  "하루 일정에서 30분의 여유를 확보해보세요."
];

const advicesBySpread = {
  1: [
    "{keyword}에 집중하되 결론은 조금 늦춰도 괜찮아요. 한 번 더 확인하는 태도가 오늘의 안전장치가 됩니다.",
    "{keyword}가 핵심이지만 서두르지 마세요. 작은 확인이 큰 실수를 막아줍니다.",
    "지금은 {keyword}를 중심에 두되, 급하게 확정하지 말고 한 단계를 더 점검하세요.",
    "{keyword}를 나침반으로 삼고, 결정은 신중히. 안전하게 가는 것이 결국 빠릅니다."
  ],
  3: [
    "과거-현재-미래의 흐름을 보며 {keyword}가 어디에서 흔들렸는지 점검하세요. 지금의 작은 조정이 미래를 안전하게 바꿉니다.",
    "과거의 패턴을 반복하지 않기 위해 {keyword}를 기준으로 균형을 잡아보세요. 서두르기보다 방향을 정확히 잡는 것이 중요합니다.",
    "현재의 선택이 미래를 만든다는 점을 기억하세요. {keyword}를 유지하되, 무리한 추진은 피하는 게 좋습니다.",
    "흐름을 정리한 뒤 {keyword}를 기준으로 다음 행동을 선택하세요. 급한 결정은 미루는 쪽이 유리합니다."
  ],
  5: [
    "현재-장애-가능성-조언-결과를 함께 볼 때 {keyword}가 중심축이 됩니다. 위험 신호가 보이면 속도를 낮추는 것이 장기적으로 유리합니다.",
    "도전 요소를 무시하지 말고 {keyword}로 균형을 잡아보세요. 빠르게 밀기보다 안전하게 가는 전략이 필요합니다.",
    "가능성과 결과를 기대하되, 장애 카드가 말하는 위험을 체크하세요. {keyword}를 지키는 것이 방어선이 됩니다.",
    "큰 그림을 보되 세부 위험을 놓치지 마세요. {keyword}가 흔들리면 결과가 달라질 수 있습니다."
  ]
};

const actionsBySpread = {
  1: [
    "오늘은 {keyword}와 연결된 작은 습관 하나를 선택해보세요. 예: 짧은 정리, 가벼운 산책, 물 한 잔.",
    "하루 시작을 부드럽게 열어보세요. 깊게 숨 한 번, 어깨를 펴고 천천히 움직여보는 것만으로도 충분해요.",
    "오늘은 나에게 친절한 선택을 하나 해보세요. 작은 휴식, 잠깐의 스트레칭, 따뜻한 음료처럼요.",
    "마음이 흔들리면 {keyword}를 떠올리며 천천히 속도를 줄여보세요. 천천히 가는 것이 오늘의 해결책입니다."
  ],
  3: [
    "오늘은 관계 하나에 따뜻함을 더해보세요. 짧은 안부, 고마움 한마디가 흐름을 바꿔줍니다.",
    "현재에 집중하는 행동을 하나 정해보세요. 휴대폰을 내려두고 5분만 주변을 천천히 바라보는 것처럼요.",
    "오늘은 작은 균형을 맞추는 날입니다. 해야 할 것 하나, 쉬어야 할 것 하나를 나란히 정해보세요.",
    "미래가 불안할수록 지금 할 수 있는 작은 돌봄이 필요해요. 스스로에게 좋은 말 한 마디를 건네보세요."
  ],
  5: [
    "오늘은 마음을 단정하게 만드는 작은 행동을 해보세요. 책상 정리, 방 환기, 가벼운 정돈이면 충분합니다.",
    "주변의 소음을 줄이는 선택을 하나 해보세요. 알림을 잠시 끄거나 조용한 음악을 틀어도 좋아요.",
    "오늘의 작은 행동은 '나를 보호하는 선택'입니다. 무리한 약속 하나를 부드럽게 미루는 것도 괜찮아요.",
    "결과보다 과정에 집중해보세요. 오늘 할 수 있는 가장 쉬운 일 하나를 고르고, 그걸 마무리해보세요."
  ]
};
const openersEn = [
  "Your question highlights what matters most right now.",
  "Your mind is trying to realign the direction.",
  "A quiet look inward already contains the answer.",
  "This is a moment to slow down and read the flow.",
  "Today's energy asks for clearer priorities."
];

const anchorsEn = [
  "The key word here is {keyword}.",
  "At the center lies {keyword}.",
  "The main clue comes from {keyword}.",
  "The turning point is {keyword}."
];

const advicesEn = [
  "Let {keyword} guide a small decision first.",
  "Protect {keyword} to support the long game.",
  "Talk with someone who connects to {keyword}.",
  "Bring {keyword} back into balance today."
];

const actionsEn = [
  "Spend 10 minutes writing a quick summary.",
  "Take the smallest, lowest-risk first step.",
  "Send one message to tidy a relationship.",
  "Finish one small task you've been delaying.",
  "Reserve 30 minutes of quiet space today."
];

const advicesBySpreadEn = {
  1: [
    "Keep {keyword} at the center today, but verify once more before committing. A small check prevents a big detour.",
    "Let {keyword} guide you, yet avoid rushing the conclusion. Steady choices are safer.",
    "Focus on {keyword} and re-check one detail that could trip you later. Caution protects momentum.",
    "Treat {keyword} as a compass, not a command. Confirm the next step before locking it in."
  ],
  3: [
    "Link past, present, and future, then use {keyword} to rebalance the direction. A small adjustment now protects the outcome.",
    "The past explains the present, but it does not control it. Let {keyword} guide a careful pivot.",
    "Read the timeline: past pattern, present choice, future possibility. Keep {keyword} steady and avoid extremes.",
    "Use {keyword} to separate what is learned from what is still uncertain. Move forward with measured confidence."
  ],
  5: [
    "Balance current energy, challenge, potential, advice, and outcome with {keyword} at the center. If risk rises, slow down and secure a safety net.",
    "Let {keyword} filter what to push and what to pause. Respect the challenge card to protect the outcome.",
    "The five-card view says: move, but carefully. Use {keyword} to negotiate with the challenge, not fight it.",
    "Aim for sustainable progress: {keyword} plus one protective boundary keeps the outcome stable."
  ]
};

const actionsBySpreadEn = {
  1: [
    "Choose one gentle habit tied to {keyword} today. A short walk, a tidy corner, or a glass of water is enough.",
    "Open the day softly: one deep breath, relaxed shoulders, and a slow pace.",
    "Do one kind thing for yourself today. A small pause, a stretch, or warm tea works well.",
    "If you feel rushed, slow down and let {keyword} guide your rhythm. Safety beats speed today."
  ],
  3: [
    "Add warmth to one relationship today. A short message or a thank-you can shift the flow.",
    "Pick one present-focused action: phone down, look around, breathe for five minutes.",
    "Balance the day with two small choices: one task and one rest.",
    "When the future feels heavy, offer yourself one kind sentence. It steadies the path."
  ],
  5: [
    "Do one small thing that makes the space feel calm: tidy a corner, open a window, or reset your desk.",
    "Reduce noise for a bit: silence notifications or play gentle music.",
    "Choose one protective action today. It can be as simple as postponing a heavy commitment.",
    "Focus on the process, not the outcome. Pick the easiest task and finish it."
  ]
};

function randomInt(max) {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return buf[0] % max;
  }
  return Math.floor(Math.random() * max);
}

function pick(list) {
  return list[randomInt(list.length)];
}

export function drawCard(excludeId = null) {
  let card = pick(deck);
  if (excludeId !== null && deck.length > 1) {
    while (card.id === excludeId) {
      card = pick(deck);
    }
  }
  const orientation = randomInt(2) === 0 ? "upright" : "reversed";
  return {
    ...card,
    orientation
  };
}

export function drawSpread(count = 1) {
  const limit = Math.min(count, deck.length);
  const drawn = [];
  const used = new Set();
  while (drawn.length < limit) {
    const card = pick(deck);
    if (used.has(card.id)) {
      continue;
    }
    used.add(card.id);
    drawn.push({
      ...card,
      orientation: randomInt(2) === 0 ? "upright" : "reversed"
    });
  }
  return drawn;
}

export function generateReading(question, card, locale = "ko", spreadCount = 3) {
  const isEnglish = locale === "en";
  const keywordList = isEnglish ? (card.keywordsEn || card.keywords) : card.keywords;
  const keyword = pick(keywordList);
  const orientationLabel = isEnglish
    ? card.orientation === "reversed" ? "Reversed" : "Upright"
    : card.orientation === "reversed" ? "역위" : "정위";
  const meaning = isEnglish
    ? card.orientation === "reversed"
      ? (card.shadowEn || card.shadow)
      : (card.lightEn || card.light)
    : card.orientation === "reversed"
      ? card.shadow
      : card.light;
  const headline = isEnglish ? `${card.name} · ${orientationLabel}` : `${card.nameKr} · ${orientationLabel}`;
  const openerList = isEnglish ? openersEn : openers;
  const anchorList = isEnglish ? anchorsEn : anchors;
  const adviceBySpread = isEnglish ? advicesBySpreadEn : advicesBySpread;
  const actionBySpread = isEnglish ? actionsBySpreadEn : actionsBySpread;
  const fallbackAdviceList = isEnglish ? advicesEn : advices;
  const fallbackActionList = isEnglish ? actionsEn : actions;
  const adviceList = adviceBySpread[spreadCount] || fallbackAdviceList;
  const actionList = actionBySpread[spreadCount] || fallbackActionList;
  const summary = `${pick(openerList)} ${meaning} ${pick(anchorList).replace("{keyword}", keyword)}`;
  const advice = pick(adviceList).replace("{keyword}", keyword);
  const action = pick(actionList);

  return {
    headline,
    summary,
    advice,
    action,
    meaning,
    orientationLabel,
    keyword,
    question: (question || "").trim()
  };
}







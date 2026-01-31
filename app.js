import { drawSpread, generateReading } from "./shared/tarot.js";

const form = document.getElementById("tarot-form");
const questionInput = document.getElementById("question");
const countEl = document.getElementById("count");
const shuffleButton = document.getElementById("shuffle");
const scrollButton = document.getElementById("scroll-to-reading");
const copyButton = document.getElementById("copy-result");
const statusEl = document.getElementById("status");
const readingSection = document.getElementById("reading-section");
const cardGridEl = document.getElementById("card-grid");
const spreadListEl = document.getElementById("spread-list");

const readingBadgeEl = document.getElementById("reading-badge");
const readingHeadlineEl = document.getElementById("reading-headline");
const readingSummaryEl = document.getElementById("reading-summary");
const readingAdviceEl = document.getElementById("reading-advice");
const readingActionEl = document.getElementById("reading-action");

const navHomeEl = document.getElementById("nav-home");
const navAboutEl = document.getElementById("nav-about");
const navPrivacyEl = document.getElementById("nav-privacy");
const navTermsEl = document.getElementById("nav-terms");
const navContactEl = document.getElementById("nav-contact");

const infoTitleEl = document.getElementById("info-title");
const infoDescEl = document.getElementById("info-desc");
const infoStepsTitleEl = document.getElementById("info-steps-title");
const infoStep1El = document.getElementById("info-step-1");
const infoStep2El = document.getElementById("info-step-2");
const infoStep3El = document.getElementById("info-step-3");
const infoSafetyTitleEl = document.getElementById("info-safety-title");
const infoSafety1El = document.getElementById("info-safety-1");
const infoSafety2El = document.getElementById("info-safety-2");
const infoSafety3El = document.getElementById("info-safety-3");
const infoFaqTitleEl = document.getElementById("info-faq-title");
const infoFaq1El = document.getElementById("info-faq-1");
const infoFaq2El = document.getElementById("info-faq-2");
const infoFaq3El = document.getElementById("info-faq-3");

const badgeEl = document.getElementById("badge");
const heroTitleEl = document.getElementById("hero-title");
const heroDescEl = document.getElementById("hero-desc");
const questionLabelEl = document.getElementById("question-label");
const spreadLabelEl = document.getElementById("spread-label");
const spreadNoteEl = document.getElementById("spread-note");
const hintEl = document.getElementById("hint");
const drawButtonEl = document.getElementById("draw-button");
const disclaimerEl = document.getElementById("disclaimer");
const adviceTitleEl = document.getElementById("advice-title");
const actionTitleEl = document.getElementById("action-title");
const footerLeftEl = document.getElementById("footer-left");
const footerRightEl = document.getElementById("footer-right");

const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
const spreadButtons = Array.from(document.querySelectorAll("[data-spread]"));

const metaDescription = document.querySelector("meta[name='description']");

const i18n = {
  ko: {
    title: "타로 스프레드 - 오늘의 힌트",
    description: "질문을 적고 1/3/5장의 타로 카드로 오늘의 흐름을 확인해보세요.",
    badge: "TAROT SPREAD",
    heroTitle: "질문 하나, 카드 여러 장.",
    heroDesc: "조용히 묻고, 오늘의 방향을 작은 힌트로 받아보세요.",
    navHome: "홈",
    navAbout: "소개",
    navPrivacy: "개인정보 처리방침",
    navTerms: "이용약관",
    navContact: "문의",
    infoTitle: "이 사이트는 어떤 곳인가요?",
    infoDesc: "짧은 질문을 적고 타로 스프레드를 통해 오늘의 흐름을 부드럽게 점검하는 셀프 리플렉션 도구입니다.",
    infoStepsTitle: "이용 방법",
    infoStep1: "지금 떠오르는 질문을 간단하게 적어주세요.",
    infoStep2: "1/3/5장 스프레드를 선택하고 카드를 뽑습니다.",
    infoStep3: "조언과 오늘의 작은 행동을 참고해 하루를 정리해보세요.",
    infoSafetyTitle: "안전하게 사용하기",
    infoSafety1: "이 결과는 엔터테인먼트와 자기 성찰을 위한 참고용입니다.",
    infoSafety2: "중요한 결정은 전문가와 상의하세요.",
    infoSafety3: "불편한 감정이 들면 쉬어가도 괜찮습니다.",
    infoFaqTitle: "자주 묻는 질문",
    infoFaq1: "카드 결과는 정답이 아니라 방향을 점검하는 힌트입니다.",
    infoFaq2: "하루에 여러 번 뽑아도 괜찮지만 과몰입은 피해주세요.",
    infoFaq3: "개인정보는 입력하지 않는 것을 권장합니다.",
    shuffle: "카드만 먼저 뽑기",
    scroll: "결과 보기",
    questionLabel: "지금 떠오르는 질문",
    questionPlaceholder: "예: 이직을 해도 될까?",
    spreadLabel: "스프레드 선택",
    spreadButtons: { 1: "1장", 3: "3장", 5: "5장" },
    spreadNote: {
      1: "오늘의 흐름을 한 장으로 비춰봅니다.",
      3: "과거-현재-미래의 흐름을 살펴봅니다.",
      5: "현재와 장애, 가능성, 조언, 결과를 순서대로 봅니다."
    },
    hint: "짧게 적을수록 카드 해석이 또렷해요.",
    draw: "카드 뽑기",
    disclaimer: "이 콘텐츠는 자기 성찰을 돕는 엔터테인먼트입니다. 중요한 결정은 전문가와 상의하세요.",
    readingBadge: "SPREAD",
    readingHeadline: "오늘의 메시지",
    readingSummaryPlaceholder: "질문을 입력하고 카드를 뽑아주세요.",
    adviceTitle: "조언",
    actionTitle: "오늘의 작은 행동",
    advicePlaceholder: "당신의 선택을 돕는 한 문장을 보여드립니다.",
    actionPlaceholder: "하루에 적용할 수 있는 작은 행동을 제안합니다.",
    copy: "결과 복사",
    footerLeft: "© 2026 One Card Tarot",
    footerRight: "Made for gentle focus",
    statusNeedQuestion: "질문을 입력해 주세요.",
    statusLoading: "카드를 해석하는 중입니다...",
    statusCopyDone: "결과가 복사되었습니다.",
    statusCopyFail: "복사에 실패했어요. 다시 시도해 주세요.",
    statusNeedDraw: "먼저 카드를 뽑아주세요.",
    shuffleDefaultQuestion: "오늘의 흐름은?",
    copyLabels: {
      question: "질문",
      spread: "스프레드",
      advice: "조언",
      action: "오늘의 행동"
    },
    spreadNames: { 1: "원카드", 3: "3장 스프레드", 5: "5장 스프레드" },
    positionLabels: {
      1: ["오늘"],
      3: ["과거", "현재", "미래"],
      5: ["현재", "장애", "가능성", "조언", "결과"]
    },
    cardSuit: "메이저 아르카나",
    placeholderTitle: "카드를 뽑아보세요",
    placeholderSubtitle: "Tarot Spread",
    placeholderKeyword: "키워드",
    placeholderMeaning: "당신의 질문에 대한 힌트를 준비합니다."
  },
  en: {
    title: "Tarot Spread - Today's Hint",
    description: "Write a question and draw 1/3/5 tarot cards to glimpse today's flow.",
    badge: "TAROT SPREAD",
    heroTitle: "One question, several cards.",
    heroDesc: "Ask softly and receive a small hint for today.",
    navHome: "Home",
    navAbout: "About",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    navContact: "Contact",
    infoTitle: "What is this site?",
    infoDesc: "A gentle self-reflection tool that helps you check today's flow with a short question and a tarot spread.",
    infoStepsTitle: "How it works",
    infoStep1: "Write a simple question that feels important right now.",
    infoStep2: "Choose 1/3/5 cards and draw your spread.",
    infoStep3: "Use the advice and small action to organize your day.",
    infoSafetyTitle: "Use it safely",
    infoSafety1: "Readings are for reflection and entertainment only.",
    infoSafety2: "For major decisions, consult a professional.",
    infoSafety3: "If you feel overwhelmed, it's okay to pause.",
    infoFaqTitle: "FAQ",
    infoFaq1: "These readings are hints for perspective, not absolute answers.",
    infoFaq2: "Multiple draws are okay, but avoid over-reliance.",
    infoFaq3: "We recommend not entering personal data.",
    shuffle: "Draw without a question",
    scroll: "See the reading",
    questionLabel: "Your question right now",
    questionPlaceholder: "e.g., Should I change jobs?",
    spreadLabel: "Choose a spread",
    spreadButtons: { 1: "1 card", 3: "3 cards", 5: "5 cards" },
    spreadNote: {
      1: "A single card reflects today's focus.",
      3: "See the flow of past, present, and future.",
      5: "See current energy, challenge, potential, advice, and outcome."
    },
    hint: "Short questions lead to clearer readings.",
    draw: "Draw cards",
    disclaimer: "This content is for reflection and entertainment. For major decisions, consult a professional.",
    readingBadge: "SPREAD",
    readingHeadline: "Today's message",
    readingSummaryPlaceholder: "Type a question and draw the cards.",
    adviceTitle: "Advice",
    actionTitle: "Small action for today",
    advicePlaceholder: "A guiding sentence to support your choice.",
    actionPlaceholder: "A small action you can take today.",
    copy: "Copy result",
    footerLeft: "© 2026 One Card Tarot",
    footerRight: "Made for gentle focus",
    statusNeedQuestion: "Please enter a question.",
    statusLoading: "Interpreting your cards...",
    statusCopyDone: "Result copied.",
    statusCopyFail: "Copy failed. Please try again.",
    statusNeedDraw: "Please draw the cards first.",
    shuffleDefaultQuestion: "What is today's flow?",
    copyLabels: {
      question: "Question",
      spread: "Spread",
      advice: "Advice",
      action: "Action"
    },
    spreadNames: { 1: "Single Card", 3: "Three-Card Spread", 5: "Five-Card Spread" },
    positionLabels: {
      1: ["Today"],
      3: ["Past", "Present", "Future"],
      5: ["Current", "Challenge", "Potential", "Advice", "Outcome"]
    },
    cardSuit: "Major Arcana",
    placeholderTitle: "Draw a card",
    placeholderSubtitle: "Tarot Spread",
    placeholderKeyword: "Keyword",
    placeholderMeaning: "Preparing a hint for your question."
  }
};

const state = {
  spreadCount: 3,
  locale: "ko",
  cards: null,
  question: "",
  readingsByLocale: {}
};

function setStatus(message) {
  statusEl.textContent = message;
}

function setLoading(isLoading) {
  form.classList.toggle("is-loading", isLoading);
}

function updateCount() {
  const length = questionInput.value.trim().length;
  countEl.textContent = `${length}/200`;
}

function getTexts(locale = state.locale) {
  return i18n[locale] || i18n.ko;
}

function getPositionLabels(count, locale = state.locale) {
  const texts = getTexts(locale);
  return texts.positionLabels[count] || texts.positionLabels[3];
}

function setActiveButton(list, value) {
  list.forEach((button) => {
    button.classList.toggle("is-active", String(button.dataset.spread || button.dataset.lang) === String(value));
  });
}

function updateSpreadNote() {
  const texts = getTexts();
  spreadNoteEl.textContent = texts.spreadNote[state.spreadCount];
}

function updateTextContent() {
  const texts = getTexts();
  document.documentElement.lang = state.locale;
  document.title = texts.title;
  if (metaDescription) {
    metaDescription.setAttribute("content", texts.description);
  }
  badgeEl.textContent = texts.badge;
  heroTitleEl.textContent = texts.heroTitle;
  heroDescEl.textContent = texts.heroDesc;
  navHomeEl.textContent = texts.navHome;
  navAboutEl.textContent = texts.navAbout;
  navPrivacyEl.textContent = texts.navPrivacy;
  navTermsEl.textContent = texts.navTerms;
  navContactEl.textContent = texts.navContact;
  infoTitleEl.textContent = texts.infoTitle;
  infoDescEl.textContent = texts.infoDesc;
  infoStepsTitleEl.textContent = texts.infoStepsTitle;
  infoStep1El.textContent = texts.infoStep1;
  infoStep2El.textContent = texts.infoStep2;
  infoStep3El.textContent = texts.infoStep3;
  infoSafetyTitleEl.textContent = texts.infoSafetyTitle;
  infoSafety1El.textContent = texts.infoSafety1;
  infoSafety2El.textContent = texts.infoSafety2;
  infoSafety3El.textContent = texts.infoSafety3;
  infoFaqTitleEl.textContent = texts.infoFaqTitle;
  infoFaq1El.textContent = texts.infoFaq1;
  infoFaq2El.textContent = texts.infoFaq2;
  infoFaq3El.textContent = texts.infoFaq3;
  shuffleButton.textContent = texts.shuffle;
  scrollButton.textContent = texts.scroll;
  questionLabelEl.textContent = texts.questionLabel;
  questionInput.placeholder = texts.questionPlaceholder;
  spreadLabelEl.textContent = texts.spreadLabel;
  spreadButtons.forEach((button) => {
    const count = Number(button.dataset.spread);
    button.textContent = texts.spreadButtons[count];
  });
  hintEl.textContent = texts.hint;
  drawButtonEl.textContent = texts.draw;
  disclaimerEl.textContent = texts.disclaimer;
  readingBadgeEl.textContent = texts.spreadNames[state.spreadCount];
  readingHeadlineEl.textContent = texts.readingHeadline;
  adviceTitleEl.textContent = texts.adviceTitle;
  actionTitleEl.textContent = texts.actionTitle;
  copyButton.textContent = texts.copy;
  footerLeftEl.textContent = texts.footerLeft;
  footerRightEl.textContent = texts.footerRight;
  updateSpreadNote();
}

function createCardElement({ card, reading, positionLabel, placeholder = false }) {
  const texts = getTexts();
  const cardEl = document.createElement("div");
  cardEl.className = "tarot-card";

  const title = placeholder ? texts.placeholderTitle : state.locale === "en" ? card.name : card.nameKr;
  const subtitle = placeholder
    ? texts.placeholderSubtitle
    : `${state.locale === "en" ? card.name : card.nameKr} · ${reading.orientationLabel}`;
  const keywords = placeholder
    ? [texts.placeholderKeyword]
    : state.locale === "en"
      ? card.keywordsEn || card.keywords
      : card.keywords;
  const meaning = placeholder ? texts.placeholderMeaning : reading.meaning;
  const image = placeholder ? "assets/cards/card-back.svg" : card.image || "assets/cards/card-back.svg";
  const number = placeholder ? "--" : String(card.id).padStart(2, "0");
  const orientationClass = !placeholder && card.orientation === "reversed" ? " reversed" : "";

  cardEl.innerHTML = `
    <div class="card-header">
      <span class="card-number">${number}</span>
      <span class="card-suit">${texts.cardSuit}</span>
    </div>
    <div class="card-position">${positionLabel}</div>
    <img class="card-image${orientationClass}" src="${image}" alt="${title}" loading="lazy" />
    <h2 class="card-title">${title}</h2>
    <p class="card-subtitle">${subtitle}</p>
    <ul class="card-keywords">${keywords.map((keyword) => `<li>${keyword}</li>`).join("")}</ul>
    <p class="card-meaning">${meaning}</p>
  `;

  return cardEl;
}

function renderPlaceholder() {
  const labels = getPositionLabels(state.spreadCount);
  cardGridEl.innerHTML = "";
  labels.forEach((label) => {
    cardGridEl.appendChild(createCardElement({ positionLabel: label, placeholder: true }));
  });

  const texts = getTexts();
  readingSummaryEl.textContent = texts.readingSummaryPlaceholder;
  readingAdviceEl.textContent = texts.advicePlaceholder;
  readingActionEl.textContent = texts.actionPlaceholder;
  spreadListEl.innerHTML = "";
  setStatus("");
}

function renderSpreadList(cards, readings) {
  const labels = getPositionLabels(state.spreadCount);
  spreadListEl.innerHTML = "";
  cards.forEach((card, index) => {
    const reading = readings[index] || generateReading(state.question, card, state.locale, state.spreadCount);
    const item = document.createElement("div");
    item.className = "spread-item";
    item.innerHTML = `<span>${labels[index]}</span><p>${reading.summary}</p>`;
    spreadListEl.appendChild(item);
  });
}

function renderResult(cards, readings) {
  cardGridEl.innerHTML = "";
  const labels = getPositionLabels(state.spreadCount);
  cards.forEach((card, index) => {
    const reading = readings[index] || generateReading(state.question, card, state.locale, state.spreadCount);
    const label = labels[index] || labels[labels.length - 1];
    cardGridEl.appendChild(createCardElement({ card, reading, positionLabel: label }));
  });

  const texts = getTexts();
  readingSummaryEl.textContent = texts.spreadNote[state.spreadCount];
  renderSpreadList(cards, readings);

  const focusIndex = state.spreadCount === 1 ? 0 : state.spreadCount === 3 ? 1 : 3;
  const focusReading = readings[focusIndex] || readings[0];
  readingAdviceEl.textContent = focusReading.advice;
  readingActionEl.textContent = focusReading.action;
  setStatus("");
}

function getReadings(locale) {
  if (!state.cards) {
    return null;
  }
  if (!state.readingsByLocale[locale]) {
    state.readingsByLocale[locale] = state.cards.map((card) =>
      generateReading(state.question, card, locale, state.spreadCount)
    );
  }
  return state.readingsByLocale[locale];
}

async function requestReading(question, count, locale) {
  const response = await fetch("/api/reading", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question,
      count,
      locale
    })
  });

  if (!response.ok) {
    throw new Error("API 요청 실패");
  }

  return response.json();
}

async function handleSubmit({ question, forceScroll = true }) {
  const trimmed = question.trim();
  const texts = getTexts();
  if (!trimmed) {
    setStatus(texts.statusNeedQuestion);
    return;
  }

  setLoading(true);
  setStatus(texts.statusLoading);

  let cards = drawSpread(state.spreadCount);
  let readings = [];

  try {
    const apiResult = await requestReading(trimmed, state.spreadCount, state.locale);
    if (apiResult?.cards?.length) {
      cards = apiResult.cards;
    }
    if (apiResult?.readings?.length) {
      readings = apiResult.readings;
    }
  } catch (error) {
    readings = [];
  }

  if (!readings.length) {
    readings = cards.map((card) => generateReading(trimmed, card, state.locale, state.spreadCount));
  }

  state.cards = cards;
  state.question = trimmed;
  state.readingsByLocale = { [state.locale]: readings };

  renderResult(cards, readings);
  setLoading(false);

  if (forceScroll) {
    readingSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function handleShuffle() {
  const texts = getTexts();
  const question = questionInput.value || texts.shuffleDefaultQuestion;
  handleSubmit({ question, forceScroll: true });
}

async function handleCopy() {
  const texts = getTexts();
  if (!state.cards) {
    setStatus(texts.statusNeedDraw);
    return;
  }

  const readings = getReadings(state.locale) || [];
  const labels = getPositionLabels(state.spreadCount);
  const lines = [
    `${texts.copyLabels.question}: ${state.question || texts.shuffleDefaultQuestion}`,
    `${texts.copyLabels.spread}: ${texts.spreadNames[state.spreadCount]}`
  ];

  state.cards.forEach((card, index) => {
    const reading = readings[index];
    const label = labels[index] || labels[labels.length - 1];
    const name = state.locale === "en" ? card.name : card.nameKr;
    lines.push(`${label}: ${name} (${reading.orientationLabel}) - ${reading.summary}`);
  });

  const focusIndex = state.spreadCount === 1 ? 0 : state.spreadCount === 3 ? 1 : 3;
  const focusReading = readings[focusIndex] || readings[0];
  if (focusReading) {
    lines.push(`${texts.copyLabels.advice}: ${focusReading.advice}`);
    lines.push(`${texts.copyLabels.action}: ${focusReading.action}`);
  }

  try {
    await navigator.clipboard.writeText(lines.join("\n"));
    setStatus(texts.statusCopyDone);
  } catch (error) {
    setStatus(texts.statusCopyFail);
  }
}

function setLanguage(locale) {
  state.locale = locale;
  setActiveButton(langButtons, locale);
  updateTextContent();
  const readings = getReadings(locale);
  if (state.cards && readings) {
    renderResult(state.cards, readings);
  } else {
    renderPlaceholder();
  }
}

function setSpread(count) {
  state.spreadCount = count;
  setActiveButton(spreadButtons, count);
  updateSpreadNote();
  if (state.cards) {
    renderPlaceholder();
    state.cards = null;
    state.readingsByLocale = {};
  } else {
    renderPlaceholder();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit({ question: questionInput.value, forceScroll: true });
});

questionInput.addEventListener("input", updateCount);
shuffleButton.addEventListener("click", handleShuffle);
copyButton.addEventListener("click", handleCopy);
scrollButton.addEventListener("click", () => {
  readingSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

spreadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const count = Number(button.dataset.spread);
    setSpread(count);
  });
});

updateCount();
updateTextContent();
renderPlaceholder();




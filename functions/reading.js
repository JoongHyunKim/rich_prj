import { deck, drawSpread, generateReading } from "../shared/tarot.js";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

export function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

export async function onRequestPost({ request }) {
  let payload = {};
  try {
    payload = await request.json();
  } catch (error) {
    payload = {};
  }

  const question = typeof payload.question === "string" ? payload.question : "";
  const count = Number.isInteger(payload.count) ? payload.count : 3;
  const locale = payload.locale === "en" ? "en" : "ko";
  const cardId = Number.isInteger(payload.cardId) ? payload.cardId : null;
  const orientation = payload.orientation === "reversed" ? "reversed" : "upright";

  let cards = [];
  if (cardId !== null) {
    const card = deck.find((item) => item.id === cardId);
    if (card) {
      cards = [{ ...card, orientation }];
    }
  }

  if (!cards.length) {
    cards = drawSpread(count);
  }

  const readings = cards.map((card) => generateReading(question, card, locale, count));

  return new Response(
    JSON.stringify({
      cards,
      readings
    }),
    {
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders()
      }
    }
  );
}

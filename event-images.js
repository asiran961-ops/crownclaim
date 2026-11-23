/**
 * 《왕관을 탐낼 권리》 — 행사 배경 이미지 경로
 *
 * Actual filenames in main/assets/events/ are Korean.
 * import.meta.url makes URLs relative to this file, so the paths work
 * under GitHub Pages' /crownclaim/ subpath and local dev servers.
 *
 * Usage:
 *   import { EVENT_IMAGES } from "./event-images.js";
 *   <img src={EVENT_IMAGES.springBall} alt="" />
 *
 * If importing from a file in components/, use "../event-images.js".
 */
export const EVENT_IMAGES = Object.freeze({
  springBall: new URL("./assets/events/개막 무도회.webp", import.meta.url).href,
  summerHunt: new URL("./assets/events/여름 수렵제.webp", import.meta.url).href,
  autumnHarvest: new URL("./assets/events/가을 수확제.webp", import.meta.url).href,
  winterSolstice: new URL("./assets/events/겨울 동지제.webp", import.meta.url).href,
  nobleCouncil: new URL("./assets/events/귀족원 최종 심의.webp", import.meta.url).href,
  imperialNomination: new URL("./assets/events/황제의 최종 후계 지명.webp", import.meta.url).href,
});

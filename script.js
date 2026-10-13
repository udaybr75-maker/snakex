/**
 * ============================================================================
 * YADHU // ROOT@PHANTOM_OS — ANALYTICAL 2ND-ORDER SPRING KOLP-240 HACKER ENGINE
 * ============================================================================
 * 1. SPACE_PORTALS (All 11 websites styled as Black-Ops SSH/Terminal Payloads)
 * 2. ANALYTICAL CRITICALLY-DAMPED 2ND-ORDER SPRING PHYSICS:
 *    - Exact closed-form solution to x'' + 2*w*x' + w^2*(x - target) = 0
 *    - C2-continuous velocity & acceleration: zero mouse-wheel notch jerk!
 * 3. OFF-MAIN-THREAD GPU IMAGEBITMAP DECODING (`1280x720` 1:1 Native Blit)
 * 4. DIRTY-CHECKED DOM & CANVAS UPDATES (Zero redundant DOM writes)
 * 5. LIVE HACKER CIPHER DECRYPTION & MATRIX BINARY/HEX RAIN CANVAS
 * ============================================================================
 */

const SPACE_PORTALS = [
  {
    id: "crackone",
    name: "CrackOne Inbox",
    tag: "ENCRYPTED SMTP SHELL",
    category: "comms",
    sector: "SSH // PORT_443",
    cmd: "ssh root@inbox.crackone.org",
    url: "https://inbox.crackone.org/login",
    host: "inbox.crackone.org",
    accent: "#00ff66",
    glow: "rgba(0, 255, 102, 0.32)",
    orbitRing: 1,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><circle cx="18" cy="15" r="2"/></svg>`
  },
  {
    id: "33mail",
    name: "33Mail Relay",
    tag: "BURNER ALIAS DAEMON",
    category: "comms",
    sector: "RELAY // 0x02",
    cmd: "./spoof_alias --target 33mail.com",
    url: "https://www.33mail.com/",
    host: "33mail.com",
    accent: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.32)",
    orbitRing: 1,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 11h8"/><path d="M12 7v8"/></svg>`
  },
  {
    id: "byteplus",
    name: "BytePlus Playground",
    tag: "LLM KERNEL SANDBOX",
    category: "ai",
    sector: "AI_NODE // 0x03",
    cmd: "./inject_llm --host ai.byteplus.com",
    url: "https://ai.byteplus.com/en/playground",
    host: "ai.byteplus.com",
    accent: "#00ff66",
    glow: "rgba(0, 255, 102, 0.32)",
    orbitRing: 1,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>`
  },
  {
    id: "simplelogin",
    name: "SimpleLogin Cloak",
    tag: "ZERO-TRACE IDENTITY PROXY",
    category: "comms",
    sector: "PROXY // 0x04",
    cmd: "./cloak_id --proxy simplelogin.io",
    url: "https://simplelogin.io/",
    host: "simplelogin.io",
    accent: "#00ff66",
    glow: "rgba(0, 255, 102, 0.32)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1.5"/></svg>`
  },
  {
    id: "videocutter",
    name: "Video Logo Eraser",
    tag: "OPTICAL FORENSIC SCRUBBER",
    category: "media",
    sector: "OPTIC // 0x05",
    cmd: "./scrub_frames --clean-watermark",
    url: "https://online-video-cutter.com/remove-logo",
    host: "online-video-cutter.com",
    accent: "#ffb800",
    glow: "rgba(255, 184, 0, 0.32)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="4" width="15" height="16" rx="2"/><polygon points="17 9 22 6 22 18 17 15 17 9"/><line x1="6" y1="8" x2="13" y2="16"/></svg>`
  },
  {
    id: "deepseek",
    name: "DeepSeek Perchance",
    tag: "UNFILTERED LOGIC ENGINE",
    category: "ai",
    sector: "AI_NODE // 0x06",
    cmd: "ssh -L 8080:perchance.org/deepseek",
    url: "https://perchance.org/deepseek",
    host: "perchance.org/deepseek",
    accent: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.32)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/><line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/></svg>`
  },
  {
    id: "raphael",
    name: "Raphael AI Forge",
    tag: "NEURAL IMAGE SYNTHESIZER",
    category: "ai",
    sector: "AI_NODE // 0x07",
    cmd: "./forge_tensor --node raphael.app",
    url: "https://raphael.app/",
    host: "raphael.app",
    accent: "#ff1e42",
    glow: "rgba(255, 30, 66, 0.35)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>`
  },
  {
    id: "proton",
    name: "Proton Mail Vault",
    tag: "SWISS PGP CRYPTO VAULT",
    category: "comms",
    sector: "VAULT // 0x08",
    cmd: "gpg --decrypt proton.me/mail",
    url: "https://proton.me/mail/pricing?ref=mailheropricing",
    host: "proton.me/mail",
    accent: "#00ff66",
    glow: "rgba(0, 255, 102, 0.32)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/><path d="m9 12 2 2 4-4"/></svg>`
  },
  {
    id: "pollinations",
    name: "Pollinations AI",
    tag: "GENERATIVE TENSOR MESH",
    category: "ai",
    sector: "AI_NODE // 0x09",
    cmd: "./mesh_render --host pollinations.ai",
    url: "https://pollinations.ai/",
    host: "pollinations.ai",
    accent: "#00ff66",
    glow: "rgba(0, 255, 102, 0.32)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="19" r="2"/><line x1="9.8" y1="9.8" x2="6.5" y2="6.5"/><line x1="14.2" y1="9.8" x2="17.5" y2="6.5"/><line x1="14.2" y1="14.2" x2="17.5" y2="17.5"/><line x1="9.8" y1="14.2" x2="6.5" y2="17.5"/></svg>`
  },
  {
    id: "freeaimodels",
    name: "FreeAI Models Chat",
    tag: "MULTI-MODEL SHELL UPLINK",
    category: "ai",
    sector: "AI_NODE // 0x0A",
    cmd: "nc -vz freeaimodels.online 443",
    url: "https://freeaimodels.online/chat/x1mynx8mv3t3xza",
    host: "freeaimodels.online",
    accent: "#00f0ff",
    glow: "rgba(0, 240, 255, 0.32)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h5"/></svg>`
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs Sonic",
    tag: "NEURAL VOICE CLONE ENGINE",
    category: "media",
    sector: "SONIC // 0x0B",
    cmd: "./voice_clone --freq 48000Hz",
    url: "https://elevenlabs.io/app/home",
    host: "elevenlabs.io",
    accent: "#ffb800",
    glow: "rgba(255, 184, 0, 0.32)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M2 12h3l3-8 4 16 4-12 3 4h3"/></svg>`
  }
];

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Quintic smootherstep for zero-jerk S-curve interpolation
function smootherstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / Math.max(0.0001, edge1 - edge0), 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
}

/**
 * Analytical Critically-Damped 2nd-Order Spring Solver
 * Solves x'' + 2*omega*x' + omega^2*(x - target) = 0 exactly for any dt.
 * Guarantees C2-continuous velocity & acceleration (zero mouse-wheel notch stepping!).
 */
function stepCriticallyDampedSpring(pos, vel, target, omega, dt) {
  const delta = pos - target;
  const exp = Math.exp(-omega * dt);
  const nextPos = target + (delta + (vel + omega * delta) * dt) * exp;
  const nextVel = (vel - (vel + omega * delta) * omega * dt) * exp;
  return [nextPos, nextVel];
}

/* ============================================================================
   HACKER CIPHER TEXT SCRAMBLE / DECRYPTION EFFECT
   ============================================================================ */
const CIPHER_GLYPHS = "01ABCDEF#$%&*+<>?/@~^=";
const activeScrambles = new WeakMap();

function triggerCipherDecrypt(el) {
  if (!el) return;
  const finalStr = el.getAttribute("data-cipher") || el.textContent;
  if (!finalStr) return;

  const prevId = activeScrambles.get(el);
  if (prevId) cancelAnimationFrame(prevId);

  let frame = 0;
  const totalFrames = 22;

  function step() {
    frame++;
    const progress = frame / totalFrames;
    const revealCount = Math.floor(progress * finalStr.length);
    let out = "";

    for (let i = 0; i < finalStr.length; i++) {
      if (finalStr[i] === " ") {
        out += " ";
      } else if (i < revealCount) {
        out += finalStr[i];
      } else {
        out += CIPHER_GLYPHS[(i * 7 + frame * 3) % CIPHER_GLYPHS.length];
      }
    }

    el.textContent = out;
    if (frame < totalFrames) {
      activeScrambles.set(el, requestAnimationFrame(step));
    } else {
      el.textContent = finalStr;
      activeScrambles.delete(el);
    }
  }

  activeScrambles.set(el, requestAnimationFrame(step));
}

/* ============================================================================
   2. ULTRA-SMOOTH 240-FRAME KOLP ENGINE (2ND-ORDER SPRING + IMAGEBITMAP)
   ============================================================================ */
const TOTAL_FRAMES = 240;
const CANVAS_W = 1280;
const CANVAS_H = 720;
const frameBitmaps = new Array(TOTAL_FRAMES + 1).fill(null);
let isHeroCoveringScreen = true;

function getFastFramePath(index) {
  const padded = String(clamp(Math.round(index), 1, TOTAL_FRAMES)).padStart(3, "0");
  return `kolp_fast/ezgif-frame-${padded}.webp?v=kolp720`;
}

function findNearestReadyFrame(targetIndex) {
  const idx = clamp(Math.round(targetIndex), 1, TOTAL_FRAMES);
  if (frameBitmaps[idx]) return frameBitmaps[idx];

  for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
    const prev = idx - offset;
    const next = idx + offset;
    if (prev >= 1 && frameBitmaps[prev]) return frameBitmaps[prev];
    if (next <= TOTAL_FRAMES && frameBitmaps[next]) return frameBitmaps[next];
  }
  return null;
}

/**
 * Zero-repaint GPU compositor stage transform (`opacity` + `translate3d` + `scale`)
 */
function applyStageTransform(el, p, start, enterEnd, exitStart, end, isFirst, isLast) {
  if (!el) return;

  let opacity = 0;
  let y = 46;
  let scale = 0.96;

  if (p >= start && p <= end) {
    if (isFirst && p <= exitStart) {
      const drift = smootherstep(0, exitStart, p);
      opacity = 1;
      y = lerp(0, -20, drift);
      scale = lerp(1, 1.018, drift);
    } else if (p < enterEnd) {
      const t = smootherstep(start, enterEnd, p);
      opacity = t;
      y = lerp(46, 0, t);
      scale = lerp(0.96, 1, t);
    } else if (p <= exitStart || isLast) {
      const drift = smootherstep(enterEnd, exitStart, p);
      opacity = 1;
      y = lerp(0, -12, drift);
      scale = 1;
    } else {
      const t = smootherstep(exitStart, end, p);
      opacity = 1 - t;
      y = lerp(-12, -48, t);
      scale = lerp(1, 0.96, t);
    }
  }

  el.style.opacity = opacity.toFixed(3);
  el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
}

function initKolpSequenceAndScroll() {
  const seqCanvas = document.getElementById("knop-sequence-canvas");
  const heroTrack = document.getElementById("hero-stage");
  const progressBar = document.getElementById("scroll-progress-bar");
  const navReadout = document.getElementById("nav-scroll-readout");
  const frameReadout = document.getElementById("frame-readout");
  const hudFrameCounter = document.getElementById("hud-frame-counter");
  const hudFrameFill = document.getElementById("hud-frame-fill");
  const hudBufferStatus = document.getElementById("hud-buffer-status");
  const heroRailFill = document.getElementById("hero-rail-fill");
  const hexMemDump = document.getElementById("hex-mem-dump");
  const railDots = document.querySelectorAll(".rail-dot");

  const featStages = [
    document.getElementById("hero-feat-0"),
    document.getElementById("hero-feat-1"),
    document.getElementById("hero-feat-2"),
    document.getElementById("hero-feat-3"),
    document.getElementById("hero-feat-4")
  ];

  if (!seqCanvas || !heroTrack) return;
  seqCanvas.width = CANVAS_W;
  seqCanvas.height = CANVAS_H;

  const ctx = seqCanvas.getContext("2d", {
    alpha: false,
    desynchronized: true
  });
  ctx.imageSmoothingEnabled = true;

  let lastDrawnFrameFloat = -1;

  /**
   * 1:1 Native 1280x720 GPU Texture Blit + Sub-Frame Quintic Cross-Dissolve.
   * Skips redrawing completely when the frame delta is < 0.001!
   */
  function drawBlendedFrames(exactFrameFloat, forceRedraw = false) {
    if (!forceRedraw && Math.abs(exactFrameFloat - lastDrawnFrameFloat) < 0.001) {
      return;
    }

    const floorIdx = clamp(Math.floor(exactFrameFloat), 1, TOTAL_FRAMES);
    const ceilIdx = clamp(floorIdx + 1, 1, TOTAL_FRAMES);
    const rawFrac = exactFrameFloat - floorIdx;
    const blendAlpha = smootherstep(0, 1, rawFrac);

    const frameA = findNearestReadyFrame(floorIdx);
    if (!frameA) return;

    lastDrawnFrameFloat = exactFrameFloat;

    ctx.globalAlpha = 1;
    ctx.drawImage(frameA, 0, 0, CANVAS_W, CANVAS_H);

    const frameB = frameBitmaps[ceilIdx];
    if (blendAlpha > 0.01 && frameB && frameB !== frameA) {
      ctx.globalAlpha = blendAlpha;
      ctx.drawImage(frameB, 0, 0, CANVAS_W, CANVAS_H);
      ctx.globalAlpha = 1;
    }
  }

  // Beginning-First Sequential Off-Main-Thread ImageBitmap Loader:
  const loadQueue = [];
  const queuedSet = new Set();

  function enqueueFrame(idx) {
    if (idx >= 1 && idx <= TOTAL_FRAMES && !queuedSet.has(idx)) {
      queuedSet.add(idx);
      loadQueue.push(idx);
    }
  }

  // 1. Load first 100 frames sequentially so the beginning is 100% in GPU RAM immediately
  for (let i = 1; i <= 100; i++) enqueueFrame(i);
  // 2. Load even frames across the remainder
  for (let i = 101; i <= TOTAL_FRAMES; i += 2) enqueueFrame(i);
  // 3. Fill in all remaining odd frames
  for (let i = 102; i <= TOTAL_FRAMES; i++) enqueueFrame(i);

  let loadedCount = 0;
  let inFlight = 0;
  const MAX_CONCURRENT = 12;

  async function loadFrameAsBitmap(idx) {
    const url = getFastFramePath(idx);
    try {
      if (typeof createImageBitmap === "function") {
        const res = await fetch(url);
        const blob = await res.blob();
        return await createImageBitmap(blob);
      }
    } catch (_) {
      // Fallback below
    }

    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";
      img.src = url;
      img.onload = () => {
        if (typeof img.decode === "function") {
          img.decode().then(() => resolve(img)).catch(() => resolve(img));
        } else {
          resolve(img);
        }
      };
      img.onerror = () => resolve(null);
    });
  }

  function pumpQueue() {
    while (inFlight < MAX_CONCURRENT && loadQueue.length > 0) {
      const nextIdx = loadQueue.shift();
      inFlight++;

      loadFrameAsBitmap(nextIdx).then((bitmap) => {
        inFlight--;
        if (bitmap) {
          loadedCount++;
          frameBitmaps[nextIdx] = bitmap;
          if (nextIdx === 1) {
            drawBlendedFrames(1, true);
          }
          if (hudBufferStatus) {
            const pct = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));
            hudBufferStatus.textContent =
              pct < 100 ? `INJECTING KERNEL (${pct}%)` : "240 PACKETS · ROOT LOCKED [120FPS]";
          }
        }
        pumpQueue();
      });
    }
  }

  pumpQueue();

  // Critically-damped 2nd-order spring state
  let springProgress = 0;
  let springVelocity = 0;
  let smoothFrameFloat = 1;
  let frameVelocity = 0;

  let lastRenderedIntFrame = -1;
  let lastActiveStageIdx = -1;
  let lastGlobalPct = -1;

  const startTimestamp = performance.now();
  let prevTickTime = startTimestamp;

  // Trigger opening cipher decrypt
  const firstCipher = document.querySelector("#hero-feat-0 [data-cipher]");
  if (firstCipher) triggerCipherDecrypt(firstCipher);

  function tick(now) {
    const dt = clamp((now - prevTickTime) / 1000, 0.001, 0.045);
    prevTickTime = now;
    const elapsedSec = (now - startTimestamp) / 1000;

    const scrollY = window.scrollY;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const globalProgress = clamp(scrollY / maxScroll, 0, 1);

    if (progressBar) {
      progressBar.style.width = `${(globalProgress * 100).toFixed(2)}%`;
    }

    const globalPctInt = Math.round(globalProgress * 100);
    if (globalPctInt !== lastGlobalPct) {
      lastGlobalPct = globalPctInt;
      if (navReadout) {
        navReadout.textContent = `0x${globalPctInt.toString(16).toUpperCase().padStart(2, "0")}%`;
      }
    }

    // Hero scroll target (0.0 -> 1.0 across the 520vh track)
    const rect = heroTrack.getBoundingClientRect();
    const scrollableHero = Math.max(1, heroTrack.offsetHeight - window.innerHeight);
    const rawHeroProgress = clamp(-rect.top / scrollableHero, 0, 1);

    // Pause background Matrix rain while the Hero canvas covers the viewport
    isHeroCoveringScreen = rect.bottom > window.innerHeight * 0.96;

    // Step the 2nd-order critically damped spring for scroll progress (omega = 11.5)
    [springProgress, springVelocity] = stepCriticallyDampedSpring(
      springProgress,
      springVelocity,
      rawHeroProgress,
      11.5,
      dt
    );
    springProgress = clamp(springProgress, 0, 1);

    // Ultra-Smooth Beginning Auto-Intro & Breathing (Frames 1 -> 16) when at top of page
    const introEase = smootherstep(0, 2.2, elapsedSec);
    const idleBreathingFrame = 1 + introEase * 11 + Math.sin(elapsedSec * 1.2) * 3.0;
    const idleWeight = smootherstep(0, 1, clamp(1 - springProgress * 14, 0, 1));

    const scrollTargetFrame = 1 + springProgress * (TOTAL_FRAMES - 1);
    const targetFrameFloat = lerp(scrollTargetFrame, Math.max(scrollTargetFrame, idleBreathingFrame), idleWeight);

    // Step 2nd-order spring for frame index (omega = 15.0)
    [smoothFrameFloat, frameVelocity] = stepCriticallyDampedSpring(
      smoothFrameFloat,
      frameVelocity,
      targetFrameFloat,
      15.0,
      dt
    );
    smoothFrameFloat = clamp(smoothFrameFloat, 1, TOTAL_FRAMES);

    drawBlendedFrames(smoothFrameFloat);

    const currentFrameInt = clamp(Math.round(smoothFrameFloat), 1, TOTAL_FRAMES);

    // Dirty-checked DOM text updates (only touch DOM when integer frame changes!)
    if (currentFrameInt !== lastRenderedIntFrame) {
      lastRenderedIntFrame = currentFrameInt;
      const paddedFrame = String(currentFrameInt).padStart(3, "0");
      if (frameReadout) frameReadout.textContent = `FRM ${paddedFrame}/240`;
      if (hudFrameCounter) hudFrameCounter.textContent = `PACKET ${paddedFrame} / 240`;
      if (hexMemDump) {
        const hexAddr = (0x7fff00a000 + currentFrameInt * 0x104).toString(16).toUpperCase();
        hexMemDump.textContent = `MEM_ADDR: 0x${hexAddr}`;
      }
    }

    if (hudFrameFill) hudFrameFill.style.width = `${(springProgress * 100).toFixed(1)}%`;
    if (heroRailFill) heroRailFill.style.height = `${(springProgress * 100).toFixed(1)}%`;

    // Continuously animate all 5 hacker terminal stages on top
    const p = springProgress;
    applyStageTransform(featStages[0], p, 0.0, 0.04, 0.14, 0.21, true, false);
    applyStageTransform(featStages[1], p, 0.18, 0.25, 0.35, 0.42, false, false);
    applyStageTransform(featStages[2], p, 0.39, 0.46, 0.56, 0.63, false, false);
    applyStageTransform(featStages[3], p, 0.60, 0.67, 0.77, 0.84, false, false);
    applyStageTransform(featStages[4], p, 0.81, 0.88, 0.98, 1.0, false, true);

    const activeStageIdx = clamp(Math.floor(p * 5), 0, 4);
    if (activeStageIdx !== lastActiveStageIdx) {
      lastActiveStageIdx = activeStageIdx;
      railDots.forEach((dot, idx) => {
        dot.classList.toggle("is-active", idx <= activeStageIdx);
      });
      const stageCipher = featStages[activeStageIdx]?.querySelector("[data-cipher]");
      if (stageCipher) triggerCipherDecrypt(stageCipher);
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ============================================================================
   3. MATRIX BINARY / HEX DIGITAL RAIN CANVAS (LOWER SECTIONS)
   ============================================================================ */
function initCosmosCanvas() {
  const canvas = document.getElementById("cosmos-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const FONT_SIZE = 16;
  let columns = Math.ceil(width / FONT_SIZE);
  let drops = Array.from({ length: columns }, () => Math.random() * -40);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.ceil(width / FONT_SIZE);
    drops = Array.from({ length: columns }, () => Math.random() * -40);
  });

  const MATRIX_CHARS = "010101ABCDEF0123456789$#@%&*+<>";
  let lastRainTime = 0;

  function renderMatrixRain(now) {
    // Only render when Hero is scrolled past and throttle to ~24fps for authentic terminal cadence & tiny GPU cost
    if (!isHeroCoveringScreen && now - lastRainTime > 42) {
      lastRainTime = now;
      ctx.fillStyle = "rgba(1, 5, 3, 0.16)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `600 ${FONT_SIZE}px "JetBrains Mono", monospace`;

      for (let i = 0; i < columns; i += 2) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        ctx.fillStyle = i % 6 === 0 ? "rgba(0, 240, 255, 0.38)" : "rgba(0, 255, 102, 0.32)";
        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.85;
      }
    }

    requestAnimationFrame(renderMatrixRain);
  }

  requestAnimationFrame(renderMatrixRain);
}

/* ============================================================================
   4. LIVE NMAP / SHODAN TOPOLOGY RADAR (11 ORBITING TARGET NODES)
   ============================================================================ */
function initOrbitalStarMap() {
  const container = document.getElementById("orbital-nodes-container");
  const stage = document.getElementById("starmap-stage");
  if (!container || !stage) return;

  const radii = { 1: 95, 2: 165, 3: 235 };
  let isPaused = false;

  stage.addEventListener("mouseenter", () => {
    isPaused = true;
  });
  stage.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  const nodeElements = SPACE_PORTALS.map((portal, index) => {
    const a = document.createElement("a");
    a.href = portal.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "star-node";
    a.style.setProperty("--node-color", portal.accent);
    a.setAttribute("aria-label", `Launch ${portal.name}`);
    a.innerHTML = `
      <div class="star-node-orb">${portal.icon}</div>
      <span class="star-node-label">${portal.name}</span>
    `;
    container.appendChild(a);

    return {
      el: a,
      ring: portal.orbitRing,
      angle: (index / SPACE_PORTALS.length) * Math.PI * 2,
      speed: (0.0045 / portal.orbitRing) * (portal.orbitRing % 2 === 0 ? -1 : 1)
    };
  });

  function animateOrbit() {
    if (!isPaused && !isHeroCoveringScreen) {
      const rect = stage.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const scaleFactor = Math.min(1, rect.width / 560);

      nodeElements.forEach((n) => {
        n.angle += n.speed;
        const r = radii[n.ring] * scaleFactor;
        const x = cx + Math.cos(n.angle) * r;
        const y = cy + Math.sin(n.angle) * r;
        n.el.style.left = `${x}px`;
        n.el.style.top = `${y}px`;
      });
    }
    requestAnimationFrame(animateOrbit);
  }

  requestAnimationFrame(animateOrbit);
}

/* ============================================================================
   5. RENDER THE 11 HACKER TERMINAL PAYLOAD CARDS, FILTERS & PRICING
   ============================================================================ */
function renderPortalCards(filter = "all") {
  const grid = document.getElementById("portals-grid");
  if (!grid) return;

  const filtered =
    filter === "all"
      ? SPACE_PORTALS
      : SPACE_PORTALS.filter((item) => item.category === filter);

  grid.innerHTML = filtered
    .map(
      (portal, i) => `
      <article
        class="portal-card fm-reveal is-inview"
        style="--portal-accent: ${portal.accent}; --portal-glow: ${portal.glow}; transition-delay: ${(i % 3) * 50}ms"
        role="listitem"
      >
        <div>
          <div class="portal-visual-banner">
            <div class="portal-cyber-grid" aria-hidden="true"></div>
            <div class="portal-orbit-ring" aria-hidden="true"></div>
            <span class="portal-sector-tag">${portal.sector}</span>
            <span class="portal-live-dot" title="Online"></span>
            <div class="portal-icon-medallion" aria-hidden="true">
              ${portal.icon}
            </div>
          </div>

          <div class="portal-body">
            <span class="portal-short-tag">${portal.tag}</span>
            <h3 class="portal-title">${portal.name}</h3>
            <span class="portal-host">&gt; ${portal.cmd}</span>
          </div>
        </div>

        <div style="padding: 0 1.35rem 1.35rem;">
          <a
            href="${portal.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="portal-launch-btn"
            aria-label="Open ${portal.name} in new tab"
          >
            <span>./EXECUTE_UPLINK.SH</span>
            <span aria-hidden="true">⚡</span>
          </a>
        </div>
      </article>
    `
    )
    .join("");
}

function initFiltersAndReveals() {
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      renderPortalCards(chip.dataset.filter || "all");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.dataset.fmDelay || 0);
          setTimeout(() => {
            entry.target.classList.add("is-inview");
            const cipherEl = entry.target.querySelector("[data-cipher]");
            if (cipherEl) triggerCipherDecrypt(cipherEl);
          }, delay);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".fm-reveal").forEach((el) => observer.observe(el));

  const btns = document.querySelectorAll(".cadence-btn");
  const figures = document.querySelectorAll(".price-figure");
  const periods = document.querySelectorAll(".price-period");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cadence = btn.dataset.cadence || "monthly";
      btns.forEach((b) => b.classList.toggle("is-active", b === btn));

      figures.forEach((f) => {
        const val = f.getAttribute(`data-price-${cadence}`);
        if (val !== null) f.textContent = val;
      });
      periods.forEach((p) => {
        const val = p.getAttribute(`data-period-${cadence}`);
        if (val !== null) p.textContent = val;
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initKolpSequenceAndScroll();
  initCosmosCanvas();
  renderPortalCards("all");
  initOrbitalStarMap();
  initFiltersAndReveals();
});

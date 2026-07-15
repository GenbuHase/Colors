<template>
  <header class="topbar">
    <div class="topbar__inner">
      <span class="topbar__brand">Colors</span>
      <ThemeSwitch />
    </div>
  </header>

  <main>
    <section class="hero" aria-label="Hero">
      <div class="hero__plane" aria-hidden="true" />
      
      <div class="hero__content hero-enter" :class="{ 'is-visible': heroVisible }">
        <p class="hero__brand">Colors</p>
        <h1 class="hero__title">#F4B3C2</h1>

        <div class="hero__actions">
          <a class="btn btn--primary" href="#palette">View palette</a>
        </div>
      </div>
    </section>

    <section class="section" id="palette">
      <div class="section__inner">
        <h2>Palette</h2>

        <div class="palette-family">
          <h3>鴇 <span class="heading__token">primary</span></h3>
          <ColorScale name="primary" :notes="scaleNotes.primary" />
        </div>

        <div class="palette-family">
          <h3>青磁 <span class="heading__token">accent</span></h3>
          <ColorScale name="accent" :notes="scaleNotes.accent" />
        </div>

        <div class="palette-family">
          <h3>墨 <span class="heading__token">neutral</span></h3>
          <ColorScale name="neutral" :notes="scaleNotes.neutral" />
        </div>

        <div class="palette-family">
          <h3>状態 <span class="heading__token">semantic</span></h3>
          <div class="semantic-grid">
            <div
              v-for="key in semanticKeys"
              :key="key"
              class="semantic-card"
              :style="{
                '--sem-bg': `var(--color-${key}-bg)`,
                '--sem-fg': colors.semantic[key][500],
              }"
            >
              <strong>{{ key[0].toUpperCase() + key.slice(1) }}</strong>
              <span class="semantic-card__en">{{ key }}-500 / {{ key }}-bg</span>

              <ColorSwatch
                inline
                :token="`${key}-500`"
                :hex="colors.semantic[key][500]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--subtle" id="themes">
      <div class="section__inner">
        <h2>Theme</h2>
        <div class="theme-lead">
          <ThemeSwitch />
        </div>

        <RoleTable />

        <div class="contrast-grid">
          <div
            v-for="theme in (['light', 'dark'] as const)"
            :key="theme"
            class="contrast-panel"
            :data-theme="theme"
          >
            <h3>{{ theme === "light" ? "Light" : "Dark" }} · contrast</h3>

            <ul>
              <li v-for="pair in contrastPairs[theme]" :key="pair.label">
                <span>{{ pair.label }}</span>
                <strong>{{ formatRatio(pair.fg, pair.bg) }}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="preview">
      <div class="section__inner">
        <h2>Preview</h2>

        <div class="applied">
          <div class="applied__sample">
            <p class="applied__label">
              <code>--action-primary</code> / <code>--action-accent</code> / <code>--link</code>
            </p>
            <div class="applied__row">
              <button type="button" class="btn btn--primary">Primary button</button>
              <button type="button" class="btn btn--accent">Accent button</button>
              <a class="applied__link" href="#usage">Inline link</a>
            </div>
          </div>

          <div class="applied__sample">
            <p class="applied__label"><code>--text-primary</code></p>
            <p class="applied__body">長谷 玄武</p>
          </div>

          <div class="applied__sample">
            <p class="applied__label"><code>--text-secondary</code></p>
            <p class="applied__caption">Secondary text / caption</p>
          </div>

          <div class="applied__sample">
            <p class="applied__label">
              <code>primary-300</code> + <code>--text-inverse</code>（light では ink）
            </p>
            <div class="applied__toki-banner"><span>鴇色面のテキスト</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--subtle" id="print-set">
      <div class="section__inner">
        <h2>Print Set</h2>
        <p class="section__lead">
          名刺・印刷向けの3色です。常にLight-Themeの鴇色 / 墨色 / 青磁色となります。
        </p>

        <div class="print-set">
          <div class="print-set__chips">
            <ColorSwatch token="primary-300" :hex="printSet.toki" note="鴇色 · Primary" />
            <ColorSwatch token="neutral-900" :hex="printSet.ink" note="墨 · Text" />
            <ColorSwatch token="accent-600" :hex="printSet.celadon" note="青磁 · Accent" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="usage">
      <div class="section__inner">
        <h2>Usage</h2>

        <CodeBlock label="CSS" lang="css" :code="cssSnippet" />
        <CodeBlock label="TypeScript" lang="typescript" :code="tsSnippet" />
      </div>
    </section>
  </main>

  <SiteFooter />

  <AppToast />
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import CodeBlock from "./components/CodeBlock.vue";
  import ColorScale from "./components/ColorScale.vue";
  import ColorSwatch from "./components/ColorSwatch.vue";
  import RoleTable from "./components/RoleTable.vue";
  import ThemeSwitch from "./components/ThemeSwitch.vue";
  import AppToast from "./components/AppToast.vue";
  import SiteFooter from "./components/SiteFooter.vue";
  import { useTheme } from "./composables/useTheme.ts";
  import { formatRatio } from "./lib/contrast.ts";
  import {
    contrastPairs,
    cssSnippet,
    scaleNotes,
    semanticKeys,
    tsSnippet,
  } from "./lib/palette.ts";
  import { colors, printSet } from "./tokens/colors.ts";

  useTheme();

  const heroVisible = ref(false);

  onMounted(() => {
    requestAnimationFrame(() => {
      heroVisible.value = true;
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll(".semantic-card, .contrast-panel");
    if (reduce) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
  });
</script>

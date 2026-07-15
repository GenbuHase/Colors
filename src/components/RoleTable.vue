<script setup lang="ts">
import { useClipboard } from "../composables/useClipboard.ts";
import { roleRows, roleValue } from "../lib/palette.ts";

const { copy } = useClipboard();
</script>

<template>
  <div class="role-table-wrap">
    <table class="role-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Use</th>
          <th>Light</th>
          <th>Dark</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="[token, use, key] in roleRows" :key="token">
          <td><code>{{ token }}</code></td>
          <td>{{ use }}</td>
          <td>
            <button
              type="button"
              class="swatch-mini"
              :style="{ '--c': roleValue('light', key) }"
              :aria-label="`Copy ${roleValue('light', key)}`"
              @click="copy(roleValue('light', key), `Copied ${roleValue('light', key)}`)"
            >
              <span>{{ roleValue("light", key) }}</span>
            </button>
          </td>
          <td>
            <button
              type="button"
              class="swatch-mini"
              :style="{ '--c': roleValue('dark', key) }"
              :aria-label="`Copy ${roleValue('dark', key)}`"
              @click="copy(roleValue('dark', key), `Copied ${roleValue('dark', key)}`)"
            >
              <span>{{ roleValue("dark", key) }}</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

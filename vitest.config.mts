import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true, // Mengaktifkan global test functions (describe, it, etc.)
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], // Pola file yang akan diuji
    exclude: ["node_modules/", "dist/", "coverage/"], // File/direktori yang dikecualikan dari pengujian
    environment: "node", // Lingkungan pengujian (node, jsdom, happy-dom, etc.)
    setupFiles: [], // File konfigurasi tambahan yang akan dimuat sebelum pengujian
    clearMocks: true, // Membersihkan mock/spy setelah setiap tes
    coverage: {
      enabled: false, // Mengaktifkan pengukuran coverage
      provider: "istanbul", // Provider coverage yang digunakan (istanbul, c8, etc.)
      reporter: "json" // Format laporan coverage
    },
    restoreMocks: true, // Mengembalikan mock/spy ke state awal setelah tes
    mockReset: true, // Reset mock/spy ke state awal setelah tes
    maxConcurrency: 5, // Jumlah maksimal konkurensi yang digunakan
    silent: false, // Menyembunyikan log output
    watch: true, // Mengaktifkan mode watch
    logHeapUsage: true, // Mencatat penggunaan memori
    testTimeout: 0, // Batas waktu tes (dalam millisecond)
    hookTimeout: 10000, // Batas waktu hook (dalam millisecond)
    testNamePattern: "" // Filter tes berdasarkan nama
  }
})

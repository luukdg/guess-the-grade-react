export async function forceHardRefresh() {
  // Prevent infinite loop
  if (sessionStorage.getItem("forceReloaded")) return

  sessionStorage.setItem("forceReloaded", "true")

  // 1. Clear all caches
  if ("caches" in window) {
    const names = await caches.keys()
    await Promise.all(names.map((name) => caches.delete(name)))
  }

  // 2. Unregister service workers
  if ("serviceWorker" in navigator) {
    const regs = await navigator.serviceWorker.getRegistrations()
    await Promise.all(regs.map((r) => r.unregister()))
    // small delay to ensure SW is fully gone
    await new Promise((res) => setTimeout(res, 100))
  }

  // 3. Reload from network
  window.location.reload()
}

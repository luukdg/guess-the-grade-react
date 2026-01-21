export class LocalStorageAdapter {
  key = "settings"

  async load() {
    const raw = localStorage.getItem(this.key)
    return raw ? JSON.parse(raw) : null
  }

  async save(data) {
    localStorage.setItem(this.key, JSON.stringify(data))
  }
}

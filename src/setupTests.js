import '@testing-library/jest-dom'

require('fake-indexeddb/auto')

/**
 * Local storage mock class
 */
class LocalStorageMock {
  constructor () {
    this.store = {}
  }

  clear () {
    this.store = {}
  }

  getItem (key) {
    return this.store[key] || null
  }

  setItem (key, value) {
    this.store[key] = String(value)
  }

  removeItem (key) {
    delete this.store[key]
  }
};

global.localStorage = new LocalStorageMock()

/**
 * Media element mock functions
 */
global.window.HTMLMediaElement.prototype.pause = () => {}
global.window.HTMLMediaElement.prototype.play = () => {}

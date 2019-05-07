/* global exports, createHash, getUser */

/*
 * Övning 1 - Single Responsibility Principle:
 * Klassen gör för många olika saker. Refaktorisera koden så att du har flera
 * klasser som sköter olika uppgifetr
 */

class UserSettings {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      this.settings = settings;
    }
  }

  verifyCredentials() {
    return createHash(this.user.password) === getUser(this.user.id).passwordHash;
  }
}

exports.UserSettings = UserSettings;

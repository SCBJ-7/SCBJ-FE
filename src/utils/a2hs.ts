export class a2hs {
  private static HIDE_INSTALL_A2HS = "hide_install_a2hs";

  static get hideInstallA2HS() {
    return localStorage.getItem(this.HIDE_INSTALL_A2HS);
  }

  static get isValidateHideInstallA2HS() {
    return Number(a2hs.hideInstallA2HS) > Date.now();
  }

  static setHideInstallA2HS() {
    const currentAfterWeek = String(
      new Date().setDate(new Date().getDate() + 7),
    );
    localStorage.setItem(this.HIDE_INSTALL_A2HS, currentAfterWeek);
  }

  static clear() {
    localStorage.removeItem(this.HIDE_INSTALL_A2HS);
  }
}

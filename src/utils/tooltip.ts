export class tooltip {
  private static HIDE_TOOLTIP = "hide_tooltip";

  static get hideTooltip() {
    return localStorage.getItem(this.HIDE_TOOLTIP);
  }

  static get isValidateHideTooltip() {
    return Number(tooltip.hideTooltip) > Date.now();
  }

  static setHideTooltip() {
    const currentAfterWeek = String(
      new Date().setDate(new Date().getDate() + 1),
    );
    localStorage.setItem(this.HIDE_TOOLTIP, currentAfterWeek);
  }

  static clear() {
    localStorage.removeItem(this.HIDE_TOOLTIP);
  }
}

export class a2hs {
  // localStorage 키값
  private static HIDE_INSTALL_A2HS = "hide_install_a2hs";

  // localStorage 값 가져오기
  static get hideInstallA2HS() {
    return localStorage.getItem(this.HIDE_INSTALL_A2HS);
  }

  // localStorage에 저장된 값이 현재 시간보다 큰 경우 (숨겨야 하는 경우) true 반환
  static get isValidateHideInstallA2HS() {
    return Number(a2hs.hideInstallA2HS) > Date.now();
  }

  // 일주일 후 기준으로 localStorage 값 설정
  static setHideInstallA2HS() {
    const currentAfterWeek = String(
      new Date().setDate(new Date().getDate() + 7),
    );
    localStorage.setItem(this.HIDE_INSTALL_A2HS, currentAfterWeek);
  }

  // localStorage에 설정된 값이 현재 시간보다 작을 때 (보여야 하는 경우) localStorage 값 제거
  static clear() {
    localStorage.removeItem(this.HIDE_INSTALL_A2HS);
  }
}

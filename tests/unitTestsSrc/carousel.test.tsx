// 먼저 테스트 코드 작성 -> 그 다음에 실제 코드 작성
// 1. 테스트 작성: 기능에 대한 테스트 케이스를 작성. 실패하는 테스트(Test that fails)를 만듭니다. 테스트는 구현하려는 기능의 요구사항을 반영해야 합니다.
// 2. 최소한의 코드 작성: 작성한 테스트를 통과할 수 있도록 최소한의 코드를 작성. 테스트 통과 > 코드의 품질
// 3. 리팩터링: 테스트를 통과한 후에는 코드를 정리하고 개선. 코드의 구조를 개선하고, 가독성을 높이며, 중복을 제거!

// 1. 캐러셀이 올바르게 렌더링되는지 확인하는 테스트를 먼저 작성합니다.
// 2. 캐러셀 컴포넌트를 작성하여 테스트를 통과시킵니다.
// 3. 캐러셀의 추가 기능 (예: 슬라이드 네비게이션, 드래그 앤 드롭 등)에 대한 테스트를 작성하고, 해당 기능을 구현한 후 리팩터링합니다.


import {describe, it, expect, test} from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '@components/carousel/Carousel';


describe('Carousel Component', () => {
  const dummyImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  
  test('초기 렌더링 시 이전 버튼 비활성화', () => {
    render(<Carousel images={dummyImages} />);
    const prevButton = screen.getByRole('button', { name: '뒤로가기' });
    expect(prevButton).toBeDisabled();
  });
  
  // 시나리오 2: 버튼 클릭 시 슬라이드 이동
  test('should move the slide on button click', async () => {
    render(<Carousel images={dummyImages} />);
    const nextButton = screen.getByRole('button', { name: '앞으로가기' });
    
    // Next 버튼 클릭 - 슬라이드 이동 예상
    fireEvent.click(nextButton);
    // 여기에서는 실제 슬라이드의 이동을 검증합니다 (예: 슬라이드의 위치 확인)
    
    // Prev 버튼 클릭 - 슬라이드 이동 예상
    const prevButton = screen.getByRole('button', { name: '뒤로가기' });
    fireEvent.click(prevButton);
    // 여기에서는 슬라이드가 원래 위치로 돌아갔는지 확인합니다
  });
  
  // 시나리오 3: 첫 번째 슬라이드에서 'prev' 버튼 비활성화
  it('should disable the prev button when the first slide is active', () => {
    render(<Carousel images={dummyImages} />);
    const prevButton = screen.getByRole('button', { name: '뒤로가기' });
    
    expect(prevButton).toBeDisabled();
  });
  
  // 시나리오 4: 마지막 슬라이드에서 'next' 버튼 비활성화
  it('should disable the next button when the last slide is active', () => {
    render(<Carousel images={['image1.jpg']} />);
    const nextButton = screen.getByRole('button', { name: '앞으로가기' });
    
    expect(nextButton).toBeDisabled();
  });
});

import styled from "styled-components";

export const Dim = styled.section`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
`;

export const Container = styled.section<{ $state: string }>`
  width: 100%;
  height: 262px;
  height: ${({ $state }) => $state === "agreement" && "450px"};

  background-color: ${({ theme }) => theme.color.black};
  padding: 32px 20px;
  border-radius: 28px 28px 0 0;

  position: absolute;
  bottom: 0;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ${({ theme }) => theme.typo.body3}
  margin-bottom: 8px;
`;

export const Body = styled.div<{
  $optAll: boolean;
  $optAge: boolean;
  $optPrivacy: boolean;
}>`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 32px 0;

  & div {
    display: flex;
    gap: 16px;
    color: white;
  }

  & div.all {
    display: flex;
    gap: 16px;
    color: ${({ theme }) => theme.color.white};
    color: ${({ theme, $optAll }) => $optAll && theme.color.percentBlue};
  }

  & div.privacy {
    display: flex;
    gap: 16px;
    color: ${({ theme, $optPrivacy }) =>
      $optPrivacy && theme.color.percentBlue};
  }

  & div.age {
    display: flex;
    gap: 16px;
    color: ${({ theme, $optAge }) => $optAge && theme.color.percentBlue};
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    margin: 8px;
    flex-shrink: 0;

    width: calc(100% - 40px);
    height: 40px;

    ${({ theme }) => theme.typo.button4}
    color: white;

    background-color: ${({ theme }) => theme.color.percentOrange};
    border-radius: 12px;
    transition: 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.color.darkOrange};
    }
  }

  & button.cancel {
    background-color: ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.percentOrange};
    color: ${({ theme }) => theme.color.percentOrange};

    &:hover {
      background-color: ${({ theme }) => theme.color.greyScale1};
    }
  }
`;

export const PostButtons = styled(Buttons)<{ $color: boolean }>`
  & button.post {
    background-color: ${({ $color, theme }) =>
      $color ? theme.color.percentOrange : theme.color.greyScale4};
  }
`;

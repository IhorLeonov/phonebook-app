import styled from 'styled-components';
import { ButtonSubmit } from 'components/contactForm/ContactForm.styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const Button = styled(ButtonSubmit)`
  margin-top: 0;
`;
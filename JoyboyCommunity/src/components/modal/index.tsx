import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Portal} from 'react-native-portalize';
import Line from '../../../assets/svgs/svgComponents/Line';
import {
  Overlay,
  ModalContainer,
  Title,
  IconContainer,
  Content,
  Container,
  FirstButton,
  FirstButtonText,
  SecondButtonText,
  SecondButton,
} from './styled';

interface CustomModalProps {
  name: string;
  buttonText1: string;
  buttonText2: string;
  icon: React.ReactNode;
  description: string;
  visible: boolean;
  onClose: () => void;
  color?: string;
}
const Modal: React.FC<CustomModalProps> = ({
  name,
  buttonText1,
  buttonText2,
  icon,
  description,
  visible,
  onClose,
  color,
}) => {
  if (!visible) return null;
  return (
    <Portal>
      <Overlay>
        <ModalContainer>
          <Container>
            <Line />
            <IconContainer>{icon}</IconContainer>
            <Title>{name}</Title>
            <Content>{description}</Content>
          </Container>
          <Container>
            <FirstButton color={color} onPress={onClose}>
              <FirstButtonText>{buttonText1}</FirstButtonText>
            </FirstButton>
            <SecondButton onPress={onClose}>
              <SecondButtonText>{buttonText2}</SecondButtonText>
            </SecondButton>
          </Container>
        </ModalContainer>
      </Overlay>
    </Portal>
  );
};

export default Modal;

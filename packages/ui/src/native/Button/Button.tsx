import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../@Interface/Style";

export interface ButtonProps {

  /**
   * Title of the button
   */
  title: string;

  /**
   * Color of the button
   */
  color?: string;

  /**
   * Text color of the button
   */
  textColor?: string;

  /**
   * Style of the button
   */
  style?: object;
  /**
   * variant: 'default' | 'square' | 'rounded' | 'light' | 'outline'  
   */ 
  variant?: 'default' | 'square' | 'rounded' | 'light' | 'outline';
  /**
   * Is button full width
   */
  fullWidth?: boolean;
  /**
   * Button on press event
   */
  onPress?: () => void;
}

export const Button = (props:ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onPress && props.onPress()}
      style={[
        {
          ...props.style,
          backgroundColor: props.color ? props.color : COLORS.primary,
          paddingHorizontal: 18,
          paddingVertical: 12,
          alignItems: "center",
        },
      ]}
    >
      <Text
        style={[
          { ...FONTS.h6, color:props.textColor ? props.textColor: COLORS.white }
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps ={
  title:'Button',
  color:COLORS.primary,
  textColor:COLORS.white,
  variant:'default',
}
export default Button;

import React from "react"
import { Text, View } from "react-native"

interface IProps {
  text: string
  center?: boolean
}

const InputErrorText: React.FC<IProps> = ({ text, center }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "400",

          color: "rgba(146, 22, 45, 0.92)",
          textAlign: center ? "center" : "left",
        }}
      >
        {text}
      </Text>
    </View>
  )
}

export default InputErrorText

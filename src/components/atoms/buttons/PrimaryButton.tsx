import React, { ReactNode } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"

interface IProps {
  children: ReactNode
  onPress: () => void
  outlined?: boolean
  icon?: ReactNode
  disabled?: boolean
  small?: boolean
}

const PrimaryButton: React.FC<IProps> = ({
  children,
  onPress,
  outlined,
  icon,
  disabled,
  small,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#2ca7f3", "#3d4be7"]}
        style={{
          width: "100%",
          paddingVertical: small ? 6 : 10,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon && <View style={{ marginRight: 5 }}>{icon}</View>}
        <Text
          style={{
            color: outlined ? "#2CB67D" : "#FFFFFF",

            fontWeight: "600",
            fontSize: 20,
          }}
        >
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default PrimaryButton

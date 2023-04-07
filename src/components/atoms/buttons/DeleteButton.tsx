import React, { ReactNode } from "react"
import { Text, TouchableOpacity, View } from "react-native"

interface IProps {
  children: ReactNode
  onPress: () => void
  icon?: ReactNode
  small?: boolean
}

const DeleteButton: React.FC<IProps> = ({ children, onPress, icon, small }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        paddingVertical: small ? 4 : 9,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#BA2B17",
      }}
    >
      {icon && <View style={{ marginRight: 5 }}>{icon}</View>}
      <Text
        style={{
          color: "#BA2B17",

          fontWeight: "600",
          fontSize: 20,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default DeleteButton

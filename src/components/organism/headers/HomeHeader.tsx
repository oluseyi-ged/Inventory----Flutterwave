import React from "react"
import { TouchableOpacity, View } from "react-native"
import { ArrowLeftOnRectangleIcon } from "react-native-heroicons/outline"
import { UserCircleIcon } from "react-native-heroicons/solid"
import { homeStyles as styles } from "../../../styles/home/homeStyles"

interface IProps {
  logoutUser: () => void
}

const HomeHeader: React.FC<IProps> = ({ logoutUser }) => {
  return (
    <View style={styles.homeHeaderContainer}>
      <TouchableOpacity>
        <UserCircleIcon color="#2E3A59" size={35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={logoutUser}>
        <ArrowLeftOnRectangleIcon color="#2E3A59" size={35} />
      </TouchableOpacity>
    </View>
  )
}

export default HomeHeader

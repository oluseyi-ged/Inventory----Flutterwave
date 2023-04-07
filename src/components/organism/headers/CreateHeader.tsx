import React from "react"
import { TouchableOpacity, View } from "react-native"
import { ArrowLeftIcon } from "react-native-heroicons/outline"
import { homeStyles as styles } from "../../../styles/home/homeStyles"

interface IProps {
  goBack: () => void
}

const CreateHeader: React.FC<IProps> = ({ goBack }) => {
  return (
    <View style={styles.homeHeaderContainer}>
      <TouchableOpacity onPress={goBack}>
        <ArrowLeftIcon color="#2E3A59" size={30} />
      </TouchableOpacity>
    </View>
  )
}

export default CreateHeader

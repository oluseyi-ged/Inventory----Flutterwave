import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { TableCellsIcon } from "react-native-heroicons/outline"
import LinearGradient from "react-native-linear-gradient"
import { homeStyles as styles } from "../../../styles/home/homeStyles"
import { IInventory } from "../../../types/details"
import { toCurrency } from "../../../utils/formatter"

interface IProps
  extends Omit<IInventory, "description" | "userId" | "inventoryId"> {
  onPress: () => void
}

const InventoryCard: React.FC<IProps> = ({
  name,
  price,
  totalStock,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.cardWrapper, flex: 1 }}>
        <View
          style={{ flexDirection: "row", alignItems: "flex-start", flex: 6 }}
        >
          <LinearGradient
            colors={["#9C2CF3", "#3A49F9"]}
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TableCellsIcon size={25} color="#FFF" />
          </LinearGradient>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.boldText}>{name}</Text>
            <Text style={styles.lightText}>{totalStock}</Text>
          </View>
        </View>
        <View style={{ flex: 4, alignItems: "flex-end" }}>
          <Text style={styles.priceText}>{toCurrency(price)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default InventoryCard

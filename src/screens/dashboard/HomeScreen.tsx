import React from "react"
import { FlatList, Text, View } from "react-native"
import AddIconButton from "../../components/atoms/buttons/AddIconButton"
import InventoryCard from "../../components/molecules/cards/InventoryCard"
import CustomModal from "../../components/molecules/modals/CustomModal"
import HomeHeader from "../../components/organism/headers/HomeHeader"
import { useGlobalContext } from "../../contexts/user"
import { useHome } from "../../hooks/home/useHome"
import { useUserInventories } from "../../hooks/utility/utility"
import { homeStyles as styles } from "../../styles/home/homeStyles"

const HomeScreen = () => {
  const { navigate, logoutOpen, setLogoutOpen, logoutUser, navigateToEdit } =
    useHome()
  const { inventories, email, userId } = useGlobalContext()
  const data = useUserInventories(userId)

  return (
    <View style={styles.container}>
      <View>
        <HomeHeader logoutUser={() => setLogoutOpen(true)} />
      </View>
      <View style={{ paddingVertical: 20 }}>
        <Text style={styles.headerText}>Hi {email?.split("@")[0]}</Text>
      </View>

      <View>
        {data.length === 0 && (
          <Text style={styles.noText}>You have no inventories</Text>
        )}
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item?.inventoryId}
        renderItem={(item) => (
          <InventoryCard
            key={item?.index}
            name={item?.item?.name}
            price={item?.item?.price}
            totalStock={item?.item?.totalStock}
            onPress={() => navigateToEdit(item?.item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <AddIconButton onPress={() => navigate("CreateInventory")} />
      <View style={{ marginTop: 50 }} />
      <CustomModal
        open={logoutOpen}
        setOpen={setLogoutOpen}
        onPressBtn={logoutUser}
        closeModal={() => setLogoutOpen(false)}
        message="Are you sure you want to logout?"
      />
    </View>
  )
}

export default HomeScreen

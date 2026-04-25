import { colors } from "@/constants";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface FeedItemProps {}

function FeedItem({}: FeedItemProps) {
  const isLiked = true;
  return (
    <View style={Styles.container}>
      <View style={Styles.contentContainer}>
        <Text style={Styles.title}>Post Title</Text>
        <Text style={Styles.description}>Post Content</Text>
      </View>
      <View style={Styles.menuContainer}>
        <Pressable style={Styles.menu}>
          <Octicons
            name={isLiked ? "heart-fill" : "heart"}
            size={16}
            color={isLiked ? colors.ORANGE_600 : colors.BLACK}
          />
          <Text style={isLiked ? Styles.activeMenuText : Styles.menuText}>
            1
          </Text>
        </Pressable>
        <Pressable style={Styles.menu}>
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={16}
            color={colors.BLACK}
          />
          <Text style={Styles.menuText}>1</Text>
        </Pressable>
        <Pressable style={Styles.menu}>
          <Ionicons name="eye-outline" size={16} color={colors.BLACK} />
          <Text style={Styles.menuText}>1</Text>
        </Pressable>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: colors.BLACK,
    fontWeight: "600",
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: colors.BLACK,
    marginBottom: 14,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopColor: colors.GRAY_300,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    width: "33%",
    gap: 4,
  },
  menuText: {
    fontSize: 14,
    color: colors.GRAY_700,
  },
  activeMenuText: {
    fontWeight: "500",
    color: colors.ORANGE_600,
  },
});
export default FeedItem;

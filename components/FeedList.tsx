import { colors } from "@/constants";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import FeedItem from "./FeedItem";

const dummyData = [
  {
    id: 1,
    userId: 1,
    title: "dummy Post",
    description:
      "dummy post content. dummy post content. dummy post content. dummy post content. dummy post content. dummy post content. dummy post content. dummy post content.",
    createdAt: "2026-04-27",
    author: {
      id: 1,
      nickname: "nickname",
      imageUri: "",
      createdAt: "1시간 전",
    },
    imageUrls: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 2,
    userId: 1,
    title: "dummy Post",
    description:
      "dummy post content. dummy post content. dummy post content. dummy post content. dummy post content. dummy post content. dummy post content. dummy post content.",
    createdAt: "2026-04-27",
    author: {
      id: 1,
      nickname: "nickname",
      imageUri: "",
      createdAt: "2시간 전",
    },
    imageUrls: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
];

function FeedList() {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={Styles.contentcontainer}
    />
  );
}
const Styles = StyleSheet.create({
  contentcontainer: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});
export default FeedList;

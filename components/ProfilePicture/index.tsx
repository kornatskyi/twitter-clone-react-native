import React from "react";
import { Image } from "react-native";
import { View, Text } from "react-native";

export type ProfilePictureProps = {
  image?: string;
  size?: number;
};

const ProfilePicture = ({ image, size = 50 }: ProfilePictureProps) => (
  <Image
    source={{
      uri:
        image ||
        null,
    }}
    style={{
      width: size,
      height: size,
      borderRadius: size,
    }}
  />
);

export default ProfilePicture;

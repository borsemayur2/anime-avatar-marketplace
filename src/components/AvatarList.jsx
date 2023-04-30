import { List } from "antd";
import AvatarItem from "./AvatarItem";
import AvatarDetails from "./AvatarDetails";
import { useState } from "react";

const imageNames = [
  "VRC image V(F).png",
  "VRC image U(F).png",
  "VRC image I(F).png",
  "VRC image Q(M).png",
  "VRC image O(F).png",
  "VRC image M(F).png",
  "VRC image H(F).png",
  "VRC image F(F).png",
  "VRC image G(F).png",
  "VRC image E(M).png",
  "VRC image J(M).png",
  "VRC image W(F).png",
  "VRC image N(F).png",
  "VRC image K(M).png",
  "VRC image S(F).png",
  "VRC image A(F).png",
  "VRC image B(F).png",
  "VRC image X(F).png",
  "VRC image P(F).png",
  "VRC image R(F).png",
  "VRC image T(F).png",
  "VRC image D(F).png",
  "VRC image C(M).png",
  "VRC image L(F).png",
];

const avatars = imageNames.map((imageName, index) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return {
    title: `Avatar${index + 1}`,
    price: getRandomInt(9, 999),
    rating: getRandomInt(0, 5),
    likes: getRandomInt(0, 9999),
    creator: `creator${index + 1}`,
    platform: ["PC", ""],
    description: "auto upload service. Usable in 24 hours",
    imageName,
  };
});

function AvatarList() {
  const [selectedAvatar, setSelectedAvatar] = useState();
  return (
    <>
      {selectedAvatar ? (
        <AvatarDetails
          selectedAvatar={selectedAvatar}
          setSelectedAvatar={setSelectedAvatar}
        />
      ) : (
        <List
          style={{ padding: "10px 0px" }}
          grid={{ gutter: 12 }}
          dataSource={avatars}
          renderItem={(avatar) => (
            <List.Item>
              <AvatarItem
                avatar={avatar}
                selectedAvatar={selectedAvatar}
                setSelectedAvatar={setSelectedAvatar}
              />
            </List.Item>
          )}
        />
      )}
    </>
  );
}

export default AvatarList;

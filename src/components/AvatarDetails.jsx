import { Button, Image, Rate } from "antd";
import React from "react";
import {
  ArrowLeftOutlined,
  HeartFilled,
  LikeFilled,
  ShoppingCartOutlined,
  ShoppingFilled,
} from "@ant-design/icons";

function AvatarDetails({ selectedAvatar, setSelectedAvatar }) {
  console.log("selectedAvatar", selectedAvatar);
  return (
    <div>
      <ArrowLeftOutlined
        allowFullScreen={false}
        onClick={() => setSelectedAvatar(null)}
      />
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: 20 }}>
          <Image
            height={500}
            width={500}
            src={`public/avatarImages/${selectedAvatar.imageName}`}
            title={selectedAvatar.title}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0 10px",
            }}
          >
            <h1>{selectedAvatar.title}</h1>
            <HeartFilled
              style={{ color: "pink", marginTop: 24, fontSize: 24 }}
              key="favorite-yes"
              // onClick={() => onClickFavorite(user.id)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: 16,
            }}
          >
            <Rate
              // style={{ fontSize: 24 }}
              disabled
              defaultValue={selectedAvatar.rating}
            />
            {/* <span style={{ marginLeft: 10 }}> {avatar.rating}</span> */}
            <p style={{ display: "flex", marginTop: -10, marginBottom: -10 }}>
              <p>{selectedAvatar.likes}</p>
              <p>
                {"  "}
                <LikeFilled style={{ color: "lightblue" }} />{" "}
              </p>
            </p>
          </div>
          <div style={{ marginTop: 20 }}>
            <Button style={{ marginRight: 20 }}>
              <ShoppingCartOutlined key="edit" title="Add to cart" />
              Add to cart
            </Button>
            <Button type="primary">
              <ShoppingFilled
                key="delete"
                title="Buy now"

                // onClick={() => onClickDelete(user.id)}
              />
              Buy now
            </Button>
          </div>
        </div>
        <div
          style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}
        >
          <p>{selectedAvatar.description}</p>
        </div>
      </div>
    </div>
  );
}

export default AvatarDetails;

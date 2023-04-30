import {
  ShoppingCartOutlined,
  ShoppingFilled,
  LikeFilled,
  HeartFilled,
  AppleFilled,
} from "@ant-design/icons";
import { Button, Card, Rate } from "antd";

function AvatarItem({ avatar, selectedAvatar, setSelectedAvatar }) {
  console.log("avatar", setSelectedAvatar, selectedAvatar);
  return (
    <>
      <Card
        onClick={() => setSelectedAvatar(avatar)}
        style={{ width: 300 }}
        cover={
          <img
            height={250}
            width={250}
            src={`public/avatarImages/${avatar.imageName}`}
          />
        }
        actions={[
          <Button key="addToCart">
            <ShoppingCartOutlined key="edit" title="Add to cart" />
            Add to cart
          </Button>,
          <Button key="buyNow" type="primary">
            <ShoppingFilled key="delete" title="Buy now" />
            Buy now
          </Button>,
        ]}
      >
        <Card.Meta
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: -20,
                marginBottom: -18,
              }}
            >
              <p>{avatar.title}</p>
              <HeartFilled
                style={{ color: "pink", marginTop: 24 }}
                key="favorite-yes"
              />
            </div>
          }
          description={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: 16,
                }}
              >
                <Rate disabled defaultValue={avatar.rating} />
                <p
                  style={{ display: "flex", marginTop: -10, marginBottom: -10 }}
                >
                  <p>{avatar.likes}</p>
                  <p>
                    {"  "}
                    <LikeFilled style={{ color: "lightblue" }} />{" "}
                  </p>
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 20,
                  alignItems: "center",
                }}
              >
                <p style={{ margin: 0, flex: 1 }}>${avatar.price}</p>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <AppleFilled />
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                laborum perspiciatis corrupti, nulla autem quos sapiente ea
                magni rerum saepe, eveniet sit maiores, soluta aspernatur
                doloribus itaque in hic vel?
              </p>
            </div>
          }
        />
      </Card>
    </>
  );
}

export default AvatarItem;

import React, { Component } from "react";
import { Text, View, ImageBackground } from "react-native";
import { Content, Item, Input, Icon } from "native-base";

class Home extends Component {
  state = {};
  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/main-background.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.4 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 50,
                paddingTop: "10%",
                fontFamily: "NotoSerif-Bold",
                color: "#d05931"
              }}
            >
              YUMY
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontFamily: "Lato-Light",
                color: "#874e4d"
              }}
            >
              The Complete Best Cooking
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontFamily: "Lato-Light",
                color: "#874e4d"
              }}
            >
              Application
            </Text>
            <Content
              style={{
                paddingTop: "10%",
                paddingLeft: "5%",
                paddingRight: "5%"
              }}
            >
              <Item
                rounded
                style={{
                  backgroundColor: "#fff"
                }}
              >
                <Input
                  placeholder="Find A Recipe"
                  style={{
                    textAlign: "center",
                    fontFamily: "NotoSerif-Bold",
                    fontSize: 16
                  }}
                />
              </Item>
            </Content>
          </View>
          <View style={{ flex: 0.6 }}>
            <Content>
              <View
                style={{
                  flexDirection: "row",
                  height: 150,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 10
                }}
              >
                <View style={{ flex: 0.5, paddingRight: 7.5 }}>
                  <ImageBackground
                    source={require("../../assets/images/art.png")}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
                <View style={{ flex: 0.5, paddingLeft: 7.5 }}>
                  <Content
                    style={{ backgroundColor: "red", borderRadius: 5 }}
                  />
                </View>
              </View>
            </Content>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Home;

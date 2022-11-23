import { StyleSheet } from "react-native";
import React,{useState} from "react";
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { RectButton } from "react-native-gesture-handler";
import Swipe from "./Swipe";
function Swipping({ users, index, handleLike, handlePass, swipesRef }) {

  const [willLike, setWillLike] = useState(false)
  const [willPass, setWillPass] = useState(false)
  const renderLeftActions = () => {
    return (
      <RectButton style={styles.container}>
        <Swipe user={users[index + 1]}></Swipe>
      </RectButton>
    );
  };
  const renderRightActions = () => {
    return (
      <RectButton style={styles.container}>
        <Swipe user={users[index + 1]}></Swipe>
      </RectButton>
    );
  };

  return (
    <Swipeable
      ref={swipesRef}
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={() => {
        setWillLike(false)
        handleLike()
      }}
      onSwipeableRightOpen={() => {
        setWillPass(false)
        handlePass()
      }}
      onSwipeableLeftWillOpen={() => setWillLike(true)}
      onSwipeableRightWillOpen={() => setWillPass(true)}
    >
      <Swipe user={users[index]} willLike={willLike} willPass={willPass}></Swipe>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.forwardRef((props, ref) => <Swipping swipesRef={ref} {...props}></Swipping>)
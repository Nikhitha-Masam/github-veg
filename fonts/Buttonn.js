import { Pressable, StyleSheet, Text, View } from 'react-native';

function Buttonn({ children, onPress }) {
  return (
    <View  >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View  >
          <Text  >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Buttonn;

const styles = StyleSheet.create({
  
  pressed: {
    opacity: 0.75,
    background: '#D89B00'

     
  },
});
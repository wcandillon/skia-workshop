import { View,  useWindowDimensions } from 'react-native';
import { Canvas, useImage, Image } from '@shopify/react-native-skia';
import { Stack } from 'expo-router';

export default function HelloPage() {
  const image = useImage(require('@/assets/images/zurich.jpg'));
  const {width, height} = useWindowDimensions();
  if (!image) {
    return null;
  }
  return (
    <View style={{ flex: 1}}>
      <Stack.Screen options={{ title: '🎨 Draw' }} />
      <Canvas style={{ flex: 1 }}>
        <Image image={image} x={0} y={0} width={width} height={height} fit="cover" />
      </Canvas>
    </View>
  );
}

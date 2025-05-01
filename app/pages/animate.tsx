import { View, useWindowDimensions } from 'react-native';
import {
  Canvas,
  useImage,
  Image,
  Skia,
  rect,
  Group,
  fitbox,
  LinearGradient,
  Path,
  Blur,
  Shadow,
} from '@shopify/react-native-skia';
import { Stack } from 'expo-router';
import { useDerivedValue, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { helloPath } from '@/components/Workshop';



const path = helloPath;
// Animate a path: https://shopify.github.io/react-native-skia/docs/shapes/path/#trim
// We have draw a path and we want to animate it. 
// We can use the start/end property to animate the path.
// Create a progress value with Reanimated and use it to animate the start/end path property.
// Can you think of other properties to animate?

interface HelloStickerProps { }

export const HelloSticker = ({ }: HelloStickerProps) => {
  return (
    <Group transform={[{ translateX: 50 }, { translateY: 100 }]}>
      <Group>
        <LinearGradient
          start={path.getPoint(0)}
          end={path.getLastPt()}
          colors={['#3FCEBC', '#3CBCEB', '#5F96E7', '#816FE3', '#9F5EE2']}
        />
        <Path
          path={path}
          color="white"
          style="stroke"
          strokeWidth={54}
          strokeCap="round"
          strokeJoin="round"
        >
          <Shadow dx={4} dy={4} blur={4} color="rgba(0, 0, 0, 0.5)" />
        </Path>
        <Path
          path={path}
          strokeWidth={20}
          style="stroke"
          strokeCap="round"
          strokeJoin="round"
        ></Path>
      </Group>
    </Group>
  );
};

export default function AnimatePage() {
  const image = useImage(require('@/assets/images/zurich.jpg'));
  const { width, height } = useWindowDimensions();
  if (!image) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: '🎨 Draw' }} />
      <Canvas style={{ flex: 1 }}>
        <Image image={image} x={0} y={0} width={width} height={height} fit="cover" />
        <HelloSticker />
      </Canvas>
    </View>
  );
}

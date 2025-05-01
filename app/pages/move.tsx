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
  processTransform3d,
  Matrix4,
  multiply4,
  translate,
  convertToColumnMajor,
} from '@shopify/react-native-skia';
import { Stack } from 'expo-router';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { helloPath } from '@/components/Workshop';

const path = helloPath;

// Gesture in Skia: https://shopify.github.io/react-native-skia/docs/animations/gestures
// You can wrap the canvas to move it around.
// But it is more interesting to create an overlay to track gestures on specific elements of the canvas as described in https://shopify.github.io/react-native-skia/docs/animations/gestures/#element-tracking

interface HelloStickerProps {
}

export const HelloSticker = ({ }: HelloStickerProps) => {
  return (
    <Group>
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

interface HelloGestureProps {
  dimensions: { x: number; y: number; width: number; height: number };
}


export default function AnimatePage() {
  const matrix = useSharedValue(Matrix4());
  const image = useImage(require('@/assets/images/zurich.jpg'));
  const { width, height } = useWindowDimensions();
  if (!image) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Stack.Screen options={{ title: '🎨 Draw' }} />
        <Canvas style={{ flex: 1 }}>
          <Image image={image} x={0} y={0} width={width} height={height} fit="cover" />
          <HelloSticker />
        </Canvas>
      </View>
    </GestureHandlerRootView>
  );
}

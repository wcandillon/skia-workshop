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
  Fill,
} from '@shopify/react-native-skia';
import { Stack } from 'expo-router';

// Draw a path: https://shopify.github.io/react-native-skia/docs/shapes/path/
// Option 1. draw a path from SVG string
// Get your favorite SVG path
// use Skia.Path.MakeFromSVGString to convert it to a Path
// We also provide a helper to fit the path to the screen size: https://shopify.github.io/react-native-skia/docs/group/#example
// Option 2. draw a path from a path object
// You can imperatively create a path using path commands: https://shopify.github.io/react-native-skia/docs/shapes/path/#using-path-object


// Add your favorite gradient to your path: https://shopify.github.io/react-native-skia/docs/shaders/gradients

export default function DrawPage() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: '🎨 Draw' }} />
      <Canvas style={{ flex: 1 }}>
        <Fill color="cyan" />
      </Canvas>
    </View>
  );
}

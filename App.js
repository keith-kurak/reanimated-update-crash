import { View, Button } from 'react-native';
import * as Updates from 'expo-updates';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Reload" onPress={Updates.reloadAsync} />
    </View>
  );
}
import { StyleSheet } from 'react-native';

import { Card, CardHeader, H5, Stack, Text, View } from 'tamagui';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Card elevate size="$5" bordered width={'100%'}>
        <CardHeader padded>
          <H5>In</H5>
        </CardHeader>

        <Stack margin={20}>
          <Text color="$color">$3000</Text>
        </Stack>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5e4',
    padding: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

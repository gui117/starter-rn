import UButton from '@/components/ui/UButton'
import { useState } from 'react'
import { Text, View } from 'react-native'

export default function Index() {
  const [count, setCount] = useState(0)
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl text-[red]">
        Edit app/index.tsx to edit this screen.
      </Text>

      <Text className="mt-4 text-2xl text-[blue]">
        { count }
      </Text>

      <View className="mt-4 flex-row gap-4">
        <UButton title="Increment" onPress={() => setCount(count => count + 1)} />
        <UButton title="Decrement" onPress={() => setCount(count => count - 1)} />
      </View>
    </View>
  )
}

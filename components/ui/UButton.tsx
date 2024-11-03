import type { ButtonProps } from 'react-native'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export interface BaseButtonProps extends ButtonProps {
  title: string
}

export default function UButton({ title, onPress, ...props }: BaseButtonProps) {
  return (
    <Pressable {...props} className="items-center justify-center py-2 px-5 bg-card rounded-full active:opacity-80" onPress={onPress}>
      <Text className="text-lg text-primary font-bold select-none">{title}</Text>
    </Pressable>
  )
}

import React from 'react'
import { View } from 'react-native'

import { useAnimatedTheme } from '../../hooks/use-animated-theme'
import { useReduxState } from '../../hooks/use-redux-state'
import * as selectors from '../../redux/selectors'
import { contentPadding } from '../../styles/variables'
import { AnimatedText } from '../animated/AnimatedText'
import { Avatar } from '../common/Avatar'
import { H2 } from '../common/H2'
import { Link } from '../common/Link'
import { Spacer } from '../common/Spacer'

export interface AccountSettingsProps {}

export function AccountSettings() {
  const theme = useAnimatedTheme()

  const username = useReduxState(selectors.currentUsernameSelector)

  return (
    <View>
      <H2 withMargin>Account</H2>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Avatar size={28} username={username} />
        <Spacer width={contentPadding / 2} />
        <AnimatedText style={{ color: theme.foregroundColor }}>
          Logged in as{' '}
        </AnimatedText>
        <Link href={`https://github.com/${username}`}>
          <AnimatedText
            style={{
              color: theme.foregroundColor,
              fontWeight: 'bold',
            }}
          >
            {username}
          </AnimatedText>
        </Link>
      </View>
    </View>
  )
}

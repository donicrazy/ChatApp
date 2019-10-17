import React from 'react'
import PropTypes from 'prop-types'

import { StyledTopPanel } from './styles'
import { IconButton } from '../index'
import { GridItem, P, H4 } from '../../styles'

function TopPanel(props) {
  const {
    dialog
  } = props
  let user = dialog && dialog.interlocutor && dialog.interlocutor.user;

  return (
    <StyledTopPanel>
      <GridItem
        component={H4}
        column="1"
        center
      >
        {user}
      </GridItem>
      {
        false
          ? <GridItem
            component={P}
            column="2"
            center
          >
            is typing...
          </GridItem>
          : null
      }
      <GridItem
        column="4"
        center
        component={IconButton}
        icon="more_vert"
        size="small"
      />
    </StyledTopPanel>
  )
}

TopPanel.propTypes = {
  dialog: PropTypes.shape({
    interlocutor: PropTypes.shape({
      user: PropTypes.string.isRequired,
    }).isRequired,
  }),
}

TopPanel.dp

export default TopPanel

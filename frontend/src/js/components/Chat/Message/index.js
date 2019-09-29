import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'react-final-form'

import {
  IconButton
} from '../../index'
import {
  StyledMessage,
  MessageDate,
  MessageAvatar,
  MessageText,
  EditMessageInput,
} from '../styles'
import { P, H4, GridItem } from '../../../styles'

const Message = ({message, deleteMessage, updateMessage}) => {
  const { id, sender_name, avatar, text, date } = message
  const [edited, setEdited] = React.useState(false)

  const toggleEdit = () => {
    setEdited(!edited)
  }

  const handleDelete = () => {
    deleteMessage({id})
  }

  const handleUpdate = ({text}) => {
    updateMessage({id, text})
    setEdited(false)
  }

  return (
    <StyledMessage>
      <MessageAvatar src={avatar} alt='avatar' />

      <GridItem
        component={H4}
        column="2"
        row="1/2"
        >
        {sender_name}
      </GridItem>

      <GridItem
        column="3"
        row="1"
        center
        >
        <IconButton icon="reply" size="small" />
      </GridItem>

      <GridItem
        column="4"
        row="1"
        center
        >
        <IconButton icon="edit" onClick={toggleEdit} size="small" />
      </GridItem>

      <GridItem
        column="5"
        row="1"
        center
        >
        <IconButton icon="delete" onClick={handleDelete} size="small" />
      </GridItem>

      <MessageText>
        {
          edited ?
          <Form
            onSubmit={handleUpdate}
            render={
              ({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    component={EditMessageInput}
                    name="text"
                    InputProps={{disableUnderline: true}}
                    autoFocus
                  />
                </form>
              )
            }
          />
          :
          <P>{text}</P>
        }
      </MessageText>

      <MessageDate>{date}</MessageDate>

    </StyledMessage>
  )
}

Message.propTypes = {
  deleteMessage: PropTypes.func.isRequired,
  updateMessage: PropTypes.func.isRequired,
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.number.isRequired,
    sender_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired
}

export default Message

import * as admin from 'firebase-admin'
import { type APIHandler } from './helpers/endpoint'
import { removeUndefinedProps } from 'common/util/object'

export const saveTwitchCredentials: APIHandler<'save-twitch'> = async (
  props,
  auth
) => {
  await firestore
    .doc(`private-users/${auth.uid}/twitchInfo`)
    .update(removeUndefinedProps(props.twitchInfo))
}

const firestore = admin.firestore()

/*!
 * Copyright 2023 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// SALES ENHANCER CHANGES
// export { archive, unarchive } from './archive';
// export { canMarkPlayed } from './canMarkPlayed';
// export { canMute } from './canMute';
// export { canReply } from './canReply';
// export { clear } from './clear';
export { closeChat } from './closeChat';
// export { delete } from './delete';
// export { deleteMessage } from './deleteMessage';
export { DeleteMessageReturn } from './deleteMessage';
// export { downloadMedia } from './downloadMedia';
// export { editMessage } from './editMessage';
export { find } from './find';
// export { forwardMessage } from './forwardMessage';
export { ForwardMessagesOptions } from './forwardMessage';
export { generateMessageID } from './generateMessageID';
export { get } from './get';
export { getActiveChat } from './getActiveChat';
// export { getLastSeen } from './getLastSeen';
// export { getMessageACK } from './getMessageACK';
export { getMessageById } from './getMessageById';
// export { getMessages } from './getMessages';
export { GetMessagesOptions } from './getMessages';
// export { getNotes } from './getNotes';
// export { getPlatformFromMessage } from './getPlatformFromMessage';
// export { getQuotedMsg } from './getQuotedMsg';
export { getQuotedMsgKey } from './getQuotedMsgKey';
// export { getReactions } from './getReactions';
// export { getVotes } from './getVotes';
// export { keepMessage } from './keepMessage';
export { ChatListOptions, list } from './list';
export { markIsComposing } from './markIsComposing';
export { markIsPaused } from './markIsPaused';
export { markIsRead } from './markIsRead';
export { markIsRecording } from './markIsRecording';
// export { markIsUnread } from './markIsUnread';
// export { markPlayed } from './markPlayed';
// export { mute } from './mute';
// export { openChatAt } from './openChatAt';
export { openChatBottom } from './openChatBottom';
// export { openChatFromUnread } from './openChatFromUnread';
// export { pin, unpin } from './pin';
// export { pinMsg, unpinMsg } from './pinMsg';
export { prepareLinkPreview } from './prepareLinkPreview';
export { LinkPreviewOptions } from './prepareLinkPreview';
export {
  prepareMessageButtons,
} from './prepareMessageButtons';
export {
  MessageButtonsOptions,
} from './prepareMessageButtons';
export { prepareRawMessage } from './prepareRawMessage';
// export { requestPhoneNumber } from './requestPhoneNumber';
// export { sendCatalogMessage } from './sendCatalogMessage';
// export {
//   sendChargeMessage,
// } from './sendChargeMessage';
export {
  OrderItems,
  OrderMessageOptions,
} from './sendChargeMessage';
// export {
//   sendCreatePollMessage,
// } from './sendCreatePollMessage';
export {
  PoolMessageOptions,
} from './sendCreatePollMessage';
export { sendEventMessage } from './sendEventMessage';
export {
  AudioMessageOptions,
  AutoDetectMessageOptions,
  DocumentMessageOptions,
  FileMessageOptions,
  ImageMessageOptions,
  sendFileMessage,
  StickerMessageOptions,
  VideoMessageOptions,
} from './sendFileMessage';
// export {
//   sendGroupInviteMessage,
// } from './sendGroupInviteMessage';
export {
  GroupInviteMessage,
} from './sendGroupInviteMessage';
// export { sendListMessage } from './sendListMessage';
export { ListMessageOptions } from './sendListMessage';
// export {
//   sendLocationMessage,
// } from './sendLocationMessage';
export {
  LocationMessageOptions
} from './sendLocationMessage';
// export { sendPixKeyMessage } from './sendPixKeyMessage';
export { sendRawMessage } from './sendRawMessage';
// export { sendReactionToMessage } from './sendReactionToMessage';
// export {
//   sendScheduledCallMessage,
// } from './sendScheduledCallMessage';
export {
  ScheduledCallMessageOptions,
} from './sendScheduledCallMessage';
export { sendTextMessage, TextMessageOptions } from './sendTextMessage';
// export {
//   sendVCardContactMessage,
// } from './sendVCardContactMessage';
export {
  VCardContact,
} from './sendVCardContactMessage';
// export { setChatList } from './setChatList';
// export { setInputText } from './setInputText';
// export { setNotes } from './setNotes';
// export { starMessage } from './starMessage';
export { StarMessageReturn } from './starMessage';
// export { unmute } from './unmute';

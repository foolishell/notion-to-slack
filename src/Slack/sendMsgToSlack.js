import { WebClient } from '@slack/web-api'
import { SLACK_TOKEN, SLACK_CONVERSATION_ID } from '../environment.js'

const SLACK = new WebClient(SLACK_TOKEN)

export const sendMsgToSlack = async (msg) => {
  const result = await SLACK.chat.postMessage({
    text: msg,
    channel: SLACK_CONVERSATION_ID,
    as_user: true,
  })
}

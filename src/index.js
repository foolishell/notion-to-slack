import { getHabitTracker } from './HabitTracker/getHabitTracker.js'
import { sendMsgToSlack } from './Slack/sendMsgToSlack.js'

const main = async () => {
  console.log("container starts")

  const msg = await getHabitTracker()
  console.log('Message is \n' + msg)

  sendMsgToSlack(msg)
}

main()
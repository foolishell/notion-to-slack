import { config } from "dotenv"
import { format } from "date-fns"

config()

export const NOTION_KEY = process.env.NOTION_KEY
export const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID
export const SLACK_TOKEN = process.env.SLACK_TOKEN
export const SLACK_CONVERSATION_ID=process.env.SLACK_CONVERSATION_ID

export const TODAY = format(new Date(), "yyyy-MM-dd")
// Find the official Notion API client @ https://  github.com/makenotion/notion-sdk-js/
// npm install @notionhq/client
import { Client } from "@notionhq/client";
import { NOTION_KEY, NOTION_DATABASE_ID, TODAY } from "../environment.js";

const NOTION = new Client({ auth: NOTION_KEY });

export const getHabitTracker = async () => {
  const results = await getItemsFromDatabase();
  // take final element
  const props = results.slice(-1)[0].properties;

  let msg = "";
  // take only type=select prop
  Object.keys(props).forEach((key) => {
    if (props[key].type === "select") {
      msg += `${props[key].select.name} ${key} \n`;
    }
  });

  console.log(msg);
  return msg;
};

const getItemsFromDatabase = async () => {
  try {
    const response = await NOTION.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "created_time",
        date: {
          equals: TODAY,
        },
      },
    });
    return response.results;
  } catch (error) {
    if (error.code === APIErrorCode.ObjectNotFound) {
      //
      // For example: handle by asking the user to select a different database
      //
    } else {
      // Other error handling code
      console.error(error);
    }
  }
};

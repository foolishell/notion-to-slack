# Notion to Slack Notifier

## About
The purpose of this app is to notify Slack when new database item created in Notion automaticlly.
Of course, you can use any other apps like Zapier, this app is created for more complex way.
Look Features more about it.

Plz give any idea and requests, and contribute to create more features by PR.

Free to use, Free to customize.
## Usage
```
// first time only
$ make init

// when source is changed
$ make build

// when send notification to slack
// we recommend to control by Cron or any scheduler
$ make run
```

## Features
in src dirctory
- [Habit Tracker](./src/HabitTracker)
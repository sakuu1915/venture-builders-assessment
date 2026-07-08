import { google } from "googleapis";
import path from "path";

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(process.cwd(), "credentials.json"),
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({
  version: "v3",
  auth,
});

export const createCalendarEvent = async (
  name: string,
  email: string,
  meetingAgenda: string,
) => {
  const startTime = new Date();

  // Meeting starts 5minutes after booking
  startTime.setMinutes(startTime.getMinutes() + 5);

  const endTime = new Date(startTime);

  // Meeting duration = 30 minutes
  endTime.setMinutes(endTime.getMinutes() + 30);

  const event = await calendar.events.insert({
    calendarId: "sakshihavaldar.pcimca@gmail.com",

    requestBody: {
      summary: meetingAgenda,
      description: `Meeting with ${name}\nCustomer Email: ${email}`,
      start: {
        dateTime: startTime.toISOString(),
      },
      end: {
        dateTime: endTime.toISOString(),
      },
    },
  });
  return event.data;
};

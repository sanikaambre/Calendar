import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


function Calendar() {
    const events = [
        {
          title: "Happy Mew Year for Cats Day",
          start: "2023-01-02T01:00:00",
          end: "2023-01-02T20:00:00", 
        },
        {
          title: "Pet Travel Safety Day",
          start: "2023-01-07T06:00:00",
          end: "2023-01-07T22:00:00",
        },
        {
            title: "Dress Up your Pet",
            start: "2023-01-15T05:00:00",
            end: "2023-01-15T20:00:00",
        },
        {
            title: "Change a Pet's Life Day",
            start: "2023-01-27T06:00:00",
            end: "2023-01-27T22:00:00",
        },
        {
            title: "Pet Walk Day",
            start: "2023-02-11T05:00:00",
            end: "2023-02-11T22:00:00",
        },
        {
            title: "Pet Theft Awareness Day",
            start: "2023-02-14T12:00:00",
            end: "2023-02-14T13:00:00",
        },
        {
            title: "Pet Fair",
            start: "2023-02-24T12:00:00",
            end: "2023-02-24T22:00:00",
        },
        {
            title: "Pet Fair",
            start: "2023-02-25T12:00:00",
            end: "2023-02-25T22:00:00",
        },
        {
            title: "Pet Fair",
            start: "2023-02-26T12:00:00",
            end: "2023-02-26T22:00:00",
        },
        {
            title: "Pet Adoption Event",
            start: "2023-03-11T18:00:00",
            end: "2023-03-11T22:00:00",
        },
        {
            title: "National Puppy Day",
            start: "2023-03-23T12:00:00",
            end: "2023-03-23T22:00:00",
        },
        {
            title: "Maw and Paw",
            start: "2023-03-14T18:00:00",
            end: "2023-03-14T20:00:00",
        },
        {
            title: "Pet Costume Contest",
            start: "2023-03-26T18:00:00",
            end: "2023-03-26T22:00:00",
        },
        {
            title: "National Pet Day",
            start: "2023-04-11T12:00:00",
            end: "2023-04-11T22:00:00",
        },
        {
            title: "Kids and Pets Day",
            start: "2023-04-28T12:00:00",
            end: "2023-04-28T22:00:00",
        },
        {
            title: "Pet Fair",
            start: "2023-02-24T12:00:00",
            end: "2023-02-24T22:00:00",
        },
        {
            title: "Pet Parents Day",
            start: "2023-04-08T18:00:00",
            end: "2023-04-08T22:00:00",
        },
        {
            title: "Animal Therapy Day",
            start: "2023-04-16T10:00:00",
            end: "2023-04-16T17:00:00",
        },
        {
            title: "Animal Disaster Preparedness Day",
            start: "2023-05-04T18:00:00",
            end: "2023-05-04T20:00:00",
        },
        {
            title: "Pet Nutrition Workshop",
            start: "2023-05-07T10:00:00",
            end: "2023-05-07T20:00:00",
        },
        {
            title: "Doggy Playgroup",
            start: "2023-05-16T18:00:00",
            end: "2023-05-16T20:00:00",
        },
        {
            title: "Pet Fashion Show",
            start: "2023-05-27T18:00:00",
            end: "2023-05-27T22:00:00",
        },
        {
            title: "Bird Watching Tour",
            start: "2023-05-31T10:00:00",
            end: "2023-05-31T18:00:00",
        },
        {
            title: "Dog Show",
            start: "2023-06-14T18:00:00",
            end: "2023-06-14T22:00:00",
        },
        {
            title: "Cat Show",
            start: "2023-06-23T18:00:00",
            end: "2023-06-23T22:00:00",
        },
        {
            title: "Pet Safety Seminar",
            start: "2023-06-10T18:00:00",
            end: "2023-06-10T20:00:00",
        },
        {
            title: "Pet Adoption Fair",
            start: "2023-06-25T17:00:00",
            end: "2023-06-25T20:00:00",
        },
        {
            title: "Pet Walk",
            start: "2023-07-07T17:00:00",
            end: "2023-07-07T20:00:00",
        },
        {
            title: "Pet Photography Workshop",
            start: "2023-07-12T15:00:00",
            end: "2023-07-12T20:00:00",
        },
        {
            title: "Animal Exhibition",
            start: "2023-07-17T15:00:00",
            end: "2023-07-17T21:00:00",
        },
        {
            title: "Pet Meetup",
            start: "2023-07-29T17:00:00",
            end: "2023-07-29T20:00:00",
        },
        {
            title: "Universal birthday for Shelter dogs",
            start: "2023-08-17T17:00:00",
            end: "2023-08-17T20:00:00",
        },
        {
            title: "International Cat Day",
            start: "2023-08-08T15:00:00",
            end: "2023-08-08T20:00:00",
        },
        {
            title: "National Dog Day",
            start: "2023-08-26T17:00:00",
            end: "2023-08-26T20:00:00",
        },
        {
            title: "Pet Safety Seminar",
            start: "2023-08-28T18:00:00",
            end: "2023-08-28T21:00:00",
        },
        {
            title: "National Wildlife Day",
            start: "2023-09-04T10:00:00",
            end: "2023-09-04T21:00:00",
        },
        {
            title: "National Pet Bird Day",
            start: "2023-09-17T17:00:00",
            end: "2023-09-17T21:00:00",
        },
        {
            title: "Remember me Thursday",
            start: "2023-09-14T18:00:00",
            end: "2023-09-14T21:00:00",
        },
        {
            title: "PetWalk",
            start: "2023-09-30T10:00:00",
            end: "2023-09-30T21:00:00",
        },
        {
            title: "World Animal's Day",
            start: "2023-10-04T17:00:00",
            end: "2023-10-04T21:00:00",
        },
        {
            title: "Bubble DayCare Day",
            start: "2023-10-14T01:00:00",
            end: "2023-10-14T20:00:00",
        },
        {
            title: "Pet Awareness Day",
            start: "2023-10-19T10:00:00",
            end: "2023-10-19T18:00:00",
        },
        {
            title: "Pie Day",
            start: "2023-10-24T01:00:00",
            end: "2023-10-24T20:00:00",
        },
        {
            title: "National Cat Day",
            start: "2023-10-29T18:00:00",
            end: "2023-10-29T20:00:00",
        },
        {
            title: "Walk in Tuesday",
            start: "2023-11-14T10:00:00",
            end: "2023-11-14T18:00:00",
        },
        {
            title: "National Camp Day",
            start: "2023-11-19T07:00:00",
            end: "2023-11-19T22:00:00",
        },
        {
            title: "Animal Exhibiton",
            start: "2023-11-10T10:00:00",
            end: "2023-11-10T21:00:00",
        },
        {
            title: "Pet Care Seminar",
            start: "2023-11-29T18:00:00",
            end: "2023-11-29T20:00:00",
        },
        {
            title: "Pet Charity Walkathon",
            start: "2023-12-03T10:00:00",
            end: "2023-12-03T17:00:00",
        },
        {
            title: "Pet Grooming ",
            start: "2023-12-16T15:00:00",
            end: "2023-12-16T20:00:00",
        },
        {
            title: "Therapy Animal Visit",
            start: "2023-12-19T10:00:00",
            end: "2023-12-19T20:00:00",
        },
        {
            title: "Zoo Day",
            start: "2023-12-02T12:00:00",
            end: "2023-12-02T18:00:00",
        },
        {
            title: "Pet Paradise",
            start: "2023-12-29T12:00:00",
            end: "2023-12-29T22:00:00",
        },
      ];
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
            start: "today prev,next", // will normally be on the left. if RTL, will be on the right
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
          }}
          height={"90vh"}
          events={events}
          eventDidMount={(info) => {
          info.el.classList.add("custom-event");
          const button = document.createElement("button");
          button.className = "btn btn-danger";
          button.textContent = "Event Info";
         

          button.addEventListener("click", () => {
            alert(`You clicked the registration button for ${info.event.title}`);
          });
          const buttonContainer = document.createElement("div");
          buttonContainer.className = "text-center"; // Center the button
          buttonContainer.appendChild(button);

          const popoverContent = document.createElement("div");
          popoverContent.appendChild(buttonContainer);
          popoverContent.innerHTML += `
        <p>It's going to be a 'purr'-fect day for pet lovers! Join us at the upcoming pet event! Don't miss out - register now to be a part of the fun.</p>
       `;

        const popover = new bootstrap.Popover(info.el, {
        title: info.event.title,
        placement: "auto",
        trigger: "manual", // Keep the popover open until manually closed
        customClass: "popoverStyle",
        content: popoverContent,
        html: true,
    });

       info.el.addEventListener("click", () => {
    popover.show();
    });

       info.el.addEventListener("mouseleave", () => {
     popover.show();
  });

    return popover;
    }}

        />
    </div>

    );
}
export default Calendar;
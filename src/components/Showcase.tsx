import EventCard from "./EventCard";
import RequestCard from "./RequestCard";
import PreviewArea from "./PreviewArea";

const Showcase = () => {
  return (
    <div className="showcase-container">
      <div>
        <div className="heading">Event</div>
        <div className="event-container">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      <div>
        <div className="heading">Approval Requests</div>
        <div className="request-container">
          <RequestCard />
          <RequestCard />
          <RequestCard />
        </div>
      </div>
      <div className="view-container">
        <PreviewArea />
      </div>
    </div>
  );
};

export default Showcase;

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CommonTable from "../CommonTable";

export const events = [
  {
    description:
      "A Bacardi event featuring a DJ party is a gathering where Bacardi drinks are served and a DJ provides the music entertainment. The DJ will play a variety of popular and upbeat tracks to get people dancing and having a good time. It's a fun, lively atmosphere where guests can enjoy delicious drinks and socialize with friends while dancing the night away.",
    end_date: "2023-02-11",
    end_time: "2000-01-01T09:06:00.000Z",
    entry_fees: 100,
    id: 1,
    max_tickets_per_event: 10,
    mode: "online",
    name: "Bacardi",
    no_of_tickets: 10,
    platform: "zoom",
    start_date: "2023-02-08",
    start_time: "2000-01-01T01:06:00.000Z",
    status: "open",
    user_id: 4,
    venue: "Pune",
  },
  {
    description:
      "The \"Rails Girls\" event in Pune is a unique opportunity for women and non-binary individuals to learn about the exciting world of Ruby on Rails programming. This event is designed to be beginner-friendly and accessible to anyone who is interested in exploring the field of software development, regardless of prior experience or background.  The event will be held in Pune, a thriving tech hub that is home to a vibrant community of developers and innovators. Attendees will have the opportunity to participate in hands-on workshops, learn from experienced instructors, and collaborate with like-minded individuals from across the city.  Rails Girls is dedicated to promoting diversity and inclusivity in the tech industry, and provides a supportive and empowering environment for individuals to develop their skills and pursue their passions. Whether you're an experienced programmer looking to broaden your horizons or a complete beginner who wants to learn about coding, Rails Girls is the perfect event for you.  So don't miss out on this exciting opportunity to learn about Ruby on Rails, network with other tech enthusiasts, and grow your skills and knowledge. Register now and join us for a fun and educational experience that will help you take your coding career to the next level!",
    end_date: "2023-02-25",
    end_time: "2000-01-01T16:00:00.000Z",
    entry_fees: 125,
    id: 6,
    max_tickets_per_event: 10,
    mode: "offline",
    name: "Rails Girls Pune",
    no_of_tickets: 100,
    platform: "Balewadi, Pune",
    start_date: "2023-03-10",
    start_time: "2000-01-01T10:00:00.000Z",
    status: "open",
    user_id: 9,
    venue: "Pune",
  },
  {
    description:
      "The \"Novel Publishing Event\" in Mumbai is an exciting opportunity for aspiring authors and literature enthusiasts to connect with top publishing professionals and industry experts. This event is an ideal platform for attendees to gain valuable insights into the world of novel publishing, learn about the latest trends and techniques, and network with other like-minded individuals.  The event is scheduled to take place in Mumbai, a vibrant city that is known for its rich cultural heritage and dynamic artistic scene. The event will feature a series of workshops, presentations, and panel discussions led by experienced publishers, editors, and literary agents, who will share their knowledge and expertise with attendees.  In addition to learning about the ins and outs of the publishing industry, attendees will also have the opportunity to meet with publishers and agents, get feedback on their work, and potentially secure a publishing deal. This is a once-in-a-lifetime chance for aspiring authors to gain valuable exposure and take their writing careers to the next level.  Whether you're an established author looking to expand your reach or a aspiring writer seeking to break into the industry, the Novel Publishing Event in Mumbai is an event that you won't want to miss. So mark your calendars and register now to be a part of this exciting literary celebration!",
    end_date: "2023-04-01",
    end_time: "2000-01-01T10:00:00.000Z",
    entry_fees: 100,
    id: 5,
    max_tickets_per_event: 4,
    mode: "offline",
    name: "Novel Publishing",
    no_of_tickets: 94,
    platform: "Bhandup, Mumbai",
    start_date: "2023-04-01",
    start_time: "2000-01-01T09:00:00.000Z",
    status: "open",
    user_id: 9,
    venue: "Mumbai",
  },
];

export const users = [
  {
    address: null,
    city: null,
    contact_no: "1234567890",
    country: null,
    created_at: "2023-02-07T06:56:07.132Z",
    dob: null,
    email: "dipak@gmail.com",
    first_name: "dipak",
    gender: null,
    id: 2,
    is_active: true,
    jti: "1275eb43-e032-458c-b3d9-6454cb1e1f1d",
    last_name: "chaudhari",
    pincode: null,
    role_id: 2,
  },
  {
    address: null,
    city: null,
    contact_no: "1234567890",
    country: null,
    created_at: "2023-02-07T06:56:33.601Z",
    dob: null,
    email: "akshay@gmail.com",
    first_name: "akshay",
    gender: null,
    id: 3,
    is_active: true,
    jti: "2fbc20e3-0cbd-4fd7-a510-aa7777e948be",
    last_name: "chaudhari",
    pincode: null,
    role_id: 1,
  },
  {
    address: null,
    city: null,
    contact_no: "9356282439",
    country: null,
    created_at: "2023-02-08T05:24:55.822Z",
    dob: null,
    email: "shub@gmail.com",
    first_name: "Johnj",
    gender: null,
    id: 4,
    is_active: true,
    jti: "e2a10c53-e425-4ac4-88c6-0b301425aa42",
    last_name: "F",
    pincode: null,
    role_id: 1,
  },
];

const eventTextElement = [
  "Name Mode Start Date Venue Status Entry Fees",
  "Bacardi online 2023-02-08 Pune open 100",
  "Rails Girls Pune offline 2023-03-10 Pune open 125",
  "Novel Publishing offline 2023-04-01 Mumbai open 100",
];

const userTextElement = [
  "Name Email Id Contact No Role Created At Is Active",
  "dipak dipak@gmail.com 1234567890 Organizer Tue,Feb,07,2023",
  "akshay akshay@gmail.com 1234567890 Registrant Tue,Feb,07,2023",
  "Johnj shub@gmail.com 9356282439 Registrant Wed,Feb,08,2023",
];

const MockCommonTable = (props: { state: boolean }) => {
  return (
    <Router>
      <CommonTable events={events} users={users} state={props.state} />
    </Router>
  );
};

describe("Common Table for Event", () => {
  it("renders event table (i.e. state=true)", () => {
    render(<MockCommonTable state={true} />);

    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });

  it("renders the columnheader", () => {
    render(<MockCommonTable state={true} />);
    const nameColumn = screen.getByRole("columnheader", { name: /Name/i });
    const modeColumn = screen.getByRole("columnheader", { name: /Mode/i });
    const startDateColumn = screen.getByRole("columnheader", {
      name: /Start Date/i,
    });
    const venueColumn = screen.getByRole("columnheader", { name: /Venue/i });
    const statusColumn = screen.getByRole("columnheader", { name: /Status/i });
    const entryFeesColumn = screen.getByRole("columnheader", {
      name: /Entry Fees/i,
    });

    expect(nameColumn).toBeInTheDocument();
    expect(modeColumn).toBeInTheDocument();
    expect(startDateColumn).toBeInTheDocument();
    expect(venueColumn).toBeInTheDocument();
    expect(statusColumn).toBeInTheDocument();
    expect(entryFeesColumn).toBeInTheDocument();
  });

  it("renders 4 rows (3 rows + header)", () => {
    render(<MockCommonTable state={true} />);

    const noOfRows = screen.getAllByRole("row");
    expect(noOfRows.length).toBe(3 + 1);
  });

  it("renders the event row", () => {
    render(<MockCommonTable state={true} />);

    for (let i = 0; i < eventTextElement.length; i++) {
      expect(
        screen.getByRole("row", {
          name: eventTextElement[i],
        })
      ).toBeInTheDocument();
    }
  });
});

describe("Common Table for User", () => {
  it("renders user table (i.e. state=false)", () => {
    render(<MockCommonTable state={false} />);

    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });

  it("renders the columnheader", () => {
    render(<MockCommonTable state={false} />);
    const nameColumn = screen.getByRole("columnheader", { name: /Name/i });
    const emailIdColumn = screen.getByRole("columnheader", {
      name: /Email Id/i,
    });
    const roleColumn = screen.getByRole("columnheader", {
      name: /Role/i,
    });
    const contactNoColumn = screen.getByRole("columnheader", {
      name: /Contact No/i,
    });
    const createdAtColumn = screen.getByRole("columnheader", {
      name: /Created At/i,
    });
    const isActiveColumn = screen.getByRole("columnheader", {
      name: /Is Active/i,
    });

    expect(nameColumn).toBeInTheDocument();
    expect(emailIdColumn).toBeInTheDocument();
    expect(roleColumn).toBeInTheDocument();
    expect(contactNoColumn).toBeInTheDocument();
    expect(createdAtColumn).toBeInTheDocument();
    expect(isActiveColumn).toBeInTheDocument();
  });

  it("renders 4 rows (3 rows + header)", () => {
    render(<MockCommonTable state={false} />);

    const noOfRows = screen.getAllByRole("row");
    expect(noOfRows.length).toBe(3 + 1);
  });

  it("renders the event row", () => {
    render(<MockCommonTable state={false} />);

    for (let i = 0; i < userTextElement.length; i++) {
      expect(
        screen.getByRole("row", {
          name: userTextElement[i],
        })
      ).toBeInTheDocument();
    }
  });

  describe("feature of table", () => {
    it("renders the 3 button (Pagination,Prev,Next)", () => {
      render(<MockCommonTable state={true} />);

      const buttonElements = screen.getAllByRole("button");
      expect(buttonElements.length).toBe(3);
    });

    it("renders the button text", () => {
      render(<MockCommonTable state={true} />);

      const paginationButtonText = screen.getByRole("button", {
        name: /Rows per page:/i,
      });
      const prevButtonText = screen.getByRole("button", {
        name: /Go to previous page/i,
      });
      const nextButtonText = screen.getByRole("button", {
        name: /Go to next page/i,
      });

      expect(paginationButtonText).toBeInTheDocument();
      expect(prevButtonText).toBeInTheDocument();
      expect(nextButtonText).toBeInTheDocument();
    });

    it("render button having attribute disabled (prev,next)", () => {
      render(<MockCommonTable state={true} />);

      const prevButtonText = screen.getByRole("button", {
        name: /Go to previous page/i,
      });
      const nextButtonText = screen.getByRole("button", {
        name: /Go to next page/i,
      });

      expect(prevButtonText).toHaveAttribute("disabled");
      expect(nextButtonText).toHaveAttribute("disabled");
    });
  });
});

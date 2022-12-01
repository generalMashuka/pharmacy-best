/* eslint-disable react/jsx-filename-extension */
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMonth: moment(),
      selectedDay: moment().startOf('day'),
      selectedMonthEvents: [],
      showEvents: false,
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.showCalendar = this.showCalendar.bind(this);
    this.goToCurrentMonthView = this.goToCurrentMonthView.bind(this);

    this.initialiseEvents();
  }

  previous() {
    const currentMonthView = this.state.selectedMonth;

    this.setState({
      selectedMonth: currentMonthView.subtract(1, 'month'),
    });
  }

  next() {
    const currentMonthView = this.state.selectedMonth;
    this.setState({
      selectedMonth: currentMonthView.add(1, 'month'),
    });
  }

  select(day) {
    this.setState({
      selectedMonth: day.date,
      selectedDay: day.date.clone(),
      showEvents: true,
    });
  }

  goToCurrentMonthView() {
    const currentMonthView = this.state.selectedMonth;
    this.setState({
      selectedMonth: moment(),
    });
  }

  showCalendar() {
    this.setState({
      selectedMonth: this.state.selectedMonth,
      selectedDay: this.state.selectedDay,
      showEvents: false,
    });
  }

  renderMonthLabel() {
    const currentMonthView = this.state.selectedMonth;
    return (
      <span className="box month-label">
        {currentMonthView.format('MMMM YYYY')}
      </span>
    );
  }

  renderDayLabel() {
    const currentSelectedDay = this.state.selectedDay;
    return (
      <span className="box month-label">
        {currentSelectedDay.format('DD MMMM YYYY')}
      </span>
    );
  }

  renderTodayLabel() {
    const currentSelectedDay = this.state.selectedDay;
    return (
      <span className="box today-label" onClick={this.goToCurrentMonthView}>
        Today
      </span>
    );
  }

  renderWeeks() {
    const currentMonthView = this.state.selectedMonth;
    const currentSelectedDay = this.state.selectedDay;
    const monthEvents = this.state.selectedMonthEvents;

    const weeks = [];
    let done = false;
    const previousCurrentNextView = currentMonthView
      .clone()
      .startOf('month')
      .subtract(1, 'd')
      .day('Monday');
    let count = 0;
    let monthIndex = previousCurrentNextView.month();

    while (!done) {
      weeks.push(
        <Week
          previousCurrentNextView={previousCurrentNextView.clone()}
          currentMonthView={currentMonthView}
          monthEvents={monthEvents}
          selected={currentSelectedDay}
          select={(day) => this.select(day)}
        />,
      );
      previousCurrentNextView.add(1, 'w');
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();
    }
    return weeks;
  }

  handleAdd() {
    const monthEvents = this.state.selectedMonthEvents;
    const currentSelectedDate = this.state.selectedDay;

    const newEvents = [];

    const eventTitle = prompt('Please enter a name for your event: ');

    switch (eventTitle) {
      case '':
        alert('Event name cannot be empty.');
        break;
      case null:
        alert('Changed your mind? You can add one later!');
        break;
      default:
        var newEvent = {
          title: eventTitle,
          date: currentSelectedDate,
          dynamic: true,
        };

        newEvents.push(newEvent);

        for (let i = 0; i < newEvents.length; i++) {
          monthEvents.push(newEvents[i]);
        }

        this.setState({
          selectedMonthEvents: monthEvents,
        });
        break;
    }
  }

  addEvent() {
    const currentSelectedDate = this.state.selectedDay;
    const isAfterDay = moment().startOf('day').subtract(1, 'd');

    if (currentSelectedDate.isAfter(isAfterDay)) {
      this.handleAdd();
    } else {
      if (confirm('Are you sure you want to add an event in the past?')) {
        this.handleAdd();
      } else {
      } // end confirm past
    } // end is in the past
  }

  removeEvent(i) {
    const monthEvents = this.state.selectedMonthEvents.slice();
    const currentSelectedDate = this.state.selectedDay;

    if (confirm('Are you sure you want to remove this event?')) {
      const index = i;

      if (index != -1) {
        monthEvents.splice(index, 1);
      } else {
        alert('No events to remove on this day!');
      }

      this.setState({
        selectedMonthEvents: monthEvents,
      });
    }
  }

  initialiseEvents() {
    const monthEvents = this.state.selectedMonthEvents;

    const allEvents = [];

    const event1 = {
      title:
        'Press the Add button and enter a name for your event. P.S you can delete me by pressing me!',
      date: moment(),
      dynamic: false,
    };

    const event2 = {
      title: 'Event 2 - Meeting',
      date: moment().startOf('day').subtract(2, 'd').add(2, 'h'),
      dynamic: false,
    };

    const event3 = {
      title: 'Event 3 - Cinema',
      date: moment().startOf('day').subtract(7, 'd').add(18, 'h'),
      dynamic: false,
    };

    const event4 = {
      title: 'Event 4 - Theater',
      date: moment().startOf('day').subtract(16, 'd').add(20, 'h'),
      dynamic: false,
    };

    const event5 = {
      title: 'Event 5 - Drinks',
      date: moment().startOf('day').subtract(2, 'd').add(12, 'h'),
      dynamic: false,
    };

    const event6 = {
      title: 'Event 6 - Diving',
      date: moment().startOf('day').subtract(2, 'd').add(13, 'h'),
      dynamic: false,
    };

    const event7 = {
      title: 'Event 7 - Tennis',
      date: moment().startOf('day').subtract(2, 'd').add(14, 'h'),
      dynamic: false,
    };

    const event8 = {
      title: 'Event 8 - Swimmming',
      date: moment().startOf('day').subtract(2, 'd').add(17, 'h'),
      dynamic: false,
    };

    const event9 = {
      title: 'Event 9 - Chilling',
      date: moment().startOf('day').subtract(2, 'd').add(16, 'h'),
      dynamic: false,
    };

    const event10 = {
      title:
        'Hello World',
      date: moment().startOf('day').add(5, 'h'),
      dynamic: false,
    };

    allEvents.push(event1);
    allEvents.push(event2);
    allEvents.push(event3);
    allEvents.push(event4);
    allEvents.push(event5);
    allEvents.push(event6);
    allEvents.push(event7);
    allEvents.push(event8);
    allEvents.push(event9);
    allEvents.push(event10);

    for (let i = 0; i < allEvents.length; i++) {
      monthEvents.push(allEvents[i]);
    }

    this.setState({
      selectedMonthEvents: monthEvents,
    });
  }

  render() {
    const currentMonthView = this.state.selectedMonth;
    const currentSelectedDay = this.state.selectedDay;
    const { showEvents } = this.state;

    if (showEvents) {
      return (
        <section className="main-calendar">
          <header className="calendar-header">
            <div className="row title-header">
              {this.renderDayLabel()}
            </div>
            <div className="row button-container">
              <i
                className="box arrow fa fa-angle-left"
                onClick={this.showCalendar}
              />
              <i
                className="box event-button fa fa-plus-square"
                onClick={this.addEvent}
              />
            </div>
          </header>
          <Events
            selectedMonth={this.state.selectedMonth}
            selectedDay={this.state.selectedDay}
            selectedMonthEvents={this.state.selectedMonthEvents}
            removeEvent={(i) => this.removeEvent(i)}
          />
        </section>
      );
    }
    return (
      <section className="main-calendar">
        <header className="calendar-header">
          <div className="row title-header">
            <i
              className="box arrow fa fa-angle-left"
              onClick={this.previous}
            />
            <div className="box header-text">
              {this.renderTodayLabel()}
              {this.renderMonthLabel()}
            </div>
            <i className="box arrow fa fa-angle-right" onClick={this.next} />
          </div>
          <DayNames />
        </header>
        <div className="days-container">
          {this.renderWeeks()}
        </div>
      </section>
    );
  }
}

class Events extends React.Component {
  render() {
    const currentMonthView = this.props.selectedMonth;
    const currentSelectedDay = this.props.selectedDay;
    const monthEvents = this.props.selectedMonthEvents;
    const { removeEvent } = this.props;

    const monthEventsRendered = monthEvents.map((event, i) => (
      <div
        key={event.title}
        className="event-container"
        onClick={() => removeEvent(i)}
      >
        <ReactCSSTransitionGroup
          component="div"
          className="animated-time"
          transitionName="time"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div className="event-time event-attribute">
            {event.date.format('HH:mm')}
          </div>
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          component="div"
          className="animated-title"
          transitionName="title"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div className="event-title event-attribute">{event.title}</div>
        </ReactCSSTransitionGroup>
      </div>
    ));

    const dayEventsRendered = [];

    for (let i = 0; i < monthEventsRendered.length; i++) {
      if (monthEvents[i].date.isSame(currentSelectedDay, 'day')) {
        dayEventsRendered.push(monthEventsRendered[i]);
      }
    }

    return (
      <div className="day-events">
        {dayEventsRendered}
      </div>
    );
  }
}

class DayNames extends React.Component {
  render() {
    return (
      <div className="row days-header">
        <span className="box day-name">Mon</span>
        <span className="box day-name">Tue</span>
        <span className="box day-name">Wed</span>
        <span className="box day-name">Thu</span>
        <span className="box day-name">Fri</span>
        <span className="box day-name">Sat</span>
        <span className="box day-name">Sun</span>
      </div>
    );
  }
}

class Week extends React.Component {
  render() {
    const days = [];
    let date = this.props.previousCurrentNextView;
    const { currentMonthView } = this.props;
    const { selected } = this.props;
    const { select } = this.props;
    const { monthEvents } = this.props;

    for (let i = 0; i < 7; i++) {
      let dayHasEvents = false;

      for (let j = 0; j < monthEvents.length; j++) {
        if (monthEvents[j].date.isSame(date, 'day')) {
          dayHasEvents = true;
        }
      }

      const day = {
        name: date.format('dd').substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === currentMonthView.month(),
        isToday: date.isSame(new Date(), 'day'),
        date,
        hasEvents: dayHasEvents,
      };

      days.push(<Day day={day} selected={selected} select={select} />);
      date = date.clone();
      date.add(1, 'd');
    }
    return (
      <div className="row week">
        {days}
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
    const { day } = this.props;
    const { selected } = this.props;
    const { select } = this.props;

    return (
      <div
        className={
          `day${day.isToday ? ' today' : ''
          }${day.isCurrentMonth ? '' : ' different-month'
          }${day.date.isSame(selected) ? ' selected' : ''
          }${day.hasEvents ? ' has-events' : ''}`
        }
        onClick={() => select(day)}
      >
        <div className="day-number">{day.number}</div>
      </div>
    );
  }
}

ReactDOM.render(<Calendar />, document.getElementById('calendar-content'));

import React from "react";
import { FormikControl } from "../../../../shared/components/FormikControl";
import { FORM_OPTIONS, MODE_OPTIONS } from "../../../../shared/constants";

export const EventDescForm = () => {
  return (
    <>
      <div className="signup-form-format">
        <FormikControl
          type="text"
          className="input-name"
          control={FORM_OPTIONS.INPUT}
          name="name"
          label="EVENT NAME"
          placeholder="Bacardi"
        />
        <FormikControl
          type="text"
          className="input-venue"
          control={FORM_OPTIONS.INPUT}
          name="venue"
          label="VENUE"
          placeholder="Pune"
        />
      </div>
      <div className="signup-form-format">
        <FormikControl
          type="textarea"
          className="input-desc"
          control={FORM_OPTIONS.INPUT}
          name="description"
          label="DESCRIPTION"
          placeholder="Use this space to write about your events. So what you are waiting for go create your exciting event !!!"
        />
      </div>
      <div className="signup-form-format">
        <FormikControl
          type="date"
          className="input-date"
          control={FORM_OPTIONS.INPUT}
          name="start_date"
          label="START DATE"
          placeholder="******"
        />
        <FormikControl
          type="date"
          className="input-date"
          control={FORM_OPTIONS.INPUT}
          name="end_date"
          label="END DATE"
          placeholder="******"
        />
      </div>
      <div className="signup-form-format">
        <FormikControl
          type="time"
          className="input-time"
          control={FORM_OPTIONS.INPUT}
          name="start_time"
          label="START TIME"
          placeholder="******"
        />
        <FormikControl
          type="time"
          className="input-time"
          control={FORM_OPTIONS.INPUT}
          name="end_time"
          label="END TIME"
          placeholder="******"
        />
      </div>
    </>
  );
};

export const EventModeForm = () => {
  return (
    <div className="signup-form-format">
      <FormikControl
        type="select"
        className="input-mode"
        control={FORM_OPTIONS.SELECT_BOX}
        name="mode"
        label="MODE OF EVENT"
        options={MODE_OPTIONS}
      />
      <FormikControl
        type="text"
        className="input-platform"
        control={FORM_OPTIONS.INPUT}
        name="platform"
        label="PLATFORM"
        placeholder=""
      />
    </div>
  );
};

export const EventTicketForm = () => {
  return (
    <>
      <FormikControl
        type="number"
        className="input-entry-fees"
        control={FORM_OPTIONS.INPUT}
        name="entry_fees"
        label="ENTRY FEES"
        placeholder=""
      />
      <div className="signup-form-format">
        <FormikControl
          type="number"
          className="input-tickets"
          control={FORM_OPTIONS.INPUT}
          name="no_of_tickets"
          label="TOTAL NUMBER OF TICKETS"
        />
        <FormikControl
          type="number"
          className="input-platform"
          control={FORM_OPTIONS.INPUT}
          name="max_tickets_per_event"
          label="MAX TICKETS (per person can take)"
        />
      </div>
    </>
  );
};

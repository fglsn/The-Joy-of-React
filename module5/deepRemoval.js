function updateState(currentState) {
  const withoutTeamMeeting = currentState.filter(
    (obj) => obj.eventId !== "team-meeting"
  );

  const teamMeetingEvent = currentState.filter(
    (obj) => obj.eventId === "team-meeting"
  )[0];

  const filteredInvitees = teamMeetingEvent.metadata.invitees.filter(
    (obj) => obj.name !== "Gerarda Nicomedes"
  );

  const { ["metadata"]: metadataValue, ...noMetadata } = teamMeetingEvent;

  const { ["invitees"]: removedInvitees, ...withoutInvitees } = metadataValue;

  const nextMeeting = {
    ...noMetadata,
    ["metadata"]: {
      ...withoutInvitees,
      ["invitees"]: filteredInvitees,
    },
  };

  return [...withoutTeamMeeting, { ...nextMeeting }];
}

export default updateState;

//https://stackoverflow.com/questions/34401098/remove-a-property-in-an-object-immutably
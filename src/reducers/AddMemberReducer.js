const AddMember = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      return state.concat([action.data]);
    case 'DELETE_MEMBER':
      return state.filter(member => member.id !== action.id);
    case 'EDIT_MEMBER':
      return state.map(member => {
        if (member.id === action.id) {
          return {
            ...member,
            name: action.data.name,
            citizenId: action.data.citizenId,
            phoneNumber: action.data.phoneNumber,
          };
        } else {
          return member;
        }
      });
    default:
      return state;
  }
};

export default AddMember;

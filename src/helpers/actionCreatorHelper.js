const createActionConstants = (name) => ({
  REQUEST: `${name}_REQUEST`,
  SUCCESS: `${name}_SUCCESS`,
  FAILED: `${name}_FAILED`,
});

export default createActionConstants;

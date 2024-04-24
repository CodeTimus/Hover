const app_config = {
    apiUrl: "http://localhost:3000",
    title: "DIGICODERS",
    themeColor: "#420074",
    themeColorLight: "#bf92ff",
    status: {
      login: {
        success: 201,
        fail: 401,
      },
    },
  
    blockData: {
      blockTypes: [
        "test_react_field",
        "test_react_date_field",
        "controls_ifelse",
        "logic_compare",
        "logic_operation",
        "controls_repeat_ext",
        "logic_operation",
        "logic_negate",
        "logic_boolean",
        "logic_null",
        "logic_ternary",
        "text_charAt",
      ]
    }
    
  };
  
  export default app_config;
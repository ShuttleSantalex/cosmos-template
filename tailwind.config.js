module.exports = {
  theme: {
    extend: {
      borderRadius: {
        none: '0px',
        small: '4px', // Used for checkboxes
        DEFAULT: '8px',
        full: '9999px',
      },
      boxShadow: {
        expandable: '1px 2px 12px 2px rgba(218, 218, 218, 0.5)',
        modal: '2px 4px 4px rgba(198, 198, 198, 0.25)',
        outline: '0 0 0 2px #00ADE5',
        header: ' 0px 4px 4px rgba(118, 118, 118, 0.25)',
      },
      colors: {
        primary: {
          1: '#0D1C46',
          2: '#174474',
        },
        secondary: {
          1: '#1A6FA0',
          2: '#00ADE5',
        },
        gray: {
          1: '#FCFCFC',
          2: '#FAFAFA',
          3: '#EFEFEF',
          4: '#E7E7E7',
          5: '#DADADA',
          6: '#D0D0D0',
          7: '#999999',
          8: '#777777',
          9: '#555555',
          10: '#333333',
        },
      },
      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        tableRow: 40,
        tableStickyHeader: 50,
        selectOptionMenu: 60,
        '70': 70,
        '80': 80,
        '90': 90,
        // Top of the application (header, navbar, footer)
        header: 100,
        // highest level of the application (overlay)
        overlay: 110,
      },
    },
  },
  plugins: [],
}

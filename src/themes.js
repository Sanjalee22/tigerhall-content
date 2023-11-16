import { extendTheme } from "@chakra-ui/react";

const tigerhallTheme = extendTheme({
    colors: {
        Teal: {
            1000: "#001315",
        },
        Grey: {
            400: '#DEDBD4',
            700: "#797670",
            800: "#4D4B46",
            900: "#383733",
        },
        White: {
            1000: '#FFFFFF'
        }
    },
    textStyles: {
        xsMontrealHeaderMedium: {
            fontFamily: 'sans-serif',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            letterSpacing: '0.18px',
        },
        mdMontrealHeaderBold: {
            fontFamily: 'sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            letterSpacing: '0.24px',
        },
        xsMontrealHeaderBold: {
            fontFamily: 'sans-serif',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            letterSpacing: '0.18px',
        }
    },
})

export default tigerhallTheme
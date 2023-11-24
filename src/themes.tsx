import { extendTheme } from "@chakra-ui/react";

const tigerhallTheme = extendTheme({
    colors: {
        Teal: {
            1000: "#001315",
        },
        Grey: {
            300: '#EDEAE1',
            400: '#DEDBD4',
            700: "#797670",
            800: "#4D4B46",
            900: "#383733",
        },
        White: {
            1000: '#FFFFFF'
        },
        Orange: {
            50: "#FFF9F6",
            400: "#FFA97A",
            600: "#FF5900"
        },
        Red: {
            300: '#F13838'
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
        },
        mdBodyMedium: {
            fontFamily: 'sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '150%',
            letterSpacing: '0.24px',
        },


        xlFormulaHeader: {
            fontFamily: 'sans-serif',
            fontSize: '64px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
        }
    },
})

export default tigerhallTheme
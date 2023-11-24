import React from 'react';
import { Box } from "@chakra-ui/react"



const ProgressBar: React.FC<ProgressBarProps> = ({progressPercent}) => {

    return(
        <Box height="2px" backgroundColor="Grey.400">
            <Box height="2px" width={`${progressPercent}%`} maxWidth="100%" background="Orange.600"></Box>
        </Box>
    )

}

export default ProgressBar
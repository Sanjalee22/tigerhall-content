import React from 'react';
import { Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import StatusContainer from '../../components/StatusContainer';
import { PAGE_NOT_FOUND } from '../../utils/constants';

const PageNotFound: React.FC = () => {
    return (
        <StatusContainer>
            <Text sx={{ textStyle: 'xlFormulaHeader' }} color="Red.300">
                {PAGE_NOT_FOUND.ERROR}
            </Text>
            <Text sx={{ textStyle: 'xsMontrealHeaderMedium' }} color="Grey.300">
                {PAGE_NOT_FOUND.MESSAGE}
            </Text>
            <Link to="/">
                <Text sx={{ textStyle: 'xsMontrealHeaderMedium' }} color="Orange.400">
                    {PAGE_NOT_FOUND.HOME_LINK}
                </Text>
            </Link>
        </StatusContainer>
    )
}

export default PageNotFound
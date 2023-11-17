import { Box, Flex} from "@chakra-ui/react"
import ContentInformation from "./ContentInformation"
import ContentStatus from "./ContentStatus"
import ProgressBar from "./ProgressBar"
import ShareControls from "./ShareControls"

const ContentCard = ({ edge }) => {

    return (
        <Box height="272px" borderRadius="8px" backgroundColor="White.1000">
            <ContentStatus uri={edge.image.uri} completionPercentage={30} durationMinutes={20} />
            <ProgressBar progressPercent={30}/>
            <Flex
                direction="column"
                padding="8px 8px 12px 8px"
                justifyContent="space-between"
                alignItems="flex-start"
                flex="1 0 0"
                alignSelf="stretch"
                height="152px"
            >
                <ContentInformation category={edge?.categories[0]?.name} 
                    name={edge?.name} 
                    expertFirstName={edge?.experts[0]?.firstName} 
                    expertLastName={edge?.experts[0]?.lastName} 
                    expertTitle={edge?.experts[0]?.title}
                />
                <ShareControls/>            
            </Flex>
        </Box>
    )
}

export default ContentCard
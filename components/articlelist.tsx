import { Box } from "@chakra-ui/react";
import ArticleCard from "./articlecard";
import ProjectCard from "./projectcard";

type Props = {
    articles: any;
};

export default function ArticleList({ articles }: Props) {
    return (
        <>
            <Box
                display="flex"
                flexDir="column"
                marginBottom="5rem"
                marginTop="2rem"
                gap="5rem"
            >
                {articles.map((article) => {
                    return <ArticleCard article={article} />;
                })}
            </Box>
        </>
    );
}

import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ResourceCard from "../Components/ResourceCard";
import resourceimg from "../Components/resourceimg.svg";

const useStyles = makeStyles({
    mainTitle: {
        fontSize: "7.5rem",
        paddingTop: "4rem",
        paddingLeft: "10%",
        paddingBottom: "0",
        marginBottom: "0",
        textAlign: "left",
        color: "#d96f66"
    },
    mainPara: {
        fontSize: "1.2rem",
        paddingLeft: "10%",
        marginTop: "0",
        textAlign: "left",
    },
    mainImg: {
        paddingTop: "1rem",
        width: "80%",
    }
});
function Resources() {
    document.title = "Resources";
    const resources = [
        {
            id: 1,
            title: "Myths and Facts",
            description: "MYTH: A menstruating woman is impure, dirty, sick, or even cursed. FACT : None of these beliefs are correct.Periods are natural and normal for women.Menstrual fluid is just a harmless mixture of blood and tissue that was not used by your body to nourish a baby in the Womb. This myth is often used as a reason to stop women, who are having their periods, from taking part in various social events.This happens especially in the case of religious events.",
            pdf: "https://drive.google.com/file/d/1TB56ntRHitMrIy3Plq2hko65pRjiPzkR/view?usp=sharing",
            video: "https://www.youtube.com/watch?v=x1zYvxL-lzc"
        },
        {
            id: 2,
            title: "Do girls and women have special nutritional requirements during their years of menstruation",
            description: "A balanced diet is essential for proper growth, development and functioning of the body and this remains true even during the years of menstruation.A balanced diet containing lots of fresh fruits and vegetables should be taken.Consuming a diet rich in Iron is extremely important.",
            pdf: "https://drive.google.com/file/d/1pQCJFxjJCf_Jv21cE-qvUtsx5lYxpyKq/view?usp=sharing",
            video: "https://www.youtube.com/watch?v=x1zYvxL-lzc"
        },
        {
            id: 3,
            title: "How to get rid of menstrual myths?",
            description: "The first step in getting rid of menstrual myths is to talk about them.It is a good idea to ask if there is any scientific basis to what you're told about your periods. Once you are aware and capable of separating a myth from scientific fact, you can also help others by giving them the right information.",
            pdf: "https://drive.google.com/file/d/1TB56ntRHitMrIy3Plq2hko65pRjiPzkR/view?usp=sharing",
            video: "https://www.youtube.com/watch?v=Exx2GOB6Y_s"
        },
        {
            id: 4,
            title: "Summary",
            description: "While menstruation is important, it is quite uncomfortable, painful and makes us go through different moods at once. While periods are important, it can still become a bearable experience if someone is there by their side to make us feel better. A lack of information about menstruation leads to damaging misconceptions and discrimination here are a few resources which we hope can help in making the concept of menstruation less stigmatised all over the world.",
            pdf: "https://drive.google.com/file/d/1pQCJFxjJCf_Jv21cE-qvUtsx5lYxpyKq/view?usp=sharing",
            video: "https://www.youtube.com/watch?v=x1zYvxL-lzc"
        }
    ]


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid direction='row' container spacing={1}>
                    <Grid container item sm={7} xs={12} spacing={0} direction="column">
                        <h1 className={useStyles().mainTitle}>Resources Section</h1>
                    </Grid>
                    <Grid container item sm={5} xs={12} spacing={0} direction="column" alignItems="center" justify="center">
                        <img className={useStyles().mainImg} src={resourceimg} alt="resource img" />
                    </Grid>
                </Grid>
            </Container>
            {resources.map((resource) => {
                return (
                    <ResourceCard
                        key={resource.id}
                        title={resource.title}
                        description={resource.description}
                        pdf={resource.pdf}
                        video={resource.video}
                    />
                );
            })}

        </React.Fragment>
    );
}

export default Resources;
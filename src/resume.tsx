// Welcome to the source code of my resume.
// The resume is entirely written declaratively using React components.
// To render the resume to a PDF, the @react-pdf/renderer library is used.
// Using Vite, we can start a development server to preview the resume in the browser and see changes in real-time.
// Thanks for reading!

import { Page, Text, View, Document } from "@react-pdf/renderer";
import { Mail } from "./components/icons/mail";
import { MapPin } from "./components/icons/map-pin";
import { Phone } from "./components/icons/phone";
import { Github } from "./components/icons/github";
import { LinkedIn } from "./components/icons/linkedin";
import { ListItem } from "./components/list-item";
import { Section, SectionHeading, SectionBody } from "./components/section";
import {
    SubSection,
    SubSectionHeading,
    SubSectionTitle,
    SubSectionDate,
    SubSectionSubtitle,
    SubSectionBody,
} from "./components/sub-section";
import { EMAIL, PHONE_NUMBER } from "./consts";
import { HeaderItem } from "./components/header-item";
import { Link } from "./components/link";

function Header() {
    return (
        <View style={{ alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Vigo Vlugt</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <HeaderItem icon={<MapPin />}>Amsterdam, NL</HeaderItem>
                <HeaderItem icon={<Mail />} src={`mailto:${EMAIL}`}>
                    {EMAIL}
                </HeaderItem>
                <HeaderItem icon={<Phone />} src={`tel:${PHONE_NUMBER}`}>
                    {PHONE_NUMBER}
                </HeaderItem>
                <HeaderItem
                    icon={<LinkedIn />}
                    src={`https://linkedin.com/in/vigovlugt/`}
                >
                    vigovlugt
                </HeaderItem>
                <HeaderItem
                    icon={<Github />}
                    src={`https://github.com/vigovlugt`}
                >
                    vigovlugt
                </HeaderItem>
            </View>
            <Text>
                Software Engineer with 6 years of experience as full-stack
                developer and Master of Science in Software Engineering. Strong
                background in web technology and analytics. Open-source
                developer with successful projects reaching thousands of monthly
                active users. Passionate and curious about everything
                technology.
                {/* Combines technical expertise with product
                development skills, proposing and leading new initiatives from
                concept to launch. */}
            </Text>
        </View>
    );
}

export function Skills() {
    return (
        <Section>
            <SectionHeading>Skills</SectionHeading>
            <SectionBody>
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontWeight: "bold", minWidth: 72 }}>
                            Languages:{" "}
                        </Text>
                        <Text style={{}}>
                            TypeScript, Go, Rust, C#, Python, SQL, HTML/CSS
                        </Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={{ fontWeight: "bold", minWidth: 72 }}>
                            Technologies:{" "}
                        </Text>
                        <Text style={{ width: "100%" }}>
                            React, Node.js, .NET, Next.js, PostgreSQL, MySQL,
                            SQLite, MongoDB, Git, Docker, CI/CD, REST, GraphQL,
                            TailwindCSS, SolidJS, Vue, Unix
                        </Text>
                    </View>
                </View>
            </SectionBody>
        </Section>
    );
}
export function Experience() {
    return (
        <Section>
            <SectionHeading>Experience</SectionHeading>
            <SectionBody>
                <SubSection>
                    <SubSectionHeading>
                        <SubSectionTitle>Full-Stack Developer</SubSectionTitle>
                        <SubSectionDate>2018 - Present</SubSectionDate>
                    </SubSectionHeading>
                    <SubSectionSubtitle>
                        Effytool (Part-Time)
                    </SubSectionSubtitle>
                    <SubSectionBody>
                        <ListItem>
                            Developed a platform for digitally signing documents
                            and integration with external API, streamlining the
                            signing process and reducing paper usage
                        </ListItem>
                        <ListItem>
                            Created a custom CMS for managing meeting records,
                            enabling clients to easily access notes and oversee
                            ongoing discussions
                        </ListItem>
                        <ListItem>
                            Led migration of large Vue frontend from Webpack 4
                            to Vite, reducing development server startup time by
                            98%, application build time by 56% and production
                            bundle size by 29%
                        </ListItem>
                        <ListItem>
                            Conceptualized, proposed, and built an analytics
                            platform empowering clients to analyze and leverage
                            their data
                        </ListItem>
                        <ListItem>
                            Engineered a custom Excel alternative that
                            integrates with existing client data to enhance data
                            management, productivity and analysis
                        </ListItem>
                        <ListItem>
                            Designed and implemented a news platform
                            facilitating communication and knowledge sharing for
                            clients
                        </ListItem>
                        <ListItem>
                            Demonstrated initiative by proposing new product
                            ideas to management and successfully leading their
                            development and launch
                        </ListItem>
                    </SubSectionBody>
                </SubSection>

                <SubSection>
                    <SubSectionHeading>
                        <SubSectionTitle>Open Source</SubSectionTitle>
                        <SubSectionDate>2016 - Present</SubSectionDate>
                    </SubSectionHeading>
                    <SubSectionBody>
                        <ListItem>
                            Developed and launched{" "}
                            <Link src="https://leagueofitems.com">
                                LeagueOfItems.com
                            </Link>
                            , an analytics platform for League of Legends
                            statistics with 150k page views per month. The
                            application uses Next.js, .NET and Github Actions
                            for CI/CD.
                        </ListItem>
                        <ListItem>
                            Developed and launched{" "}
                            <Link src="https://draftgap.com">DraftGap</Link>, a
                            site and desktop application for League of Legends
                            players with 5k monthly active users. Uses SolidJS,
                            TypeScript, TailwindCSS and NodeJS.
                        </ListItem>
                    </SubSectionBody>
                </SubSection>

                <SubSection>
                    <SubSectionHeading>
                        <SubSectionTitle>
                            E-commerce Website Manager
                        </SubSectionTitle>
                        <SubSectionDate>2017 - 2019</SubSectionDate>
                    </SubSectionHeading>
                    <SubSectionSubtitle>
                        Sako Juweliers (Part-Time)
                    </SubSectionSubtitle>
                    <SubSectionBody>
                        <ListItem>
                            Responsible for managing{" "}
                            <Link src="https://2ehandssieraden.nl">
                                2ehandssieraden.nl
                            </Link>{" "}
                            and{" "}
                            <Link src="https://sieraadbestellen.nl">
                                sieraadbestellen.nl
                            </Link>
                        </ListItem>
                        <ListItem>
                            Implemented HTML/CSS and JavaScript customizations
                            to enhance design and functionality
                        </ListItem>
                        <ListItem>
                            Automated inventory management for Lightspeed
                            webshop with a drupal backend using Python, reducing
                            manual work
                        </ListItem>
                    </SubSectionBody>
                </SubSection>
            </SectionBody>
        </Section>
    );
}

export function Education() {
    return (
        <Section>
            <SectionHeading>Education</SectionHeading>
            <SectionBody>
                <SubSection>
                    <SubSectionHeading>
                        <SubSectionTitle>
                            Master of Science in Software Engineering
                        </SubSectionTitle>
                        <SubSectionDate>2023 - 2024</SubSectionDate>
                    </SubSectionHeading>
                    <SubSectionSubtitle>
                        University of Amsterdam
                    </SubSectionSubtitle>
                    <SubSectionBody>
                        <Text>
                            For my thesis:{" "}
                            <Link src="https://scripties.uba.uva.nl/search?id=record_54873">
                                Relic: A Full-Stack Web Framework for
                                Offline-First Applications"
                            </Link>
                            , I designed and implemented a framework for
                            building offline-first web applications. The
                            framework ensures eventual consistency between
                            clients while supporting application-specific
                            conflict resolution on the server and providing
                            end-to-end type safety using TypeScript.
                        </Text>
                    </SubSectionBody>
                </SubSection>

                <SubSection>
                    <SubSectionHeading>
                        <SubSectionTitle>
                            Bachelor of Science in Computer Science
                        </SubSectionTitle>
                        <SubSectionDate>2020 - 2023</SubSectionDate>
                    </SubSectionHeading>
                    <SubSectionSubtitle>
                        University of Amsterdam
                    </SubSectionSubtitle>
                    <SubSectionBody>
                        <Text>
                            For my thesis:{" "}
                            <Link src="https://scripties.uba.uva.nl/search?id=record_53180">
                                "Effective Geospatial Data Discovery and
                                Extraction"
                            </Link>
                            , I developed a web application allowing researchers
                            to efficiently browse, select and extract geospatial
                            data from data catalogues.
                            {/* The application enables researchers to make
                                informed decisions, accelerate their research,
                                and improve decision-making processes when
                                working with geospatial data. */}
                        </Text>
                    </SubSectionBody>
                </SubSection>
            </SectionBody>
        </Section>
    );
}

export function Resume() {
    return (
        <Document
            style={{
                fontFamily: "Latin Modern Roman",
                fontSize: 10,
                lineHeight: 1.35,
            }}
        >
            <Page
                size="A4"
                style={{
                    padding: 30,
                    gap: 10,
                }}
            >
                <Header />
                <Skills />
                <Experience />
                <Education />

                {/* TODO */}
                <Link
                    style={{
                        position: "absolute",
                        bottom: 5,
                        right: 5,
                        color: "gray",
                        fontFamily: "Consolas",
                        fontSize: 8,
                        textDecoration: "underline",
                    }}
                    src="https://github.com/vigovlugt/resume/blob/main/src/resume.tsx"
                >
                    {"<Source/>"}
                </Link>
            </Page>
        </Document>
    );
}

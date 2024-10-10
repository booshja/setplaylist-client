"use client";

import {
    colors,
    IMAGE_KEYS,
    lineHeight,
    spacing,
    useCTAPhrase,
    useMedia,
} from "@/utils";
import Image from "next/image";
import { CTAButton } from "./_components";
import styled from "styled-components";
import { anybody, fontSizes, inter } from "./fonts";

export default function Home() {
    const guitaristImageProps = useMedia(IMAGE_KEYS.GUITARIST_ON_STAGE, "image");
    const djImageProps = useMedia(IMAGE_KEYS.DJ, "image");

    const ctaPhrase = useCTAPhrase();

    return (
        <main className={inter.className}>
            <HeroSectionStyled>
                <HeroTextSectionStyled>
                    <HeroHeadlineStyled className={anybody.className}>
                        Turn live moments into lifelong soundtracks
                    </HeroHeadlineStyled>
                    <HeroTextStyled>
                        Relive your favorite memories anytime by taking your favorite
                        concerts and turning them into custom Spotify playlists
                    </HeroTextStyled>
                    <CTAButton>Create a playlist now</CTAButton>
                </HeroTextSectionStyled>
                <HeroImageWrapperStyled>
                    <Image
                        {...guitaristImageProps}
                        priority
                        loading="eager"
                        fill
                        sizes="50vw"
                        style={{ objectFit: "contain" }}
                    />
                </HeroImageWrapperStyled>
            </HeroSectionStyled>
            <DetailsSectionStyled>
                <DetailsHeadlineStyled className={anybody.className}>
                    Your concert journey, curated in playlists
                </DetailsHeadlineStyled>
                <DetailsTextStyled>
                    Whether you were there or just wish you were, immerse yourself in
                    the songs that shaped your favorite setlists
                </DetailsTextStyled>
                <DetailsListStyled>
                    <div>
                        <DetailsHeaderStyled className={anybody.className}>
                            Setlist searching
                        </DetailsHeaderStyled>
                        <DetailsListTextStyled>
                            Find your favorite artists, and pick your favorite setlist
                            to keep with you (don&apos;t worry, we won&apos;t tell if it
                            wasn&apos;t your stop on the tour!)
                        </DetailsListTextStyled>
                        <DetailsHeaderStyled className={anybody.className}>
                            Preview the final playlist
                        </DetailsHeaderStyled>
                        <DetailsListTextStyled>
                            Maybe there&apos;s another version of that one song you love
                            that wasn&apos;t the one we chose. Everyone&apos;s got their
                            own taste! Update the playlist and with the one that feels
                            right
                        </DetailsListTextStyled>
                        <DetailsHeaderStyled className={anybody.className}>
                            Save directly to your Spotify account
                        </DetailsHeaderStyled>
                        <DetailsListTextStyled>
                            Once you&apos;ve got that playlist perfected, click the
                            button to sync if to your Spotify account and take it with
                            wherever you go. That commute is sounding just a bit more
                            fun!
                        </DetailsListTextStyled>
                    </div>
                    <DetailsImageWrapperStyled>
                        <Image
                            {...djImageProps}
                            fill
                            sizes="50vw"
                            style={{ objectFit: "contain" }}
                        />
                    </DetailsImageWrapperStyled>
                </DetailsListStyled>
            </DetailsSectionStyled>
            <LowerCTASectionStyled>
                <LowerCTAHeaderStyled className={anybody.className}>
                    One&hellip; Two&hellip; One, two, three, four!
                </LowerCTAHeaderStyled>
                <LowerCTATextStyled>
                    What else are you waiting for?! Let's get going, {ctaPhrase}
                </LowerCTATextStyled>
                <CTAButton>Get started</CTAButton>
            </LowerCTASectionStyled>
        </main>
    );
}

const HeroSectionStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: ${spacing.xxl}px ${spacing["4xl"]}px;
    gap: ${spacing["4xl"]}px;
    background-color: ${colors.backgroundDark};
    color: ${colors.textPrimary};
    height: 720px;
`;

const HeroHeadlineStyled = styled.h1`
    font-size: ${spacing.xxxl}px;
    font-weight: ${fontSizes.extraBold};
    line-height: ${lineHeight.xxl}px;
`;

const HeroTextSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacing.lg}px;
    justify-content: center;
`;

const HeroTextStyled = styled.p`
    font-size: ${spacing.lg}px;
    line-height: ${lineHeight.lg}px;
    font-weight: ${fontSizes.bold};
`;

const HeroImageWrapperStyled = styled.div`
    position: relative;
    aspect-ratio: 1.33 / 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const DetailsSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${spacing.xxl}px ${spacing["4xl"]}px;
    gap: ${spacing.lg}px;
    background-color: ${colors.backgroundLight};
    color: ${colors.textSecondary};
    height: 800px;
`;

const DetailsHeadlineStyled = styled.h2`
    font-size: ${spacing.xxl}px;
    font-weight: ${fontSizes.bold};
    line-height: ${lineHeight.xxl}px;
`;

const DetailsTextStyled = styled.p`
    font-size: ${spacing.lg}px;
    line-height: ${lineHeight.lg}px;
    text-align: center;
`;

const DetailsListStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${spacing.lg}px;
    align-items: center;
`;

const DetailsImageWrapperStyled = styled.div`
    position: relative;
    aspect-ratio: 1.33 / 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const DetailsHeaderStyled = styled.h3`
    font-size: ${spacing.xl}px;
    font-weight: ${fontSizes.bold};
    line-height: ${lineHeight.xl}px;
    margin-bottom: ${spacing.sm}px;
`;

const DetailsListTextStyled = styled.p`
    font-size: ${spacing.md}px;
    line-height: ${lineHeight.md}px;
    margin-bottom: ${spacing.md}px;
`;

const LowerCTASectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${spacing.xxl}px ${spacing["4xl"]}px;
    gap: ${spacing.xl}px;
    background-color: ${colors.backgroundDark};
    color: ${colors.textPrimary};
`;

const LowerCTAHeaderStyled = styled.h2`
    font-size: ${spacing.xxl}px;
    font-weight: ${fontSizes.extraBold};
    line-height: ${lineHeight.xxl}px;
`;

const LowerCTATextStyled = styled.p`
    font-size: ${spacing.lg}px;
    line-height: ${lineHeight.lg}px;
    text-align: center;
`;

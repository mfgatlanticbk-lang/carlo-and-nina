"use client"

import React from "react"
import localFont from "next/font/local"
import { StorySection } from "@/components/StorySection"
import { layeredSectionTitleSize, sectionType } from "@/lib/section-typography"

const theSeasons = localFont({
  src: "../../Font/Fontspring-DEMO-theseasons-reg.otf",
  display: "swap",
  variable: "--font-the-seasons",
})

const aboveTheBeyond = localFont({
  src: "../../Font/above-the-beyond-script.otf",
  display: "swap",
  variable: "--font-above-beyond",
})

const CORNER_DECO_CLASS =
  "block h-auto w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[220px] lg:max-w-[260px]"

function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <span
        className="h-px w-6 sm:w-10"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent))",
        }}
      />
      <span className="h-0.5 w-0.5 rounded-full bg-motif-deep/45 sm:h-1 sm:w-1" aria-hidden />
      <span
        className="h-px w-6 sm:w-10"
        style={{
          background:
            "linear-gradient(to left, transparent, color-mix(in srgb, var(--color-motif-deep) 38%, transparent))",
        }}
      />
    </div>
  )
}

function LoveStoryTitle() {
  return (
    <h1
      className="welcome-title-lockup relative mx-auto w-full max-w-full text-center mt-8 sm:mt-10 md:mt-12"
      style={
        {
          "--title-size": layeredSectionTitleSize.main,
          "--script-size": layeredSectionTitleSize.script,
          "--script-overlap": layeredSectionTitleSize.overlap,
        } as React.CSSProperties
      }
    >
      <span
        className={`${theSeasons.className} block uppercase leading-[0.78] tracking-[0.08em] min-[400px]:tracking-[0.11em] sm:tracking-[0.13em] md:tracking-[0.14em] mt-4 sm:mt-5 md:mt-6`}
        style={{
          fontSize: "var(--title-size)",
          color: "var(--color-welcome-navy)",
        }}
      >
       Our Love Story
      </span>
      <span
        aria-hidden
        className={`${aboveTheBeyond.className} relative z-10 mx-auto block w-fit max-w-full px-1 leading-[0.88] sm:leading-[0.9]`}
        style={{
          marginTop: "calc(var(--script-overlap) + clamp(0.5rem, 2vw, 1rem))",
          fontSize: "var(--script-size)",
          color: "var(--color-welcome-green)",
          textShadow:
            "0 1px 0 color-mix(in srgb, var(--color-welcome-bg) 95%, white), 0 0 10px color-mix(in srgb, var(--color-welcome-bg) 65%, white)",
        }}
      >
        Our Journey to Forever
      </span>
      <span className="sr-only">Our Journey to Forever</span>
    </h1>
  )
}

export function LoveStory() {
  return (
    <div className={`${theSeasons.variable} ${aboveTheBeyond.variable} relative min-h-screen overflow-x-hidden`}>
      <div
        className="relative px-4 pb-2 pt-8 text-center sm:pt-10 md:pt-12"
        style={{ background: "var(--color-welcome-bg)" }}
      >
        <div className="pointer-events-none  absolute right-0 top-0 z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/decoration/top-right-decos.png"
            alt=""
            className="block h-auto w-auto max-w-[220px] sm:max-w-[160px] md:max-w-[220px] lg:max-w-[260px]"
          />
        </div>
        <div className="pointer-events-none absolute left-0 top-0 z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/decoration/top-left-decos.png"
            alt=""
            className={CORNER_DECO_CLASS}
          />
        </div>
        <div className="relative z-20 mx-auto max-w-5xl @container/love-story">
          <div className="mx-auto mb-5 sm:mb-6 md:mb-7">
            <OrnamentalDivider />
          </div>
          <div className="mx-auto">
            <LoveStoryTitle />
          </div>
        </div>
{/* 
        <p
          className="font-goudy-italic mx-auto mt-4 max-w-xl text-[0.75rem] leading-snug sm:mt-5 sm:text-[0.8125rem] md:mt-6 md:text-[0.84375rem]"
          style={{ color: "var(--color-welcome-text)" }}
        >
          &ldquo;11 Years of Love, Now Forever&rdquo;
        </p> */}
      </div>

      <StorySection
  theme="light"
  layout="image-left"
  isFirst={true}
  title="First Friendly Date"
  imageSrc="/LoveStory/loveStory (1).webp"
  text={
    <>
      <p className="mb-4">
      Ours is not an ordinary love story but just like many others, it started with a simple message "Hi" and so they say, the rest is history. 
      </p>
    </>
  }
/>

<StorySection
  theme="dark"
  layout="image-right"
  imageSrc="/LoveStory/loveStory (2).webp"
  title="When Two Paths Crossed"
  text={
    <>
      <p className="mb-4">
      Three years ago, destiny brought us together in the same workplace. The first time we saw each other, never did we imagined that we just found our future. 
      </p>
    </>
  }
/>

<StorySection
  theme="light"
  layout="image-left"
  imageSrc="/LoveStory/loveStory (3).webp"
  title="An Unexpected Beginning"
  text={
    <>
      <p>
      A man who was broken and in pain at that time unexpectedly crossed paths with a woman who was contented and has entrusted her single life to God. A gap of 15 years in age, he is a widow and she is  young. Both did not expect what's coming but God has a beautiful plan for them.
      </p>
    </>
  }
/>

<StorySection
  theme="dark"
  layout="image-right"
  imageSrc="/LoveStory/loveStory (4).webp"
  title="From Conversations to Connection"
  text={
    <>
      <p>
      One short message and one warm reply is all that it takes. Small talks turned to hours of conversations, they got deeper and more personal as the days passed and days turned into weeks and months without ceasing. He was healing and found a reason to be happy again while she has found peace and sincere connection with her newfound friend. 
      </p>
    </>
  }
/>

<StorySection
  theme="light"
  layout="image-left"
  isLast={true}
  imageSrc="/LoveStory/loveStory (5).webp"
  title="When Friendship Became Love"
  text={
    <>
      <p className="mb-4">
      The friendship quickly blossomed to something more. Both were caught off guard and before they realize it, they were already deeply in love. It was not easy and quite complicated as they live in different worlds with different priorities and different realities in life. 
      </p>
    </>
  }
/>

<StorySection
  theme="dark"
  layout="image-right"
  imageSrc="/LoveStory/loveStory (6).webp"
  title="Love That Chose to Stay"
  text={
    <>
      <p className="mb-4">
      They were not supposed to be a couple so their relationship was put to the tests but real love is strong and prevailing. She never judged him from the start and just accepted him as he is. He never doubted her feeling and tendencies, he just loved her for who she is. She made him happy and restored his purpose in life. 
      </p>
    </>
  }
/>

<StorySection
  theme="light"
  layout="image-left"
  isLast={true}
  imageSrc="/LoveStory/loveStory (7).webp"
  title="Written by Gods Perfect Timing"
  text={
    <>
      <p className="mb-4">
      With faith in God and complete trust in His plan, they realized that they are totally made for each other and that His timing couldn't be more perfect. A match that was destined before they even met and is destined for the love of a lifetime together as husband and wife. 
      </p>
    </>
  }
/>
<StorySection
  theme="dark"
  layout="image-right"
  imageSrc="/LoveStory/loveStory (8).webp"
  title="Love That Chose to Stay"
  text={
    <>
      <p className="mb-4">
      They were not supposed to be a couple so their relationship was put to the tests but real love is strong and prevailing. She never judged him from the start and just accepted him as he is. He never doubted her feeling and tendencies, he just loved her for who she is. She made him happy and restored his purpose in life. 
      </p>
    </>
  }
/>

<StorySection
  theme="light"
  layout="image-left"
  isLast={true}
  imageSrc="/mobile-background/couples (3).webp"
  title="Written by Gods Perfect Timing"
  text={
    <>
      <p className="mb-4">
      With faith in God and complete trust in His plan, they realized that they are totally made for each other and that His timing couldn't be more perfect. A match that was destined before they even met and is destined for the love of a lifetime together as husband and wife. 
      </p>
    </>
  }
/>
<div
        className="relative px-4 pb-16 pt-8 text-center sm:pb-20 sm:pt-10 md:pb-24 md:pt-12"
        style={{ background: "var(--color-welcome-bg)" }}
      >
        <div className="pointer-events-none absolute bottom-0 left-0 z-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/decoration/bottom-left-decos.png"
            alt=""
            className={CORNER_DECO_CLASS}
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 z-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/decoration/bottom-right-decos.png"
            alt=""
            className={CORNER_DECO_CLASS}
          />
        </div>
        <div className="relative z-20">
          <div className="mx-auto mb-5 sm:mb-6">
            <OrnamentalDivider />
          </div>
          <blockquote className="mx-auto max-w-xl px-2">
            <p
              className={`font-goudy-italic ${sectionType.textRelaxed} italic leading-relaxed`}
              style={{ color: "var(--color-welcome-text)" }}
            >
              &ldquo;I have found the one whom my soul loves.&rdquo;
            </p>
            <footer
              className={`font-goudy-italic mt-2 sm:mt-3 ${sectionType.label} not-italic tracking-wide`}
              style={{ color: "var(--color-welcome-green)" }}
            >
              — Song of Solomon 3: 4
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

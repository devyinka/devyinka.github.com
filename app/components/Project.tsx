"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { TechnologyType, ProjectType } from "../types";
import { GithubSVG, LinkSVG } from "./ui/icons";
import ProjectsSectionAnimations from "../utils/ProjectsSectionAnimations";

export const Project = (project: ProjectType) => {
  const {
    description,
    title,
    icon,
    imgUrl,
    videoUrl,
    technologies,
    githubUrl,
    websiteUrl,
  } = project;
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return ProjectsSectionAnimations.mobileAnimation();

    ProjectsSectionAnimations.titleAnimation();
    ProjectsSectionAnimations.videoAnimation();
    ProjectsSectionAnimations.descriptionAnimation();
    ProjectsSectionAnimations.websiteUrlAnimation();
    ProjectsSectionAnimations.githubUrlAnimation();
  }, []);

  useEffect(() => {
    if (shouldLoadVideo || !videoWrapperRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(videoWrapperRef.current);

    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  return (
    <div className="grid gap-6 overflow-hidden lg:grid-cols-2 lg:items-start">
      <div className="flex lg:hidden items-center text-3xl font-bold text-white opacity-0 mobile-animation titleSection">
        <span className="bg-[#303036] p-2 rounded-md mr-2"> {icon}</span>
        {title}
      </div>

      <div
        className="opacity-0 mobile-animation videoSection"
        ref={videoWrapperRef}
      >
        <div className="w-full overflow-hidden rounded-xl border-1 border-[#212121] aspect-video">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={imgUrl}
            src={shouldLoadVideo ? videoUrl : undefined}
          ></video>
        </div>
      </div>

      <Card className="opacity-0 mobile-animation descriptionCard">
        <CardBody className="text-gray-400 text-lg flex flex-col justify-start gap-4">
          <div className="hidden lg:flex text-3xl font-bold text-white opacity-0 mobile-animation titleSection">
            <span className="bg-[#303036] p-2 rounded-md mr-2"> {icon}</span>{" "}
            {title}
          </div>
          {description}
          <div className=" flex flex-wrap gap-2">
            {technologies.map(
              ({ name, icon }: TechnologyType, index: number) => (
                <Chip key={`technology-item-${index}`} size="sm">
                  <span className="flex items-center gap-2">
                    {/* {icon} */}
                    {name}
                  </span>
                </Chip>
              ),
            )}
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-2 gap-6 lg:col-start-2">
        <Card
          isHoverable
          className={`${
            websiteUrl === "NONE" ? "hidden" : "col-span-1"
          } opacity-0 mobile-animation githubUrlCard`}
        >
          <Link
            href={websiteUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="min-h-full flex justify-center items-center"
          >
            <CardBody className="justify-center items-center">
              {!websiteUrl ? (
                <h2 className="font-bold text-xl text-gray-400 text-center">
                  Coming Soon!
                </h2>
              ) : (
                <LinkSVG />
              )}
            </CardBody>
          </Link>
        </Card>

        <Card
          isHoverable
          className={`${
            websiteUrl === "NONE" ? "col-span-2" : "col-span-1"
          } opacity-0 mobile-animation websiteUrlCard`}
        >
          <Link
            href={githubUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="min-h-full flex justify-center items-center"
          >
            <CardBody className="justify-center items-center">
              <GithubSVG color="#ffffff" size={50} />
            </CardBody>
          </Link>
        </Card>
      </div>
    </div>
  );
};

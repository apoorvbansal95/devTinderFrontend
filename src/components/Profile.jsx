import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const user= useSelector(store=>store.user)

    return (
    <div>
       <div
      className="relative flex size-full min-h-screen flex-col bg-[#181113] dark justify-between group/design-root overflow-x-hidden"
    >
      <div>
        <div className="flex items-center bg-[#181113] p-4 pb-2 justify-between">
          <div className="text-white flex size-12 shrink-0 items-center" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <div className="flex w-12 items-center justify-end">
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            >
              <div className="text-white" data-icon="DotsThreeVertical" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              > <img className="justify-center" src={user.photo}/></div>
              <div className="flex flex-col items-center justify-center justify-center">
                <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{user.firstName}</p>
                <p className="text-[#b99da6] text-base font-normal leading-normal text-center">{user.about}</p>
                <p className="text-[#b99da6] text-base font-normal leading-normal text-center">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Skills</h3>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#39282d] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">JavaScript</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#39282d] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">React</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#39282d] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">Node.js</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#39282d] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">Python</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#39282d] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">SQL</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#39282d] pl-4 pr-4">
            <p className="text-white text-sm font-medium leading-normal">Git</p>
          </div>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Experience</h3>
        <div className="flex items-center gap-4 bg-[#181113] px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">Software Engineer at Tech Innovators Inc.</p>
            <p className="text-[#b99da6] text-sm font-normal leading-normal line-clamp-2">2021 - Present</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#181113] px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">Junior Developer at CodeCrafters LLC</p>
            <p className="text-[#b99da6] text-sm font-normal leading-normal line-clamp-2">2019 - 2021</p>
          </div>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Education</h3>
        <div className="flex items-center gap-4 bg-[#181113] px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">Bachelor of Science in Computer Science, Stanford University</p>
            <p className="text-[#b99da6] text-sm font-normal leading-normal line-clamp-2">2015 - 2019</p>
          </div>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Projects</h3>
        <div className="flex items-center gap-4 bg-[#181113] px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">Personal Portfolio Website</p>
            <p className="text-[#b99da6] text-sm font-normal leading-normal line-clamp-2">GitHub</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#181113] px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">E-commerce Platform</p>
            <p className="text-[#b99da6] text-sm font-normal leading-normal line-clamp-2">Live Demo</p>
          </div>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Collaboration Preferences</h3>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Open to collaborating on open-source projects, side hustles, and innovative startups. Prefer remote work and asynchronous communication.
        </p>
      </div>
      <div><div className="h-5 bg-[#181113]"></div></div>
    </div>
    </div>
  )
}

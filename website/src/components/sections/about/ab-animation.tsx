import Box from 'components/common/box'
import { DURATION, gsap } from 'lib/gsap'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export const Ab1 = () => {
  return (
    <div className="ab">
      <svg
        viewBox="0 0 942.69 651.42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ab"
      >
        <g clipPath="url(#ab-1-clip0)">
          <path
            fill="white"
            d="M343,793.15c-33.48,0-60.06-8.8-79-26.17s-28.65-42.24-28.65-73.76V472.07c0-13-3.3-22.22-9.82-27.38-6.79-4.8-19.29-7.23-37.17-7.23h-2l-4.15-16.6,105.26-31V693.22c0,22.36,5.19,38.39,15.41,47.64s29.25,14,56.32,14a159.91,159.91,0,0,0,70.82-16c15.48-7.5,32.17-18.58,49.63-33V469.75c0-11.95-3-20.37-9-25-7.31-4.82-20.08-7.26-38-7.26h-1.95l-4.15-16.6,105.26-31V705.6c0,16.25,3.91,28.41,11.64,36.12,8.22,8.24,21.42,12.41,39.21,12.41h2.5V776l-2.37.12c-21,1.06-37.93,2.07-51.75,3.09-12.26,1-28.63,2.57-48.65,4.63l-2.75.29V733.7a258,258,0,0,1-52,36C399.1,785.25,370.6,793.15,343,793.15ZM190.29,432.46c18.18.18,30.68,2.86,38.16,8.19l.09.07c7.82,6.16,11.78,16.7,11.78,31.35V693.22c0,30.06,9.09,53.63,27,70.07s43.44,24.86,75.63,24.86c26.77,0,54.46-7.7,82.32-22.89a252,252,0,0,0,55.16-39.06l4.21-4v56.36c18.79-1.93,34.26-3.39,46-4.37,13.36-1,29.57-2,49.51-3V759.1c-17.92-.39-31.46-5-40.25-13.85s-13.1-22-13.1-39.65V396.54L432.59,424.3l2,8.16c18.19.18,30.91,2.85,38.87,8.15l.14.1c7.32,5.64,11,15.41,11,29V708.32l-.91.75c-18.09,15-35.43,26.55-51.54,34.35a165,165,0,0,1-73,16.48c-28.35,0-48.43-5.16-59.67-15.33s-17.06-27.51-17.06-51.35V396.54L188.25,424.3Z"
            transform="translate(-22.3 -136.73)"
          />
          <path
            fill="white"
            d="M924.66,780H635.09V764.29l.52-.67L897,421.22H784.51c-21.46,0-42.26,8.13-61.82,24.17-17.72,15.18-37.59,40-59,73.65l-1.09,1.71-16.71-6.27,50.38-118.37H965.63v18.05l-.52.67L703,754.9H826.27c25.09,0,46.94-7.1,65-21.12,20.25-16.2,42.41-45.87,65.85-88.16l1.2-2.16,14.14,7.61Zm-284.57-5H921.18l45-121.6-6-3.21c-23.32,41.72-45.49,71.15-65.92,87.51-18.94,14.73-41.83,22.19-68.06,22.19H692.82l3.11-4,264.7-343.43V401.11H699.56l-47,110.52,8,3c21.28-33.22,41.1-57.8,58.93-73.08,20.51-16.83,42.38-25.34,65-25.34H907.1L640.09,766Z"
            transform="translate(-22.3 -136.73)"
          />
          <path
            fill="white"
            d="M740.8,341.89H722.1l-.75-.89c-40.24-47.45-88.61-84.32-143.78-109.58-59.34-27.87-125.27-42-196-42-70.18,0-136.12,14.12-196,42-57.24,26.3-105.34,63.16-143,109.55l-.76.93H22.3l2.16-3.75C63.6,270.3,115,218.69,177.11,184.73c58.5-31.85,127.29-48,204.48-48,78.23,0,147.55,16.15,206,48,62.14,33.42,113,85,151.1,153.44Zm-16.39-5h7.86c-37.41-65.7-86.85-115.4-147-147.76-57.75-31.45-126.27-47.4-203.66-47.4-76.34,0-144.33,16-202.09,47.39C119.33,222,69.37,271.7,31,336.89h8.53c38-46.56,86.46-83.58,144-110,60.51-28.16,127.15-42.44,198.07-42.44,71.45,0,138.1,14.28,198.08,42.45C635.15,252.29,683.85,289.3,724.41,336.89Z"
            transform="translate(-22.3 -136.73)"
          />
        </g>
        <defs>
          <clipPath id="ab-1-clip0">
            <rect width="942.69" height="651.42" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export const Ab2 = () => {
  return (
    <div className="absolute ab" data-scroll-speed={-0.2} data-scroll>
      <svg
        viewBox="0 0 942.69 651.42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#ab-2-clip0)">
          <path
            fill="white"
            d="M343,793.15c-33.48,0-60.06-8.8-79-26.17s-28.65-42.24-28.65-73.76V472.07c0-13-3.3-22.22-9.82-27.38-6.79-4.8-19.29-7.23-37.17-7.23h-2l-4.15-16.6,105.26-31V693.22c0,22.36,5.19,38.39,15.41,47.64s29.25,14,56.32,14a159.91,159.91,0,0,0,70.82-16c15.48-7.5,32.17-18.58,49.63-33V469.75c0-11.95-3-20.37-9-25-7.31-4.82-20.08-7.26-38-7.26h-1.95l-4.15-16.6,105.26-31V705.6c0,16.25,3.91,28.41,11.64,36.12,8.22,8.24,21.42,12.41,39.21,12.41h2.5V776l-2.37.12c-21,1.06-37.93,2.07-51.75,3.09-12.26,1-28.63,2.57-48.65,4.63l-2.75.29V733.7a258,258,0,0,1-52,36C399.1,785.25,370.6,793.15,343,793.15ZM190.29,432.46c18.18.18,30.68,2.86,38.16,8.19l.09.07c7.82,6.16,11.78,16.7,11.78,31.35V693.22c0,30.06,9.09,53.63,27,70.07s43.44,24.86,75.63,24.86c26.77,0,54.46-7.7,82.32-22.89a252,252,0,0,0,55.16-39.06l4.21-4v56.36c18.79-1.93,34.26-3.39,46-4.37,13.36-1,29.57-2,49.51-3V759.1c-17.92-.39-31.46-5-40.25-13.85s-13.1-22-13.1-39.65V396.54L432.59,424.3l2,8.16c18.19.18,30.91,2.85,38.87,8.15l.14.1c7.32,5.64,11,15.41,11,29V708.32l-.91.75c-18.09,15-35.43,26.55-51.54,34.35a165,165,0,0,1-73,16.48c-28.35,0-48.43-5.16-59.67-15.33s-17.06-27.51-17.06-51.35V396.54L188.25,424.3Z"
            transform="translate(-22.3 -136.73)"
          />
          <path
            fill="white"
            d="M924.66,780H635.09V764.29l.52-.67L897,421.22H784.51c-21.46,0-42.26,8.13-61.82,24.17-17.72,15.18-37.59,40-59,73.65l-1.09,1.71-16.71-6.27,50.38-118.37H965.63v18.05l-.52.67L703,754.9H826.27c25.09,0,46.94-7.1,65-21.12,20.25-16.2,42.41-45.87,65.85-88.16l1.2-2.16,14.14,7.61Zm-284.57-5H921.18l45-121.6-6-3.21c-23.32,41.72-45.49,71.15-65.92,87.51-18.94,14.73-41.83,22.19-68.06,22.19H692.82l3.11-4,264.7-343.43V401.11H699.56l-47,110.52,8,3c21.28-33.22,41.1-57.8,58.93-73.08,20.51-16.83,42.38-25.34,65-25.34H907.1L640.09,766Z"
            transform="translate(-22.3 -136.73)"
          />
          <path
            fill="white"
            d="M740.8,341.89H722.1l-.75-.89c-40.24-47.45-88.61-84.32-143.78-109.58-59.34-27.87-125.27-42-196-42-70.18,0-136.12,14.12-196,42-57.24,26.3-105.34,63.16-143,109.55l-.76.93H22.3l2.16-3.75C63.6,270.3,115,218.69,177.11,184.73c58.5-31.85,127.29-48,204.48-48,78.23,0,147.55,16.15,206,48,62.14,33.42,113,85,151.1,153.44Zm-16.39-5h7.86c-37.41-65.7-86.85-115.4-147-147.76-57.75-31.45-126.27-47.4-203.66-47.4-76.34,0-144.33,16-202.09,47.39C119.33,222,69.37,271.7,31,336.89h8.53c38-46.56,86.46-83.58,144-110,60.51-28.16,127.15-42.44,198.07-42.44,71.45,0,138.1,14.28,198.08,42.45C635.15,252.29,683.85,289.3,724.41,336.89Z"
            transform="translate(-22.3 -136.73)"
          />
        </g>
        <defs>
          <clipPath id="ab-2-clip0">
            <rect width="942.69" height="651.42" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export const Ab3 = () => {
  return (
    <div className="absolute ab" data-scroll-speed={-0.4} data-scroll>
      <svg
        viewBox="0 0 942.69 651.42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#ab-3-clip0)">
          <path
            fill="white"
            d="M343,793.15c-33.48,0-60.06-8.8-79-26.17s-28.65-42.24-28.65-73.76V472.07c0-13-3.3-22.22-9.82-27.38-6.79-4.8-19.29-7.23-37.17-7.23h-2l-4.15-16.6,105.26-31V693.22c0,22.36,5.19,38.39,15.41,47.64s29.25,14,56.32,14a159.91,159.91,0,0,0,70.82-16c15.48-7.5,32.17-18.58,49.63-33V469.75c0-11.95-3-20.37-9-25-7.31-4.82-20.08-7.26-38-7.26h-1.95l-4.15-16.6,105.26-31V705.6c0,16.25,3.91,28.41,11.64,36.12,8.22,8.24,21.42,12.41,39.21,12.41h2.5V776l-2.37.12c-21,1.06-37.93,2.07-51.75,3.09-12.26,1-28.63,2.57-48.65,4.63l-2.75.29V733.7a258,258,0,0,1-52,36C399.1,785.25,370.6,793.15,343,793.15ZM190.29,432.46c18.18.18,30.68,2.86,38.16,8.19l.09.07c7.82,6.16,11.78,16.7,11.78,31.35V693.22c0,30.06,9.09,53.63,27,70.07s43.44,24.86,75.63,24.86c26.77,0,54.46-7.7,82.32-22.89a252,252,0,0,0,55.16-39.06l4.21-4v56.36c18.79-1.93,34.26-3.39,46-4.37,13.36-1,29.57-2,49.51-3V759.1c-17.92-.39-31.46-5-40.25-13.85s-13.1-22-13.1-39.65V396.54L432.59,424.3l2,8.16c18.19.18,30.91,2.85,38.87,8.15l.14.1c7.32,5.64,11,15.41,11,29V708.32l-.91.75c-18.09,15-35.43,26.55-51.54,34.35a165,165,0,0,1-73,16.48c-28.35,0-48.43-5.16-59.67-15.33s-17.06-27.51-17.06-51.35V396.54L188.25,424.3Z"
            transform="translate(-22.3 -136.73)"
          />
          <path
            fill="white"
            d="M924.66,780H635.09V764.29l.52-.67L897,421.22H784.51c-21.46,0-42.26,8.13-61.82,24.17-17.72,15.18-37.59,40-59,73.65l-1.09,1.71-16.71-6.27,50.38-118.37H965.63v18.05l-.52.67L703,754.9H826.27c25.09,0,46.94-7.1,65-21.12,20.25-16.2,42.41-45.87,65.85-88.16l1.2-2.16,14.14,7.61Zm-284.57-5H921.18l45-121.6-6-3.21c-23.32,41.72-45.49,71.15-65.92,87.51-18.94,14.73-41.83,22.19-68.06,22.19H692.82l3.11-4,264.7-343.43V401.11H699.56l-47,110.52,8,3c21.28-33.22,41.1-57.8,58.93-73.08,20.51-16.83,42.38-25.34,65-25.34H907.1L640.09,766Z"
            transform="translate(-22.3 -136.73)"
          />
          <path
            fill="white"
            d="M740.8,341.89H722.1l-.75-.89c-40.24-47.45-88.61-84.32-143.78-109.58-59.34-27.87-125.27-42-196-42-70.18,0-136.12,14.12-196,42-57.24,26.3-105.34,63.16-143,109.55l-.76.93H22.3l2.16-3.75C63.6,270.3,115,218.69,177.11,184.73c58.5-31.85,127.29-48,204.48-48,78.23,0,147.55,16.15,206,48,62.14,33.42,113,85,151.1,153.44Zm-16.39-5h7.86c-37.41-65.7-86.85-115.4-147-147.76-57.75-31.45-126.27-47.4-203.66-47.4-76.34,0-144.33,16-202.09,47.39C119.33,222,69.37,271.7,31,336.89h8.53c38-46.56,86.46-83.58,144-110,60.51-28.16,127.15-42.44,198.07-42.44,71.45,0,138.1,14.28,198.08,42.45C635.15,252.29,683.85,289.3,724.41,336.89Z"
            transform="translate(-22.3 -136.73)"
          />
        </g>
        <defs>
          <clipPath id="ab-3-clip0">
            <rect width="942.69" height="651.42" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export const Ab4 = () => {
  return (
    <div className="absolute ab" data-scroll-speed={-0.6} data-scroll>
      <svg
        viewBox="0 0 942.69 651.42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#ab-4-clip0)">
          <path
            fill="white"
            d="M285,393.2v300q0,34.8,16.24,49.49t58,14.69q38.65,0,71.91-16.23,24-11.61,51-34V469.75q0-19.32-10.05-27.06Q460.51,435,432.68,435l-3.09-12.38,99.75-29.38V705.6q0,25.51,12.37,37.89,13.14,13.15,41,13.14v17q-30.93,1.56-51.81,3.1-18.55,1.53-48.71,4.63V728a253,253,0,0,1-55.68,39.44Q384,790.65,343,790.65q-49.49,0-77.32-25.51t-27.84-71.92V472.07q0-20.88-10.82-29.38Q216.16,435,188.33,435l-3.09-12.38Z"
            transform="translate(-26.63 -139.23)"
          />
          <path
            fill="white"
            d="M963.13,398.61V413.3L697.91,757.4H826.27q38.65,0,66.5-21.65,30.91-24.74,66.5-88.92l10.05,5.41-46.4,125.27H637.59V765.14L902.05,418.72H784.51q-33.25,0-63.41,24.74Q694,466.67,661.56,517.69l-12.37-4.64,48.72-114.44Z"
            transform="translate(-26.63 -139.23)"
          />
          <path
            fill="white"
            d="M26.63,339.39Q85.27,237.75,178.31,186.93q87.57-47.69,203.28-47.7,117.27,0,204.84,47.7,93.06,50,150.12,152.46h-13.3q-61-71.92-144.64-110.24-89.9-42.22-197-42.22-106.32,0-197,42.22Q97.79,269,40.7,339.39Z"
            transform="translate(-26.63 -139.23)"
          />
        </g>
        <defs>
          <clipPath id="ab-4-clip0">
            <rect width="942.69" height="651.42" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

const AbAnimation = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const tlRef = useRef<gsap.core.Timeline>()

  useEffect(() => {
    gsap.set('.ab svg', { autoAlpha: 0 })
  }, [])

  useEffect(() => {
    if (!inView) return

    function handleResize() {
      const multiplier = Math.min((window.innerWidth * 20) / 1440, 20)
      const tl = gsap.timeline({
        paused: true,
        smoothChildTiming: true
      })
      tl.to('.ab svg', {
        delay: DURATION / 2,
        y: (index) => index * multiplier,
        x: (index) => index * multiplier,
        autoAlpha: 1,
        ease: 'elastic.out(1, 0.75)',
        duration: DURATION,
        stagger: {
          each: 0.02,
          from: 'end'
        }
      })
        .timeScale(0.4)
        .play()
      tlRef.current = tl
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [inView])

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      tlRef.current?.kill()
    }
  }, [])

  return (
    <Box
      css={{
        position: 'relative',
        width: '100%',
        marginTop: '-64px',
        '.absolute': { position: 'absolute', inset: 0 }
      }}
      ref={ref}
    >
      <Ab1 />
      <Ab2 />
      <Ab3 />
      <Ab4 />
    </Box>
  )
}

export default AbAnimation
import React from 'react'
import {styled, css} from 'frontity'

export const H1 = styled.h2`
  text-align: left;
  margin: 0;
  margin-left: 24px;
  padding-bottom: 2rem;
`

const Relative = styled.div`
  position: relative;
`

const Flex = styled.div`
  display: flex;
`

export const HorizontalCenter = styled(Flex)`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
`

export const Container = styled.div`
  height: stretch;
  width: 100%;
  padding-bottom: 2rem;
  background: transparent;
`

export const Item = styled.div`
  color: white;
  font-size: 1rem;
  text-transform: capitalize;
  width: ${({size}) => `${size}rem`};
  height: ${({size}) => `${size/2}rem`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  >p{
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
  }
`

function getPrevElement(list) {
  const sibling = list[0].previousElementSibling
  
  if (sibling instanceof HTMLElement) {
    return sibling
  }

  return sibling
}

function getNextElement(list) {
  const sibling = list[list.length - 1].nextElementSibling

  if (sibling instanceof HTMLElement) {
    return sibling
  }

  return null
}

function usePosition(ref) {
  const [prevElement, setPrevElement] = React.useState(null)
  const [nextElement, setNextElement] = React.useState(null)

  React.useEffect(() => {
    const element = ref.current

    const update = () => {
      const rect = element.getBoundingClientRect()
     
      const visibleElements = Array.from(element.children).filter((child) => {
        const childRect = child.getBoundingClientRect()
        

        return childRect.left >= rect.left && childRect.right <= rect.right
      })

      if (visibleElements.length > 0) {
        setPrevElement(getPrevElement(visibleElements))
        setNextElement(getNextElement(visibleElements))
      }
    }

    update()

    element.addEventListener('scroll', update, {passive: true})

    return () => {
      element.removeEventListener('scroll', update, {passive: true})
    }
  }, [ref])

  const scrollToElement = React.useCallback(
    (element) => {
      const currentNode = ref.current

      if (!currentNode || !element) return

      let newScrollPosition

      newScrollPosition =
        element.offsetLeft +
        element.getBoundingClientRect().width / 2 -
        currentNode.getBoundingClientRect().width / 2

      currentNode.scroll({
        left: newScrollPosition,
        behavior: 'smooth',
      })
    },
    [ref],
  )

  const scrollRight = React.useCallback(() => scrollToElement(nextElement), [
    scrollToElement,
    nextElement,
  ])

  const scrollLeft = React.useCallback(() => scrollToElement(prevElement), [
    scrollToElement,
    prevElement,
  ])

  return {
    hasItemsOnLeft: prevElement !== null,
    hasItemsOnRight: nextElement !== null,
    scrollRight,
    scrollLeft,
  }
}

const CarouserContainer = styled(Relative)`
  overflow: hidden;
`

 const CarouselItem = styled.div`
  flex: 0 0 auto;

  margin-left: 1rem;
`

 const CarouselButton = styled.button`
  position: absolute;

  cursor: pointer;

  top: 50%;
  z-index: 1;

  transition: transform 0.1s ease-in-out;

  background: white;
  border-radius: 15px;
  border: none;
  padding: 0.5rem;
`
 const LeftCarouselButton = styled(CarouselButton)`
  left: 0;
  transform: translate(-100%, -50%);

  ${CarouserContainer}:hover & {
    transform: translate(0%, -50%);
  }

  visibility: ${({hasItemsOnLeft}) => (hasItemsOnLeft ? `all` : `hidden`)};
`

 const RightCarouselButton = styled(CarouselButton)`
  right: 0;
  transform: translate(100%, -50%);

  ${CarouserContainer}:hover & {
    transform: translate(0%, -50%);
  }

  visibility: ${({hasItemsOnRight}) => (hasItemsOnRight ? `all` : `hidden`)};
`

 const CarouserContainerInner = styled(Flex)`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  // offset for children spacing
  margin-left: -1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  ${CarouselItem} & {
    scroll-snap-align: center;
  }
`

const ArrowLeft = ({size = 30, color = '#000000'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H6M12 5l-7 7 7 7" />
  </svg>
)


const ArrowRight = ({size = 30, color = '#000000'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
)


export function Carousel({children}) {
  const ref = React.useRef()

  const {
    hasItemsOnLeft,
    hasItemsOnRight,
    scrollRight,
    scrollLeft,
  } = usePosition(ref)

  return (
    <CarouserContainer role="region" aria-label="Colors carousel">
      <CarouserContainerInner ref={ref}>
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index}>{child}</CarouselItem>
        ))}
      </CarouserContainerInner>
      <LeftCarouselButton hasItemsOnLeft={hasItemsOnLeft} onClick={scrollLeft} aria-label='Previous slide'>
        <ArrowLeft />
      </LeftCarouselButton>
      <RightCarouselButton
        hasItemsOnRight={hasItemsOnRight}
        onClick={scrollRight}
        aria-label='Next slide'
      >
        <ArrowRight />
      </RightCarouselButton>
    </CarouserContainer>
  )
}
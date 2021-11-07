import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Box } from '../../UI'
import {
  FALLING,
  FALLING_MOVEMENT_DURATION,
  WIND,
  WIND_DURATION,
} from './constants'

const Leaf = styled(Box)`
  width: 20px;
  height: 20px;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/125707/leaf.svg)
    no-repeat;
  background-size: 100%;
  transform-style: preserve-3d;
  backface-visibility: visible;
`

const AnimatedLeaf = motion(Leaf)

const variants = {
  [WIND]: (leaf) => ({
    x: [-10, 250].map((x) => x * leaf.x),
    y: [-30, 45, 60].map((y) => y * leaf.y),
    rotateZ: [0, 180].map((rotation) => rotation * leaf.rotation),
    rotateX: [10, 100, 10].map((rotation) => rotation * leaf.rotation),
    rotateY: [10, 30, 10].map((rotation) => rotation * leaf.rotation),
    transition: {
      default: { duration: WIND_DURATION * leaf.speed, repeat: Infinity },
    },
  }),
  [FALLING]: (leaf) => ({
    x: [250, 340, 250].map((x) => x * leaf.x),
    y: [60, 1100].map((y) => y * leaf.y),
    rotateZ: [180, 360].map((rotation) => rotation * leaf.rotation),
    rotatey: [10, 40].map((rotation) => rotation * leaf.rotation),
    rotateY: [10, 40].map((rotation) => rotation * leaf.rotation),
    transition: {
      x: {
        type: 'spring',
        stiffness: 100,
        duration: FALLING_MOVEMENT_DURATION * leaf.speed,
        repeat: Infinity,
      },
      default: { duration: 10 },
      rotateZ: {
        duration: FALLING_MOVEMENT_DURATION * leaf.speed,
        repeat: Infinity,
        repeatType: 'reverse',
      },
      rotateX: {
        duration: FALLING_MOVEMENT_DURATION * leaf.speed,
        repeat: Infinity,
        repeatType: 'reverse',
      },
      rotateY: {
        duration: FALLING_MOVEMENT_DURATION * leaf.speed,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  }),
}

export const FallingLeaf = ({ leaf }) => {
  const [animation, setAnimation] = useState(WIND)
  const timeout = useRef(null)

  const animateLeaves = () => {
    timeout.current = setTimeout(() => {
      setAnimation(FALLING)
      timeout.current = setTimeout(() => {
        setAnimation(WIND)
        animateLeaves()
      }, 9000)
    }, WIND_DURATION * 1000 * leaf.speed)
  }

  useEffect(() => {
    animateLeaves()
    return () => clearTimeout(timeout.current)
  }, [])

  return (
    <AnimatedLeaf
      custom={leaf}
      animate={animation}
      variants={variants}
      style={{ scale: '2' }}
    />
  )
}

FallingLeaf.defaultProps = {
  leaf: {
    x: 1,
    y: 1,
    speed: 1,
    rotation: 1,
  },
}

FallingLeaf.propTypes = {
  leaf: PropTypes.shape({
    id: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    speed: PropTypes.number,
    rotation: PropTypes.number,
  }),
}

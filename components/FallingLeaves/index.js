import { Box } from '../../UI'
import { LEAF_LIMITS } from './constants'
import { FallingLeaf } from './FallingLeaf'

const leaves = Array(30)
  .fill(1)
  .map((_, index) => ({
    id: `leaf_${index}`,
    x: Math.random() * (5 - LEAF_LIMITS.minX + 1) + LEAF_LIMITS.minX,
    y: Math.random() * (10 - LEAF_LIMITS.minY + 1) + LEAF_LIMITS.minY,
    speed:
      Math.random() * (LEAF_LIMITS.maxSpeed - LEAF_LIMITS.minSpeed + 1) +
      LEAF_LIMITS.minSpeed,
    rotation:
      Math.random() * (LEAF_LIMITS.rotationMax - LEAF_LIMITS.rotationMin + 1) +
      LEAF_LIMITS.rotationMin,
  }))

export const FallingLeaves = () => {
  return (
    <>
      {leaves.map((leaf) => (
        <Box
          position='fixed'
          top='0'
          left='0'
          right='0'
          bottom='0'
          key={leaf.id}
          zIndex={-1}
        >
          <FallingLeaf leaf={leaf} />
        </Box>
      ))}
    </>
  )
}

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { motion } from 'framer-motion'
import { faArrowRight, faGift, faCopy } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Box, Button, Icon, Image, Text } from '../UI'
import { I18n } from '../utils/translation'
import { WhatsApp } from '../utils/images'

const AnimatedBox = motion(Box)
const variants = {
  copied: {
    backgroundColor: '#BD6E5A',
    color: '#FEF4ED',
  },
  notCopied: {
    backgroundColor: '#FEF4ED',
    color: '#BD6E5A',
  },
}
export const Gift = ({ wontParticipate, language, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [keyCopied, setKeyCopied] = useState(false)

  const handleCopyPixKey = () => {
    setKeyCopied(true)
    const pixKey = [
      // eslint-disable-next-line no-undef
      new ClipboardItem({
        // eslint-disable-next-line no-undef
        'text/plain': new Blob(['056.381.063-75'], { type: 'text/plain' }),
      }),
    ]
    // eslint-disable-next-line no-undef
    navigator.clipboard.write(pixKey)
  }

  return (
    <>
      <AnimatedBox
        position='fixed'
        top={100}
        left={['auto', null, undefined]}
        right={['auto', null, 0]}
        zIndex='999'
        width={['100%', null, 600]}
        initial={{ x: 600 }}
        animate={{ x: isOpen ? 0 : 600 }}
        transition={{ delay: isOpen ? 0.5 : 0, duration: 1 }}
      >
        <Box
          display='flex'
          {...props}
          bg={['white', null, 'rgba(255, 255, 255, 0.8)']}
          border='1px solid #BD6E5A'
          borderTopLeftRadius={8}
          borderBottomLeftRadius={8}
          borderTopRightRadius={[8, null, 0]}
          borderBottomRightRadius={[8, null, 0]}
          style={{ textTransform: 'uppercase' }}
          letterSpacing='0.32em'
          lineHeight={['20px', '30px']}
          fontSize={[10, null, 12]}
        >
          <Box p={15}>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='baseline'
            >
              <Box
                color='#BD6E5A'
                fontSize={14}
                display='inline-flex'
                justifyContent='center'
                alignItems='center'
              >
                <Box width={[20, null, 30]} height={[20, null, 30]}>
                  <Icon icon={faGift} alt='Gift Icon' mr={2} />
                </Box>
                <Text as='span'>{I18n[language].gift.title}</Text>
              </Box>
              <Button
                borderTopLeftRadius={15}
                borderBottomLeftRadius={15}
                color='#BD6E5A'
                fontSize='20px'
                mt={10}
                onClick={() => setIsOpen(false)}
              >
                <Box width={20} height={20}>
                  <Icon
                    icon={faArrowRight}
                    alt='Arrow Right'
                    onClick={() => setIsOpen(true)}
                  />
                </Box>
              </Button>
            </Box>
            {wontParticipate ? (
              <Text>{I18n[language].gift.wontParticipate}</Text>
            ) : (
              <>
                <Text>{I18n[language].gift.firstText}</Text>
                <Box>
                  <AnimatedBox
                    bg='#FEF4ED'
                    color='#BD6E5A'
                    display='inline-flex'
                    border='1px solid #BD6E5A'
                    borderRadius='8px'
                    letterSpacing='0.42em'
                    p='8px'
                    style={{ cursor: 'pointer' }}
                    onClick={handleCopyPixKey}
                    animate={keyCopied ? 'copied' : 'notCopied'}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                    fontSize={['14px', null, '16px']}
                  >
                    <Text as='span' fontWeight='bold'>
                      cpf: 056.381.063-75
                    </Text>

                    <Box width={20} height={20}>
                      <Icon icon={faCopy} alt='Copy Icon' ml={2} />
                    </Box>
                  </AnimatedBox>
                  {keyCopied && (
                    <Text as='span' color='#BD6E5A' fontWeight='bold'>
                      {' '}
                      Copied!!
                    </Text>
                  )}
                </Box>
                <Text>{I18n[language].gift.secondText}</Text>
              </>
            )}
            <Box mt={4}>
              <Text>{I18n[language].gift.ourSocialMedia}</Text>
              <Box
                display='flex'
                justifyContent='space-around'
                textAlign='center'
              >
                <Text
                  as='a'
                  href='https://wa.me/5585982067354?text=Hello%20Tony'
                  target='_blank'
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    <Box height='3rem' width='3rem'>
                      <Image src={WhatsApp} alt='whatsApp icon' />
                    </Box>
                    <Text my={0} fontSize='10px'>
                      Tony&rsquo;s WhatsApp
                    </Text>
                  </Box>
                </Text>
                <Text
                  as='a'
                  href='https://wa.me/558599848104?text=Hello%20Ariel'
                  target='_blank'
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    <Box height='3rem' width='3rem'>
                      <Image
                        src={WhatsApp}
                        alt='whatsApp icon'
                        height='3rem'
                        width='3rem'
                      />
                    </Box>
                    <Text my={0} fontSize='10px'>
                      Ariel&rsquo;s WhatsApp
                    </Text>
                  </Box>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </AnimatedBox>
      <AnimatedBox
        initial={{ x: 0, rotateZ: 0, display: true }}
        animate={{
          x: isOpen ? 110 : 0,
          rotateZ: isOpen ? 720 : 0,
          display: 'flex',
        }}
        transition={{ delay: isOpen ? 0 : 0.5, duration: 1 }}
        position='fixed'
        top={[undefined, null, 100]}
        bottom={[30, null, undefined]}
        right={30}
        zIndex='999'
        maxHeight={[50, null, 70]}
      >
        <Button
          borderRadius={100}
          width={[50, null, 70]}
          height={[50, null, 70]}
          color='white'
          fontSize={[20, null, 30]}
          onClick={() => setIsOpen(true)}
          boxShadow='rgba(0, 0, 0, 0.25) 0px 10px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 2px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
          p={10}
          bg='#BD6E5A'
        >
          <Box
            width={[20, null, 30]}
            height={[20, null, 30]}
            display='flex'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            margin='auto'
          >
            <Icon icon={faGift} alt='Gift Icon' />
          </Box>
        </Button>
      </AnimatedBox>
      <AnimatedBox
        position='fixed'
        top='0'
        left='0'
        width='100%'
        height='100%'
        backgroundColor='#3333339c'
        onClick={() => setIsOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        display={isOpen ? ['block', null, 'none'] : 'none'}
        style={{ zIndex: 80 }}
      />
    </>
  )
}

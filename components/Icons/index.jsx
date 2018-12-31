import styled from 'styled-components'
// Social icons
import Facebook from '../Icons/facebook.svg'
import Twitter from '../Icons/twitter.svg'
import Github from '../Icons/github.svg'
import Pinterest from '../Icons/pinterest.svg'
import Google from '../Icons/google.svg'
import Goodreads from '../Icons/goodreads.svg'
import Linkedin from '../Icons/linkedin.svg'

// Crypto icons
import Bitcoin from '../Icons/bitcoin.svg'
import Ethereum from '../Icons/ethereum.svg'
import Monero from '../Icons/monero.svg'

const icons = {
  //Social
  Facebook,
  Twitter,
  Github,
  Pinterest,
  Google,
  Goodreads,
  Linkedin,
  //Crypto
  Bitcoin,
  Ethereum,
  Monero
}

export function withStyles(styles) {
  return Object.assign(
    {},
    ...Object.keys(icons).map((key, index) => {
      const Component =
        typeof icons[key] === 'string' && icons[key].startsWith('data')
          ? props => <img src={icons[key]} alt={`${key}-icon`} {...props} />
          : icons[key]

      return {
        [key]: styles ? (
          styled(Component)`
            ${styles}
          `
        ) : (
          <Component />
        )
      }
    })
  )
}

export default icons

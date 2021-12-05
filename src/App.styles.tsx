import { css } from '@linaria/core'
import { headerHeight } from 'src/styles/var'

const root = css`
  padding-top: 0;
`

const headerClass = css`
  height: ${headerHeight};
  box-shadow: 0 4px 30px rgb(185 203 219 / 25%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const titleClass = css`
  text-align: center;
`

const wrapper = css`
  display: flex;
`

export default {
  root,
  headerClass,
  titleClass,
  wrapper,
}

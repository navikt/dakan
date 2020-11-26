import Cookies from 'js-cookie'
import env from '@beam-australia/react-env'

const graph_server = env('GRAPH_SERVER')

export const CheckIfAuthorized = (func) => {
  const clientUser = Cookies.get('ClientUser')
  const tokenId = Cookies.get('ClientToken')

  if (clientUser && tokenId) {
    return func()
  } else {
    return window.location.replace(
      `${graph_server}/login?redirect_url=${window.location.href}`,
    )
  }
}
export default CheckIfAuthorized

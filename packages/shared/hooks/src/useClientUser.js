import * as React from 'react';
import Cookies from 'js-cookie'

export const useClientUser = () => {
  const [clientUser, setClientUser] = React.useState()

  React.useEffect(() => {
    const tokenId = Cookies.get('ClientToken')
    const clientUser = Cookies.get('ClientUser')
    if (tokenId && clientUser) {
      setClientUser(
        JSON.parse(clientUser.replace(/\\054/g, ',').replace(/\\"/g, '"')),
      )
    }
  }, [])

  return clientUser
}
export default useClientUser

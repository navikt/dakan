import env from '@beam-australia/react-env'

const server = env('ELASTIC_ENDPOINT')
const index = env('ELASTIC_INDEX')

export default async function runRequest(body) {
  const response = await fetch(`${server}/${index}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })
  return response.json()
}

import * as React from 'react'
import { StatefulButtonGroup, MODE } from 'baseui/button-group'

import { Button } from '../../components/button/Button'

export const Like_DislikeRating = (props) => {

  const [likeActive, setLikeActive] = React.useState(false)
  const [dislikeActive, setDislikeActive] = React.useState(false)

  const [dislike, setDislike] = React.useState(0)
  const [like, setLike] = React.useState(0)


  const updateLike = () => {
    setLikeActive(!likeActive)
    setLike(likeActive ? like - 1 : like + 1)
  }

  const updateDislike = () => {
    setDislikeActive(!dislikeActive)
    setDislike(dislikeActive ? dislike - 1 : dislike + 1)
  }

  const handleLike = () => {
    if (dislikeActive) {
      updateLike()
      updateDislike()
    } else {
      updateLike()
    }
  }

  const handleDislike = () => {
    if (likeActive) {
      updateLike()
      updateDislike()
    } else {
      updateDislike()
    }
  }

  return (
    <StatefulButtonGroup mode={MODE.radio}>
      <Button onClick={() => {
        handleLike()
      }}>Like {like}</Button>

      <Button onClick={() => {
        handleDislike()
      }}>Dislike {dislike}</Button>

    </StatefulButtonGroup>
  )
}
export default Like_DislikeRating
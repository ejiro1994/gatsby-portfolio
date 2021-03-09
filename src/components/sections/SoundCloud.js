import React from "react"
import styled from 'styled-components'

function SoundCloud() {
    return (
      <Frame>
        <iframe
        //   width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1223477743%3Fsecret_token%3Ds-4X8ikxiWb9K&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </Frame>
    )
}


export default SoundCloud


const Frame = styled.div`
/* margin-top: 50px; */
`
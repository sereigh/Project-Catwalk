import React from 'react';

// FEC/public/icons/iconfinder_Logo_facebook.png
// FEC/client/Overview/DescriptionOutbound.jsx

// import logoFacebook from '../../public/icons/iconfinder_Logo_facebook.png';

// ERROR in ./public/icons/iconfinder_Logo_facebook.png 1:0
// Module parse failed: Unexpected character '�' (1:0)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

function DescriptionOutbound() {
  return (
    <div id="descriptionOutbound">
      <span id="shareToFacebook">
        <a href="https://www.Facebook.com">[ Fb ]</a>
      </span>
      {/* <span id="shareToFacebook">
        <a href="https://www.Facebook.com">
          <img src={logoFacebook} alt="logoFacebook" id="logoFacebook" />
        </a>
      </span> */}
      <span id="shareToTwitter">
        <a href="https://Twitter.com">[ Tw ]</a>
      </span>
      <span id="shareToPinterest">
        <a href="https://www.Pinterest.com">[ Pi ]</a>
      </span>
    </div>
  );
}

export default DescriptionOutbound;

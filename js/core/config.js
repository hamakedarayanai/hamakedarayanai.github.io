export const config = {
    shrinkThreshold: 50,
    throttleDelay: 100,
    phoneRegex: /^\+?[1-9]\d{7,14}$/,
    maxMessageLength: 500,
    lazyLoadRootMargin: '100px 0px',
    audioErrorMessages: {
      aborted: 'Playback was aborted.',
      network: 'Network error occurred.',
      decode: 'Decoding error occurred.',
      unsupported: 'Audio format not supported.',
      generic: 'Unable to play audio stream.'
    }
  };
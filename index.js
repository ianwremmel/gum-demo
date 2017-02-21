'use strict';

it(`does not hang`, () => {
  return navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
    fake: true
  });
});

"use client";
import React, { useEffect, useState } from "react";
import { getVideoData } from "@src/service/api";
import Hls from 'hls.js';

const VideoDetails = () => {
  const [hlsVideoUrl, setHlsVideoUrl] = useState("");

  useEffect(() => {
    getVideoData().then((res) => {
      if (res.success) {
        setHlsVideoUrl(res?.data?.hlsUrl);
      }
    });
  }, []);

  useEffect(() => {
    const video = document.getElementById("video-player");

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsVideoUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    }
  }, [hlsVideoUrl]);

  return (
    <div>
      <video id="video-player" controls playsInline width="800" height="450">
        <source src={hlsVideoUrl} type="application/x-mpegURL" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoDetails;

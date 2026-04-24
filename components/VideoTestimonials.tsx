"use client";
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import videoData from '@/data/videos.json';

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">VIDEO DËSHMI</span>
          <h2 className="text-3xl md:text-5xl font-black text-mikeDark mt-2">Ndiqni eksperiencën e tyre</h2>
        </div>

        {/* Dynamic Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.map((video) => (
            <div 
              key={video.id}
              onClick={() => setSelectedVideo(video.url)}
              className={`relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-mikeDark 
                ${video.type === 'portrait' ? 'aspect-[9/16] row-span-2' : 'aspect-video'}`}
            >
              {/* Video Preview (Autoplay muted loop on hover) */}
              <video 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                muted
                onMouseOver={e => e.currentTarget.play()}
                onMouseOut={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
              >
                <source src={video.url} type="video/mp4" />
              </video>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-mikePurple group-hover:scale-110 transition-all duration-300">
                  <Play fill="white" size={28} />
                </div>
                <p className="mt-4 text-white font-bold px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-mikeDark/95 p-4 md:p-10 backdrop-blur-sm">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white hover:text-mikePurple transition-colors"
          >
            <X size={40} />
          </button>
          
          <div className="w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center">
            <video 
              controls 
              autoPlay 
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;
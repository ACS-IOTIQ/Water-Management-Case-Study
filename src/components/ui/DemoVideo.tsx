import { useState } from 'react';
import { Play } from 'lucide-react';

interface DemoVideoProps {
  streamableId: string;
  poster: string;
  label?: string;
}

export function DemoVideo({ streamableId, poster, label = 'Watch Demo' }: DemoVideoProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="demo-video"
        src={`https://streamable.com/e/${streamableId}?autoplay=1`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title={label}
      />
    );
  }

  return (
    <button type="button" className="demo-video-poster" onClick={() => setPlaying(true)}>
      <img src={poster} alt="" />
      <span className="demo-video-play">
        <Play size={22} fill="currentColor" strokeWidth={0} />
      </span>
      <span className="demo-video-label">{label}</span>
    </button>
  );
}

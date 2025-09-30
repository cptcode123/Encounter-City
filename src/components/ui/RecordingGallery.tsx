"use client";
import { useState } from "react";
import { MixlrRecording } from "../../../lib/mixlr";
import {RecordingCard} from "./Card";
import { ModalPlayer } from "./ModalPlayer";

export default function RecordingGallery({ recordings, imageUrl }: { recordings: MixlrRecording[]; imageUrl: string }) {
  const [selectedRecording, setSelectedRecording] = useState<null | typeof recordings[0]>(null);

   const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (recording: typeof recordings[0]) => {
    setSelectedRecording(recording);
    setIsOpen(true);
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recordings.map((rec, idx) => (
          <RecordingCard
            key={rec.link}
            title={rec.title}
            image={imageUrl || "/default-cover.jpg"}
            onClick={() => handleCardClick(rec)}
          />
        ))}
      </div>

      {isOpen && (
        <ModalPlayer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          recordings={selectedRecording ? [selectedRecording] : []}
        />
      )}
    </div>
  );
}

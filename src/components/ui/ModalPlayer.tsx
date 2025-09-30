"use client";
import { MixlrRecording } from "../../../lib/mixlr";

type ModalPlayerProps = {
  recordings: MixlrRecording[];
  onClose: () => void;
  isOpen: boolean;
};

export function ModalPlayer({ recordings, onClose, isOpen }: ModalPlayerProps) {
  if (!isOpen || !recordings || recordings.length === 0) return null;

  // For demonstration, use the first recording in the array
  const recording = recordings[0];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Player box */}
      <div className="relative bg-white rounded-lg shadow-xl w-[600px] max-w-full z-10 p-6">
        <h2 className="text-xl font-bold mb-4">{recording.title}</h2>
        <audio controls src={recording.audioUrl} className="w-full" />
        <button
          className="absolute top-3 right-3 text-black hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

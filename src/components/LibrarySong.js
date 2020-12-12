import React from "react";

const LibrarySong = ({
  isPlaying,
  song,
  audioRef,
  setCurrentSong,
  songs,
  id,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //Add Active State
    setSongs(
      songs.map((targetSong) => {
        return {
          ...targetSong,
          active: targetSong.id === song.id,
        };
      })
    );
    //check if the song is playing
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

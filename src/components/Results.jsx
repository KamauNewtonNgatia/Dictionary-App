import React from 'react';
import useSearchStore from '../store';
import { useDictionaryQuery } from '../useDictionaryQuery';

const Results = () => {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const { data, error, isLoading } = useDictionaryQuery(searchTerm);

  if (isLoading) return <div className="spinner">Loading...</div>;
  if (error) return <div className="error-message">Word not found</div>;

  if (!data || !data.length) return null;

  const wordData = data[0];

  return (
    <div className="word-details">
      <h2>{wordData.word}</h2>
      <p>Phonetic: {wordData.phonetic}</p>
      <p>Part of Speech: {wordData.meanings[0].partOfSpeech}</p>
      <h3>Definitions:</h3>
      <ul>
        {wordData.meanings[0].definitions.map((def, index) => (
          <li key={index}>{def.definition}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;

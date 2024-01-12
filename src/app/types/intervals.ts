import {KeyValuePair} from "./key-value-pair";

export class Intervals {

  static intervalSemitones: KeyValuePair[] = [
    {key: 'Perfect Prime', value: 0},
    {key: 'Minor Second', value: 1},
    {key: 'Major Second', value: 2},
    {key: 'Minor Third', value: 3},
    {key: 'Major Third', value: 4},
    {key: 'Perfect Fourth', value: 5},
    {key: 'Tritone', value: 6},
    {key: 'Perfect Fifth', value: 7},
    {key: 'Minor Sixth', value: 8},
    {key: 'Major Sixth', value: 9},
    {key: 'Minor Seventh', value: 10},
    {key: 'Major Seventh', value: 11},
    {key: 'Octave', value: 12}
  ];

  static teachersVersionBR: KeyValuePair[] = [
    {key: 'Primeira Justa', value: 0},
    {key: 'Segunda Menor', value: 1},
    {key: 'Segunda Maior', value: 2},
    {key: 'Terça Menor', value: 3},
    {key: 'Terça Maior', value: 4},
    {key: 'Quarta Justa', value: 5},
    {key: 'Quarta Aumentada', value: 6},
    {key: 'Quinta Justa', value: 7},
    {key: 'Sexta Menor', value: 8},
    {key: 'Sexta Maior', value: 9},
    {key: 'Sétima Menor', value: 10},
    {key: 'Sétima Maior', value: 11},
    {key: 'Oitava', value: 12}
  ]

  static indexedNotes = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#'
  ]
  static indexedNotesBR = [
    'Lá',
    'Lá#',
    'Sí',
    'Dó',
    'Dó#',
    'Ré',
    'Ré#',
    'Mi',
    'Fá',
    'Fá#',
    'Sol',
    'Sol#'
  ]
}

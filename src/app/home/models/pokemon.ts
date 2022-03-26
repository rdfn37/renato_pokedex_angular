export interface Pokemon {
  species: {
    name: string
  },
  sprites: {
    front_default: string,
    other: {
      home: {
        front_default: string
      }
    }
  },
  id: number,
  types: [{
    type: {
      name: string
    }
  }],
  height: number,
  weight: number,
  abilities: [{
    ability: {
      name: string
    }
  }],
  stats: [
    {
      base_stat: number,
      stat: {
        name: string
      }
    }
  ]
}

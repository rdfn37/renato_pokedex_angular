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
  }]
}

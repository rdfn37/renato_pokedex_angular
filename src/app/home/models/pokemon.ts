export interface Pokemon {
  name: string,
  sprites: {
    front_default: string
  },
  id: number,
  types: [{
    type: {
      name: string
    }
  }]
}

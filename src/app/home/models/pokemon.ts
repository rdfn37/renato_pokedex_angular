export interface Pokemon {
  name: string,
  sprites: {
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
  height: number
}

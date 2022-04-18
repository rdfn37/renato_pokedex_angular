export interface Gym {
  _id: string;
  location: string;
  speciality: string;
  reward: [string];
  description: string;
  leader: {
    name: string;
    img_url: string;
    team: [
      {
        pokemon: string;
        img_url: string;
        level: 10;
        type: [string];
        ability: string;
        moves: [string];
        held_item: string;
      }
    ];
  };
}
